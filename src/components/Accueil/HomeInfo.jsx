import React, { useState, useRef } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import ContactPopup from "./ContactPopup";

function HomeInfo() {
  const [timestamp] = useState(Date.now());
  const [hoveredBtn, setHoveredBtn] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  

  return (
    <div>
    
      <section style={styles.section}>
        {/* Background texture */}
        <div style={styles.bgTexture} />

        <div style={styles.container}>
          {/* Left: Text content */}
          <div style={styles.textCol}>
            <span style={styles.eyebrow}>On est là pour vous</span>
            <h2 style={styles.heading}>
              Des questions ?<br />
              <em style={styles.headingAccent}>Parlons-en.</em>
            </h2>
            <p style={styles.body}>
              Notre équipe vous accompagne à chaque étape — que ce soit pour
              découvrir nos programmes, préparer votre inscription, ou simplement
              venir visiter l'école. On préfère une vraie conversation à un
              formulaire impersonnel.
            </p>

            <div style={styles.btnRow}>
              <button
                style={{
                  ...styles.btnPrimary,
                  ...(hoveredBtn === "contact" ? styles.btnPrimaryHover : {}),
                }}
                onMouseEnter={() => setHoveredBtn("contact")}
                onMouseLeave={() => setHoveredBtn(null)}
                onClick={() => setIsContactOpen(true)}
              >
                Nous contacter
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft: 8 }}>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <a
                href="/inscription"
                style={{
                  ...styles.btnSecondary,
                  ...(hoveredBtn === "preinscription" ? styles.btnSecondaryHover : {}),
                }}
                onMouseEnter={() => setHoveredBtn("preinscription")}
                onMouseLeave={() => setHoveredBtn(null)}
              >
                Préinscription
              </a>
            </div>

            {/* Small trust line */}
            <p style={styles.trust}>
              Réponse garantie sous 24h · Pas de démarchage commercial
            </p>
          </div>

          {/* Right: Image collage with decorative motifs */}
          <div style={styles.imageCol}>

            {/* Decorative motif: dot grid top-right */}
            <DotGrid style={{ position: "absolute", top: -20, right: -10, zIndex: 1 }} color="#f97316" opacity={0.35} />

            {/* Decorative motif: circle outline bottom-left */}
            <CircleOutline style={{ position: "absolute", bottom: 10, left: -30, zIndex: 1 }} color="#1e3a8a" />

            {/* Decorative motif: small filled dots near bottom-right */}
            <DotGrid style={{ position: "absolute", bottom: 30, right: 20, zIndex: 1 }} color="#1e3a8a" opacity={0.2} size={4} gap={10} cols={4} rows={4} />

            {/* Main image — top right */}
            <div style={styles.imgWrapMain}>
              <img
                src={`/gslatome.jpg?t=${timestamp}`}
                alt="Vue extérieure de l'école"
                style={styles.imgMain}
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80";
                }}
              />
              {/* Orange accent line */}
              <div style={styles.imgMainAccent} />
            </div>

            {/* Secondary image — bottom left, overlapping */}
            <div style={styles.imgWrapSecondary}>
              <img
                src={`/AT2.jpg?t=${timestamp}`}
                alt="Salle de classe"
                style={styles.imgSecondary}
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80";
                }}
              />
              {/* Small navy tag */}
              <div style={styles.imgTag}>Notre ecole</div>
            </div>
          </div>
        </div>
      </section>
<ContactPopup
                      isOpen={isContactOpen}
                      onClose={() => setIsContactOpen(false)}
                    />
    </div>


  );
}


function DotGrid({ style, color = "#f97316", opacity = 0.4, size = 3, gap = 12, cols = 7, rows = 6 }) {
  const width = cols * gap;
  const height = rows * gap;
  return (
    <svg width={width} height={height} style={{ ...style, opacity }}>
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => (
          <circle key={`${r}-${c}`} cx={c * gap + gap / 2} cy={r * gap + gap / 2} r={size / 2} fill={color} />
        ))
      )}
    </svg>
  );
}

function CircleOutline({ style, color = "#1e3a8a" }) {
  return (
    <svg width="90" height="90" viewBox="0 0 90 90" style={style}>
      <circle cx="45" cy="45" r="40" stroke={color} strokeWidth="2.5" fill="none" opacity="0.25" />
      <circle cx="45" cy="45" r="28" stroke={color} strokeWidth="1.2" fill="none" opacity="0.15" strokeDasharray="5 4" />
    </svg>
  );
}

/* ── Styles ── */

const styles = {
  section: {
    position: "relative",
    padding: "80px 24px 90px",
    backgroundColor: "#f8fafc",
    overflow: "hidden",
    fontFamily: "'Georgia', 'Times New Roman', serif",
  },
  bgTexture: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "radial-gradient(circle at 15% 85%, rgba(249,115,22,0.06) 0%, transparent 50%), radial-gradient(circle at 85% 15%, rgba(30,58,138,0.05) 0%, transparent 50%)",
    pointerEvents: "none",
  },
  container: {
    maxWidth: 1140,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 64,
    alignItems: "center",
    position: "relative",
    zIndex: 2,
  },
  textCol: {
    display: "flex",
    flexDirection: "column",
    gap: 0,
  },
  eyebrow: {
    display: "inline-block",
    fontSize: "0.78rem",
    fontFamily: "'Arial', sans-serif",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#f97316",
    marginBottom: 16,
  },
  heading: {
    fontSize: "2.6rem",
    fontWeight: 400,
    color: "#0f172a",
    lineHeight: 1.2,
    margin: "0 0 20px 0",
  },
  headingAccent: {
    color: "#1e3a8a",
    fontStyle: "italic",
  },
  body: {
    fontSize: "1.05rem",
    color: "#475569",
    lineHeight: 1.8,
    fontFamily: "'Arial', sans-serif",
    margin: "0 0 32px 0",
  },
  btnRow: {
    display: "flex",
    gap: 14,
    flexWrap: "wrap",
    alignItems: "center",
  },
  btnPrimary: {
    outline: "none",
    border: "none",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    padding: "13px 28px",
    background: "linear-gradient(135deg, #e58b46ff 0%, #f7852eff 100%)",
    color: "#fff",
    fontFamily: "'Arial', sans-serif",
    fontWeight: 600,
    fontSize: "0.95rem",
    borderRadius: 4,
    textDecoration: "none",
    boxShadow: "0 2px 12px rgba(249,115,22,0.28)",
    transition: "all 0.2s ease",
    letterSpacing: "0.01em",
  },
  btnPrimaryHover: {
    backgroundColor: "#ea6c10",
    boxShadow: "0 4px 20px rgba(249,115,22,0.4)",
    transform: "translateY(-1px)",
  },
  btnSecondary: {
    display: "inline-flex",
    alignItems: "center",
    padding: "12px 26px",
    backgroundColor: "transparent",
    color: "#1e3a8a",
    fontFamily: "'Arial', sans-serif",
    fontWeight: 600,
    fontSize: "0.95rem",
    borderRadius: 4,
    textDecoration: "none",
    border: "1.5px solid #1e3a8a",
    transition: "all 0.2s ease",
  },
  btnSecondaryHover: {
    backgroundColor: "#1e3a8a",
    color: "#fff",
  },
  trust: {
    marginTop: 18,
    fontSize: "0.78rem",
    color: "#94a3b8",
    fontFamily: "'Arial', sans-serif",
    letterSpacing: "0.02em",
  },

  /* Images */
  imageCol: {
    position: "relative",
    height: 420,
  },
  imgWrapMain: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "78%",
    zIndex: 3,
  },
  imgMain: {
    width: "100%",
    height: 260,
    objectFit: "cover",
    borderRadius: 6,
    display: "block",
    boxShadow: "0 16px 40px rgba(15,23,42,0.14)",
  },
  imgMainAccent: {
    position: "absolute",
    bottom: -6,
    right: -6,
    width: "100%",
    height: "100%",
    border: "3px solid #f97316",
    borderRadius: 6,
    zIndex: -1,
    opacity: 0.5,
  },
  imgWrapSecondary: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "62%",
    zIndex: 4,
  },
  imgSecondary: {
    width: "100%",
    height: 200,
    objectFit: "cover",
    borderRadius: 6,
    display: "block",
    boxShadow: "0 12px 32px rgba(15,23,42,0.16)",
    border: "4px solid #fff",
  },
  imgTag: {
    position: "absolute",
    bottom: 10,
    left: 10,
    backgroundColor: "#1e3a8a",
    color: "#fff",
    fontSize: "0.7rem",
    fontFamily: "'Arial', sans-serif",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    padding: "4px 10px",
    borderRadius: 2,
  },
};

export default HomeInfo;