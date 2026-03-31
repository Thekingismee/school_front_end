import React, { useState } from "react";
import CyclesSection from "../components/Accueil/CyclesSection";
import HomeValeurs from "../components/Accueil/HomeValeurs";
import Cantine from "../components/Accueil/Cantine";
import Partenaires from "../components/Accueil/Partenaires";
import Temoignages from "../components/Accueil/Temoignages";
import HomeGallery from "../components/Accueil/HomeGallery";
import HomeActualites from "../components/Accueil/HomeActualites ";


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

function ParcoursScolaire() {

    const [timestamp] = useState(Date.now());
    const [hoveredBtn, setHoveredBtn] = useState(null);
  
  return (
    <div>
<header>
            <h1 className='inscription-titre'>Parcours scolaire</h1>
        </header>


           <div>
    
      <section style={styles.section}>
        {/* Background texture */}
        {/* <div style={styles.bgTexture} /> */}

        

        <div style={styles.container}>

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
            {/* <div style={styles.imgWrapSecondary}>
              <img
                src={`/AT2.jpg?t=${timestamp}`}
                alt="Salle de classe"
                style={styles.imgSecondary}
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80";
                }}
              />
              <div style={styles.imgTag}>Notre ecole</div>
            </div> */}
          </div>
        
          {/* Left: Text content */}
          <div style={styles.textCol}>
            <span style={styles.eyebrow}>On est là pour vous</span>
            <h2 style={styles.heading}>
              Un chemin
<br />
              <em style={styles.headingAccent}>éducatif cohérent, exigeant et épanouissant.</em>
            </h2>
            <p style={styles.body}>
              Dès la maternelle, chaque étape est pensée pour accompagner l’enfant dans son développement global. Nous offrons un cadre bienveillant et stimulant où l’apprentissage est synonyme de découverte, de curiosité et de plaisir. Nos programmes sont conçus pour développer l’autonomie, la créativité et l’esprit critique, tout en préparant solidement aux exigences du collège et du lycée.
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
              >
                À propos de nous
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft: 8 }}>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Small trust line */}
            <p style={styles.trust}>
              Réponse garantie sous 24h · Pas de démarchage commercial
            </p>
          </div>

         </div>
      </section>

    </div>

        <CyclesSection />
        <Temoignages />
        <HomeGallery />


<style jsx>{`

      header{
  text-align: center;
  padding: 130px  70px;
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
//   background: #780000;
  background-image: url("/serv.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  clip-path: shape(from 0 0,vline to 100%,curve to 4.17% calc(100% - 15.5px) with 2.78% calc(100% - 15px),curve to 6.94% calc(100% - 9px) with 5.56% calc(100% - 16px),curve to 9.72% calc(100% - 20px) with 8.33% calc(100% - 2px),curve to 12.5% calc(100% - 44px) with 11.11% calc(100% - 38px),curve to 15.28% calc(100% - 27.5px) with 13.89% calc(100% - 50px),curve to 18.06% calc(100% - 20.5px) with 16.67% calc(100% - 5px),curve to 20.83% calc(100% - 23.5px) with 19.44% calc(100% - 36px),curve to 23.61% calc(100% - 10.5px) with 22.22% calc(100% - 11px),curve to 26.39% calc(100% - 5.5px) with 25% calc(100% - 10px),curve to 29.17% calc(100% - 9.5px) with 27.78% calc(100% - 1px),curve to 31.94% calc(100% - 11.5px) with 30.56% calc(100% - 18px),curve to 34.72% calc(100% - 20px) with 33.33% calc(100% - 5px),curve to 37.5% calc(100% - 23px) with 36.11% calc(100% - 35px),curve to 40.28% calc(100% - 28px) with 38.89% calc(100% - 11px),curve to 43.06% calc(100% - 24.5px) with 41.67% calc(100% - 45px),curve to 45.83% calc(100% - 25.5px) with 44.44% calc(100% - 4px),curve to 48.61% calc(100% - 44.5px) with 47.22% calc(100% - 47px),curve to 51.39% calc(100% - 31px) with 50% calc(100% - 42px),curve to 54.17% calc(100% - 26.5px) with 52.78% calc(100% - 20px),curve to 56.94% calc(100% - 23.5px) with 55.56% calc(100% - 33px),curve to 59.72% calc(100% - 13.5px) with 58.33% calc(100% - 14px),curve to 62.5% calc(100% - 26.5px) with 61.11% calc(100% - 13px),curve to 65.28% calc(100% - 41px) with 63.89% calc(100% - 40px),curve to 68.06% calc(100% - 28.5px) with 66.67% calc(100% - 42px),curve to 70.83% calc(100% - 7.5px) with 69.44% calc(100% - 15px),curve to 73.61% calc(100% - 12.5px) with 72.22% calc(100% - 0px),curve to 76.39% calc(100% - 27.5px) with 75% calc(100% - 25px),curve to 79.17% calc(100% - 28px) with 77.78% calc(100% - 30px),curve to 81.94% calc(100% - 27px) with 80.56% calc(100% - 26px),curve to 84.72% calc(100% - 34px) with 83.33% calc(100% - 28px),curve to 87.5% calc(100% - 28px) with 86.11% calc(100% - 40px),curve to 90.28% calc(100% - 31px) with 88.89% calc(100% - 16px),curve to 93.06% calc(100% - 37px) with 91.67% calc(100% - 46px),curve to 95.83% calc(100% - 23.5px) with 94.44% calc(100% - 28px),curve to 100% 100% with 97.22% calc(100% - 19px),vline to 0, hline to 0);
}
  .inscription-titre{
    text-shadow: 2px 2px 30px #000;
    font-size: 4rem;
    font-weight: bold;
    font-family: "Courier New", Courier, monospace;
    color: #fff;
  }
    `}</style>
    </div>


  );
}


const styles = {
  section: {
    position: "relative",
    padding: "80px 24px 90px",
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
    width: "100%",
    height: "100%",
    zIndex: 3,
  },
  imgMain: {
    width: "100%",
    height: "100%",
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


export default ParcoursScolaire;

