import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// ──────────────────────────────────────────────────────────────
// CONFIG QUILL – toolbar étendu
// ──────────────────────────────────────────────────────────────
const quillModules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "blockquote", "code-block"],
    ["clean"],
  ],
};

const quillFormats = [
  "header", "bold", "italic", "underline", "strike",
  "color", "background", "align",
  "list", "bullet", "link", "blockquote", "code-block",
];

// ──────────────────────────────────────────────────────────────
// TEMPLATES
// ──────────────────────────────────────────────────────────────
const TEMPLATES = [
  {
    id: "promo",
    label: "Promotion",
    icon: "🎁",
    title: "Offre exceptionnelle – [Nom de la promo]",
    content: `<h2>Une offre à ne pas manquer 🎉</h2>
<p>Bonjour,</p>
<p>Nous sommes ravis de vous présenter notre dernière offre exclusive réservée à nos abonnés fidèles.</p>
<p><strong>Profitez de 30% de réduction</strong> sur l'ensemble de notre catalogue jusqu'au <em>[date]</em>.</p>
<p style="text-align:center"><a href="#">→ Voir l'offre</a></p>
<p>À bientôt,<br/>L'équipe</p>`,
  },
  {
    id: "news",
    label: "Actualité",
    icon: "📰",
    title: "Nos actualités du mois – [Mois]",
    content: `<h2>Quoi de neuf ce mois-ci ?</h2>
<p>Bonjour,</p>
<p>Voici un résumé des dernières nouvelles de notre équipe :</p>
<ul>
  <li><strong>Nouveauté 1 :</strong> Description rapide...</li>
  <li><strong>Nouveauté 2 :</strong> Description rapide...</li>
  <li><strong>Nouveauté 3 :</strong> Description rapide...</li>
</ul>
<p>Merci pour votre fidélité.</p>`,
  },
  {
    id: "welcome",
    label: "Bienvenue",
    icon: "👋",
    title: "Bienvenue dans notre communauté !",
    content: `<h2>Bienvenue ! 🎊</h2>
<p>Bonjour [Prénom],</p>
<p>Nous sommes ravis de vous compter parmi nos abonnés. Vous allez désormais recevoir :</p>
<ul>
  <li>Nos actualités exclusives</li>
  <li>Des offres réservées aux membres</li>
  <li>Des conseils et ressources utiles</li>
</ul>
<p>N'hésitez pas à nous écrire si vous avez des questions.</p>
<p>Chaleureusement,<br/>L'équipe</p>`,
  },
];

// ──────────────────────────────────────────────────────────────
// HELPERS
// ──────────────────────────────────────────────────────────────
const stripHtml = (html) => html.replace(/<[^>]*>/g, "").trim();
const wordCount = (html) => {
  const text = stripHtml(html);
  return text ? text.split(/\s+/).length : 0;
};
const readingTime = (html) => Math.max(1, Math.round(wordCount(html) / 200));

// ──────────────────────────────────────────────────────────────
// COMPONENT
// ──────────────────────────────────────────────────────────────
const NewsletterSender = () => {
  // ── State ──
  const [tab, setTab] = useState("compose"); // compose | preview
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [senderName, setSenderName] = useState("");
  const [replyTo, setReplyTo] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null); // { type: 'success'|'error', msg }
  const [showTemplates, setShowTemplates] = useState(false);
  const fileRef = useRef();

  // ── Draft auto-save ──
  useEffect(() => {
    const draft = localStorage.getItem("newsletter_draft");
    if (draft) {
      const d = JSON.parse(draft);
      setTitle(d.title || "");
      setSubject(d.subject || "");
      setSenderName(d.senderName || "");
      setReplyTo(d.replyTo || "");
      setContent(d.content || "");
      setTags(d.tags || []);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("newsletter_draft", JSON.stringify({ title, subject, senderName, replyTo, content, tags }));
  }, [title, subject, senderName, replyTo, content, tags]);

  // ── Toast helper ──
  const showToast = (type, msg) => {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 4000);
  };

  // ── Image upload ──
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("image", file);
    try {
      const res = await axios.post("http://localhost:8000/api/upload-image", formData);
      const imageUrl = res.data.url;
      setContent((prev) => prev + `<img src="${imageUrl}" style="max-width:100%;border-radius:8px;margin:12px 0;" />`);
      showToast("success", "Image insérée avec succès");
    } catch {
      showToast("error", "Échec de l'upload de l'image");
    }
  };

  // ── Tags ──
  const addTag = (e) => {
    if ((e.key === "Enter" || e.key === ",") && tagInput.trim()) {
      e.preventDefault();
      const val = tagInput.trim().replace(/,$/, "");
      if (val && !tags.includes(val)) setTags([...tags, val]);
      setTagInput("");
    }
  };
  const removeTag = (t) => setTags(tags.filter((x) => x !== t));

  // ── Load template ──
  const applyTemplate = (tpl) => {
    setTitle(tpl.title);
    setSubject(tpl.title);
    setContent(tpl.content);
    setShowTemplates(false);
    setTab("compose");
    showToast("success", `Template "${tpl.label}" chargé`);
  };

  // ── Validation ──
  const validate = () => {
    if (!subject.trim()) { showToast("error", "L'objet de l'email est obligatoire"); return false; }
    if (!content.trim() || stripHtml(content).length < 10) { showToast("error", "Le contenu est trop court"); return false; }
    return true;
  };

  // ── Send ──
  const handleSend = async () => {
    if (!validate()) return;
    const confirmed = window.confirm("Envoyer cette newsletter à tous les abonnés ?");
    if (!confirmed) return;
    setLoading(true);
    try {
      await axios.post("http://localhost:8000/api/newsletter/send", {
        title, subject, senderName, replyTo, content, tags,
      });
      showToast("success", "Newsletter envoyée avec succès !");
      handleClear();
    } catch {
      showToast("error", "Erreur lors de l'envoi. Réessayez.");
    } finally {
      setLoading(false);
    }
  };

  // ── Reset ──
  const handleClear = () => {
    setTitle(""); setSubject(""); setSenderName(""); setReplyTo("");
    setContent(""); setTags([]);
    localStorage.removeItem("newsletter_draft");
  };

  // ── Completeness score ──
  const score = [
    !!subject.trim(),
    !!senderName.trim(),
    !!replyTo.trim(),
    tags.length > 0,
    stripHtml(content).length > 50,
  ].filter(Boolean).length;

  // ─────────────────────────────────────────
  // RENDER
  // ─────────────────────────────────────────
  return (
    <div style={s.root}>
      {/* ── TOAST ── */}
      {toast && (
        <div style={{ ...s.toast, ...(toast.type === "success" ? s.toastSuccess : s.toastError) }}>
          {toast.type === "success" ? "✓" : "✕"} {toast.msg}
        </div>
      )}

      {/* ── HEADER ── */}
      <header style={s.header}>
        <div style={s.headerLeft}>
          <span style={s.logo}>✉</span>
          <div>
            <h1 style={s.h1}>Newsletter Studio</h1>
            <p style={s.subtitle}>Rédigez, planifiez et envoyez</p>
          </div>
        </div>
        <div style={s.headerRight}>
          <span style={s.score}>Complétude {score}/5</span>
          <div style={s.scoreDots}>
            {[0,1,2,3,4].map(i => (
              <span key={i} style={{ ...s.dot, background: i < score ? "#f97316" : "#e5e7eb" }} />
            ))}
          </div>
        </div>
      </header>

      {/* ── TABS ── */}
      <nav style={s.tabs}>
        {[
          { id: "compose", label: "✏️ Composer" },
          { id: "preview", label: "👁 Aperçu" },
        ].map((t) => (
          <button key={t.id} style={{ ...s.tab, ...(tab === t.id ? s.tabActive : {}) }} onClick={() => setTab(t.id)}>
            {t.label}
          </button>
        ))}
      </nav>

      {/* ════════════════ TAB: COMPOSE ════════════════ */}
      {tab === "compose" && (
        <div style={s.panel}>
          {/* Template picker */}
          <div style={s.templateRow}>
            <button style={s.btnOutline} onClick={() => setShowTemplates(!showTemplates)}>
              📋 Templates
            </button>
            <button style={s.btnGhost} onClick={handleClear}>🧹 Effacer</button>
            <span style={s.meta}>{wordCount(content)} mots · ~{readingTime(content)} min lecture</span>
          </div>

          {showTemplates && (
            <div style={s.templateGrid}>
              {TEMPLATES.map((tpl) => (
                <button key={tpl.id} style={s.tplCard} onClick={() => applyTemplate(tpl)}>
                  <span style={s.tplIcon}>{tpl.icon}</span>
                  <span style={s.tplLabel}>{tpl.label}</span>
                </button>
              ))}
            </div>
          )}

          {/* Email metadata */}
          <fieldset style={s.fieldset}>
            <legend style={s.legend}>Paramètres de l'email</legend>

            <label style={s.label}>Objet de l'email *</label>
            <input
              style={s.input}
              placeholder="Ex : Notre offre du mois de juin 🎉"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />

            <div style={s.row2}>
              <div style={{ flex: 1 }}>
                <label style={s.label}>Nom de l'expéditeur</label>
                <input
                  style={s.input}
                  placeholder="Ex : L'équipe Acme"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={s.label}>Répondre à (reply-to)</label>
                <input
                  style={s.input}
                  type="email"
                  placeholder="contact@monsite.com"
                  value={replyTo}
                  onChange={(e) => setReplyTo(e.target.value)}
                />
              </div>
            </div>

            <label style={s.label}>Titre interne (référence)</label>
            <input
              style={s.input}
              placeholder="Campagne été 2025 – Usage interne uniquement"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label style={s.label}>Segments / Tags</label>
            <div style={s.tagWrap}>
              {tags.map((t) => (
                <span key={t} style={s.tag}>
                  {t} <button style={s.tagX} onClick={() => removeTag(t)}>×</button>
                </span>
              ))}
              <input
                style={s.tagInput}
                placeholder="Ajouter un tag et appuyer sur Entrée…"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={addTag}
              />
            </div>
          </fieldset>

          {/* Editor */}
          <fieldset style={s.fieldset}>
            <legend style={s.legend}>Contenu</legend>
            <ReactQuill
              value={content}
              onChange={setContent}
              modules={quillModules}
              formats={quillFormats}
              style={s.editor}
              placeholder="Rédigez votre newsletter ici…"
            />
            <div style={s.imageRow}>
              <input type="file" accept="image/*" ref={fileRef} style={{ display: "none" }} onChange={handleImageUpload} />
              <button style={s.btnOutline} onClick={() => fileRef.current.click()}>
                🖼 Insérer une image
              </button>
            </div>
          </fieldset>

          {/* Send CTA */}
          <button style={s.sendBtn} onClick={handleSend} disabled={loading}>
            {loading ? "⏳ Envoi en cours…" : "🚀 Envoyer à tous les abonnés"}
          </button>
        </div>
      )}

      {/* ════════════════ TAB: PREVIEW ════════════════ */}
      {tab === "preview" && (
        <div style={s.panel}>
          <div style={s.previewMeta}>
            <div style={s.previewMetaRow}><span style={s.previewKey}>De</span><span>{senderName || "—"}</span></div>
            <div style={s.previewMetaRow}><span style={s.previewKey}>Objet</span><span style={{ fontWeight: 600 }}>{subject || "—"}</span></div>
            <div style={s.previewMetaRow}><span style={s.previewKey}>Reply-to</span><span>{replyTo || "—"}</span></div>
            {tags.length > 0 && (
              <div style={s.previewMetaRow}>
                <span style={s.previewKey}>Segments</span>
                <span>{tags.map(t => <span key={t} style={s.tag}>{t}</span>)}</span>
              </div>
            )}
          </div>
          <div style={s.previewBody}>
            {subject && <h1 style={s.previewTitle}>{subject}</h1>}
            <div dangerouslySetInnerHTML={{ __html: content || "<p style='color:#aaa'>Aucun contenu rédigé.</p>" }} />
          </div>
          <div style={s.previewFooter}>
            <p>Vous recevez cet email car vous êtes abonné(e) à nos communications.</p>
            <p><a href="#" style={{ color: "#f97316" }}>Se désabonner</a></p>
          </div>
        </div>
      )}

    </div>
  );
};

// ──────────────────────────────────────────────────────────────
// STYLES
// ──────────────────────────────────────────────────────────────
const s = {
  root: {
    maxWidth: 860,
    margin: "32px auto",
    fontFamily: "'Segoe UI', system-ui, sans-serif",
    color: "#111827",
    position: "relative",
  },

  // Toast
  toast: {
    position: "fixed",
    top: 24,
    right: 24,
    padding: "12px 20px",
    borderRadius: 10,
    fontWeight: 600,
    fontSize: 14,
    zIndex: 9999,
    boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
    animation: "fadeIn 0.2s ease",
  },
  toastSuccess: { background: "#d1fae5", color: "#065f46", border: "1px solid #6ee7b7" },
  toastError:   { background: "#fee2e2", color: "#991b1b", border: "1px solid #fca5a5" },

  // Header
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "28px 32px 20px",
    background: "#fff",
    borderRadius: "16px 16px 0 0",
    borderBottom: "1px solid #f3f4f6",
    boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
  },
  headerLeft: { display: "flex", alignItems: "center", gap: 16 },
  logo: { fontSize: 32, background: "#fff7ed", borderRadius: 12, padding: "8px 12px", border: "1px solid #fed7aa" },
  h1: { margin: 0, fontSize: 22, fontWeight: 700, color: "#111827" },
  subtitle: { margin: 0, fontSize: 13, color: "#9ca3af" },
  headerRight: { textAlign: "right" },
  score: { fontSize: 12, color: "#6b7280", fontWeight: 500 },
  scoreDots: { display: "flex", gap: 5, marginTop: 6, justifyContent: "flex-end" },
  dot: { width: 10, height: 10, borderRadius: "50%", transition: "background 0.3s" },

  // Tabs
  tabs: {
    display: "flex",
    background: "#fff",
    borderBottom: "1px solid #f3f4f6",
    padding: "0 24px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
  },
  tab: {
    padding: "14px 18px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    fontSize: 14,
    fontWeight: 500,
    color: "#6b7280",
    borderBottom: "3px solid transparent",
    transition: "all 0.2s",
  },
  tabActive: {
    color: "#f97316",
    borderBottom: "3px solid #f97316",
  },

  // Panel
  panel: {
    background: "#fff",
    borderRadius: "0 0 16px 16px",
    padding: "28px 32px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
    minHeight: 400,
  },

  // Template row
  templateRow: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  },
  templateGrid: {
    display: "flex",
    gap: 12,
    marginBottom: 20,
    flexWrap: "wrap",
  },
  tplCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
    padding: "16px 24px",
    border: "1.5px solid #fed7aa",
    borderRadius: 12,
    background: "#fff7ed",
    cursor: "pointer",
    transition: "all 0.15s",
    fontFamily: "inherit",
  },
  tplIcon: { fontSize: 28 },
  tplLabel: { fontSize: 13, fontWeight: 600, color: "#c2410c" },
  meta: { marginLeft: "auto", fontSize: 12, color: "#9ca3af" },

  // Fieldset
  fieldset: {
    border: "1px solid #f3f4f6",
    borderRadius: 12,
    padding: "20px 20px 16px",
    marginBottom: 20,
  },
  legend: {
    padding: "0 8px",
    fontSize: 12,
    fontWeight: 700,
    color: "#9ca3af",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },

  // Inputs
  label: { display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 },
  input: {
    width: "100%",
    padding: "10px 14px",
    border: "1.5px solid #e5e7eb",
    borderRadius: 8,
    fontSize: 14,
    fontFamily: "inherit",
    marginBottom: 14,
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
    color: "#111827",
    background: "#fafafa",
  },
  row2: { display: "flex", gap: 14 },

  // Tags
  tagWrap: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    border: "1.5px solid #e5e7eb",
    borderRadius: 8,
    padding: 10,
    minHeight: 44,
    background: "#fafafa",
    marginBottom: 14,
    alignItems: "center",
  },
  tag: {
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    background: "#fff7ed",
    border: "1px solid #fed7aa",
    borderRadius: 99,
    padding: "3px 10px",
    fontSize: 13,
    color: "#c2410c",
    fontWeight: 600,
  },
  tagX: { background: "none", border: "none", cursor: "pointer", color: "#f97316", padding: 0, fontSize: 16, lineHeight: 1 },
  tagInput: {
    border: "none",
    outline: "none",
    fontSize: 13,
    background: "transparent",
    flex: 1,
    minWidth: 160,
    fontFamily: "inherit",
    color: "#374151",
  },

  // Quill
  editor: { height: 280, marginBottom: 12 },

  // Image
  imageRow: { marginTop: 52, paddingTop: 8 },

  // Buttons
  btnOutline: {
    padding: "9px 16px",
    border: "1.5px solid #f97316",
    borderRadius: 8,
    background: "#fff",
    color: "#f97316",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "inherit",
    transition: "all 0.15s",
  },
  btnGhost: {
    padding: "9px 14px",
    border: "1.5px solid #e5e7eb",
    borderRadius: 8,
    background: "#fff",
    color: "#6b7280",
    fontSize: 13,
    cursor: "pointer",
    fontFamily: "inherit",
  },
  sendBtn: {
    width: "100%",
    padding: 16,
    background: "linear-gradient(135deg, #f97316, #ea580c)",
    color: "#fff",
    border: "none",
    borderRadius: 12,
    fontWeight: 700,
    fontSize: 16,
    cursor: "pointer",
    fontFamily: "inherit",
    boxShadow: "0 4px 14px rgba(249,115,22,0.35)",
    transition: "opacity 0.2s",
  },

  // Preview
  previewMeta: {
    background: "#f9fafb",
    border: "1px solid #e5e7eb",
    borderRadius: 10,
    padding: "14px 20px",
    marginBottom: 24,
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  previewMetaRow: { display: "flex", gap: 12, fontSize: 14, alignItems: "flex-start" },
  previewKey: { color: "#9ca3af", fontWeight: 600, minWidth: 70, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.05em" },
  previewBody: {
    border: "1px solid #f3f4f6",
    borderRadius: 10,
    padding: "32px 40px",
    background: "#fff",
    minHeight: 300,
    lineHeight: 1.8,
  },
  previewTitle: { fontSize: 26, fontWeight: 800, margin: "0 0 24px", color: "#111827" },
  previewFooter: {
    textAlign: "center",
    padding: "20px 0 4px",
    fontSize: 12,
    color: "#9ca3af",
    borderTop: "1px solid #f3f4f6",
    marginTop: 24,
  },

  // Schedule
  scheduleInfo: {
    background: "#eff6ff",
    border: "1px solid #bfdbfe",
    borderRadius: 10,
    padding: "14px 18px",
    fontSize: 14,
    color: "#1e40af",
    marginBottom: 22,
  },
  schedulePreview: {
    fontSize: 14,
    color: "#374151",
    background: "#f0fdf4",
    border: "1px solid #bbf7d0",
    borderRadius: 8,
    padding: "10px 16px",
    marginTop: 4,
    marginBottom: 20,
  },
  scheduleBtn: {
    padding: "12px 28px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    fontWeight: 700,
    fontSize: 15,
    cursor: "pointer",
    fontFamily: "inherit",
    boxShadow: "0 4px 12px rgba(37,99,235,0.3)",
  },

  // History
  emptyState: { textAlign: "center", padding: "60px 0", color: "#9ca3af" },
  emptyIcon: { fontSize: 52, marginBottom: 12 },
  table: { width: "100%", borderCollapse: "collapse" },
  th: {
    padding: "10px 14px",
    textAlign: "left",
    fontSize: 12,
    fontWeight: 700,
    color: "#9ca3af",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    borderBottom: "1px solid #f3f4f6",
  },
  tr: { borderBottom: "1px solid #f9fafb" },
  td: { padding: "13px 14px", fontSize: 14, color: "#374151" },
  badge: { padding: "3px 10px", borderRadius: 99, fontWeight: 600, fontSize: 12 },
  badgeSent:  { background: "#d1fae5", color: "#065f46" },
  badgeSched: { background: "#dbeafe", color: "#1e40af" },
};

export default NewsletterSender;