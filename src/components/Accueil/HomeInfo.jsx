import React, { useState } from "react";
import ContactPopup from "./ContactPopup";

function HomeInfo() {
  const [timestamp] = useState(Date.now());
  const [hoveredBtn, setHoveredBtn] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div>
      <section className="homeinfo-section">
        {/* Background texture */}
        <div className="bgTexture" />

        <div className="container">
          {/* Left: Text content */}
          <div className="textCol">
            <span className="eyebrow">On est là pour vous</span>
            <h2 className="heading">
              Des questions ?<br />
              <em className="headingAccent">Parlons-en.</em>
            </h2>
            <p className="body">
              Notre équipe vous accompagne à chaque étape — que ce soit pour
              découvrir nos programmes, préparer votre inscription, ou simplement
              venir visiter l'école. On préfère une vraie conversation à un
              formulaire impersonnel.
            </p>

            <div className="btnRow">
              <button
                className={`btnPrimary ${hoveredBtn === "contact" ? "hovered" : ""}`}
                onMouseEnter={() => setHoveredBtn("contact")}
                onMouseLeave={() => setHoveredBtn(null)}
                onClick={() => setIsContactOpen(true)}
              >
                Nous contacter
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="btnIcon">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <a
                href="/inscription"
                className={`btnSecondary ${hoveredBtn === "preinscription" ? "hovered" : ""}`}
                onMouseEnter={() => setHoveredBtn("preinscription")}
                onMouseLeave={() => setHoveredBtn(null)}
              >
                Préinscription
              </a>
            </div>

            {/* Small trust line */}
            <p className="trust">
              Réponse garantie sous 24h · Pas de démarchage commercial
            </p>
          </div>

          {/* Right: Image collage with decorative motifs */}
          <div className="imageCol">
            {/* Decorative motif: dot grid top-right */}
            <DotGrid className="deco-dotgrid-1" color="#f97316" opacity={0.35} />

            {/* Decorative motif: circle outline bottom-left */}
            <CircleOutline className="deco-circle-1" color="#1e3a8a" />

            {/* Decorative motif: small filled dots near bottom-right */}
            <DotGrid className="deco-dotgrid-2" color="#1e3a8a" opacity={0.2} size={4} gap={10} cols={4} rows={4} />

            {/* Main image — top right */}
            <div className="imgWrapMain">
              <img
                src={`/gslatome.jpg?t=${timestamp}`}
                alt="Vue extérieure de l'école"
                className="imgMain"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80";
                }}
              />
              <div className="imgMainAccent" />
            </div>

            {/* Secondary image — bottom left, overlapping */}
            <div className="imgWrapSecondary">
              <img
                src={`/AT2.jpg?t=${timestamp}`}
                alt="Salle de classe"
                className="imgSecondary"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80";
                }}
              />
              <div className="imgTag">Notre ecole</div>
            </div>
          </div>
        </div>
      </section>

      <ContactPopup
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <style jsx>{`
        /* ===== BASE STYLES (Desktop first) ===== */
        .homeinfo-section {
          position: relative;
          padding: 80px 24px 90px;
          background-color: #f8fafc;
          overflow: hidden;
          font-family: 'Georgia', 'Times New Roman', serif;
        }

        .bgTexture {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 15% 85%, rgba(249,115,22,0.06) 0%, transparent 50%),
            radial-gradient(circle at 85% 15%, rgba(30,58,138,0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .container {
          max-width: 1140px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .textCol {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .eyebrow {
          display: inline-block;
          font-size: 0.78rem;
          font-family: 'Arial', sans-serif;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #f97316;
          margin-bottom: 16px;
        }

        .heading {
          font-size: 2.6rem;
          font-weight: 400;
          color: #0f172a;
          line-height: 1.2;
          margin: 0 0 20px 0;
        }

        .headingAccent {
          color: #1e3a8a;
          font-style: italic;
        }

        .body {
          font-size: 1.05rem;
          color: #475569;
          line-height: 1.8;
          font-family: 'Arial', sans-serif;
          margin: 0 0 32px 0;
        }

        .btnRow {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          align-items: center;
        }

        .btnPrimary,
        .btnSecondary {
          outline: none;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 13px 28px;
          font-family: 'Arial', sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          border-radius: 4px;
          text-decoration: none;
          transition: all 0.2s ease;
          letter-spacing: 0.01em;
        }

        .btnPrimary {
          background: linear-gradient(135deg, #e58b46ff 0%, #f7852eff 100%);
          color: #fff;
          box-shadow: 0 2px 12px rgba(249,115,22,0.28);
        }

        .btnPrimary.hovered {
          background: #ea6c10;
          box-shadow: 0 4px 20px rgba(249,115,22,0.4);
          transform: translateY(-1px);
        }

        .btnSecondary {
          background: transparent;
          color: #1e3a8a;
          border: 1.5px solid #1e3a8a;
        }

        .btnSecondary.hovered {
          background: #1e3a8a;
          color: #fff;
        }

        .btnIcon {
          margin-left: 8px;
          flex-shrink: 0;
        }

        .trust {
          margin-top: 18px;
          font-size: 0.78rem;
          color: #94a3b8;
          font-family: 'Arial', sans-serif;
          letter-spacing: 0.02em;
        }

        /* Images */
        .imageCol {
          position: relative;
          height: 420px;
        }

        .imgWrapMain {
          position: absolute;
          top: 0;
          right: 0;
          width: 78%;
          z-index: 3;
        }

        .imgMain {
          width: 100%;
          height: 260px;
          object-fit: cover;
          border-radius: 6px;
          display: block;
          box-shadow: 0 16px 40px rgba(15,23,42,0.14);
        }

        .imgMainAccent {
          position: absolute;
          bottom: -6px;
          right: -6px;
          width: 100%;
          height: 100%;
          border: 3px solid #f97316;
          border-radius: 6px;
          z-index: -1;
          opacity: 0.5;
        }

        .imgWrapSecondary {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 62%;
          z-index: 4;
        }

        .imgSecondary {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 6px;
          display: block;
          box-shadow: 0 12px 32px rgba(15,23,42,0.16);
          border: 4px solid #fff;
        }

        .imgTag {
          position: absolute;
          bottom: 10px;
          left: 10px;
          background-color: #1e3a8a;
          color: #fff;
          font-size: 0.7rem;
          font-family: 'Arial', sans-serif;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 2px;
        }

        /* Decorative elements */
        .deco-dotgrid-1 {
          position: absolute;
          top: -20px;
          right: -10px;
          z-index: 1;
        }

        .deco-circle-1 {
          position: absolute;
          bottom: 10px;
          left: -30px;
          z-index: 1;
        }

        .deco-dotgrid-2 {
          position: absolute;
          bottom: 30px;
          right: 20px;
          z-index: 1;
        }

        /* ===== RESPONSIVE MOBILE (< 768px) ===== */
        @media (max-width: 768px) {
          .homeinfo-section {
            padding: 50px 16px 60px;
          }

          .container {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .textCol {
            align-items: center;
          }

          .eyebrow {
            font-size: 0.7rem;
            margin-bottom: 12px;
          }

          .heading {
            font-size: 1.8rem;
            margin-bottom: 16px;
          }

          .body {
            font-size: 1rem;
            margin-bottom: 24px;
          }

          .btnRow {
            flex-direction: column;
            width: 100%;
            gap: 12px;
          }

          .btnPrimary,
          .btnSecondary {
            width: 100%;
            padding: 14px 24px;
            font-size: 1rem;
            justify-content: center;
          }

          .trust {
            margin-top: 12px;
            font-size: 0.75rem;
            text-align: center;
          }

          /* Image collage mobile */
          .imageCol {
            height: auto;
            min-height: 380px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .imgWrapMain {
            position: relative;
            top: auto;
            right: auto;
            width: 90%;
            max-width: 340px;
            margin: 0 auto;
          }

          .imgMain {
            height: 220px;
          }

          .imgWrapSecondary {
            position: relative;
            bottom: auto;
            left: auto;
            width: 75%;
            max-width: 280px;
            margin: -40px auto 0;
            z-index: 5;
          }

          .imgSecondary {
            height: 180px;
          }

          /* Decorative elements mobile - repositioned & scaled */
          .deco-dotgrid-1 {
            top: 10px;
            right: 5%;
            transform: scale(0.7);
          }

          .deco-circle-1 {
            bottom: auto;
            top: 40%;
            left: 5%;
            transform: scale(0.6);
          }

          .deco-dotgrid-2 {
            bottom: 10px;
            right: 5%;
            transform: scale(0.7);
          }
        }

        /* ===== EXTRA SMALL MOBILE (< 480px) ===== */
        @media (max-width: 480px) {
          .heading {
            font-size: 1.6rem;
          }

          .body {
            font-size: 0.95rem;
          }

          .imgMain {
            height: 190px;
          }

          .imgSecondary {
            height: 160px;
          }

          .imgWrapSecondary {
            margin-top: -30px;
          }
        }
      `}</style>
    </div>
  );
}

/* ===== Decorative Sub-Components ===== */

function DotGrid({ className, style, color = "#f97316", opacity = 0.4, size = 3, gap = 12, cols = 7, rows = 6 }) {
  const width = cols * gap;
  const height = rows * gap;
  return (
    <svg 
      width={width} 
      height={height} 
      className={className}
      style={{ ...style, opacity }}
    >
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => (
          <circle 
            key={`${r}-${c}`} 
            cx={c * gap + gap / 2} 
            cy={r * gap + gap / 2} 
            r={size / 2} 
            fill={color} 
          />
        ))
      )}
    </svg>
  );
}

function CircleOutline({ className, style, color = "#1e3a8a" }) {
  return (
    <svg 
      width="90" 
      height="90" 
      viewBox="0 0 90 90" 
      className={className}
      style={style}
    >
      <circle cx="45" cy="45" r="40" stroke={color} strokeWidth="2.5" fill="none" opacity="0.25" />
      <circle cx="45" cy="45" r="28" stroke={color} strokeWidth="1.2" fill="none" opacity="0.15" strokeDasharray="5 4" />
    </svg>
  );
}

export default HomeInfo;