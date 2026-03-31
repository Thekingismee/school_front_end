import React from 'react';
import { UtensilsCrossed, HeartPulse, Baby, BusFront, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: UtensilsCrossed,
      title: "Cantine",
      description: "Repas équilibrés préparés sur place avec des produits frais et locaux, dans le respect des régimes alimentaires de chaque enfant.",
      link: "/services/cantine"
    },
    {
      id: 2,
      icon: HeartPulse,
      title: "Santé",
      description: "Suivi médical régulier et accompagnement personnalisé pour garantir le bien-être et la sécurité de vos enfants.",
      link: "/services/sante"
    },
    {
      id: 3,
      icon: Baby,
      title: "Garde",
      description: "Accueil personnalisé avant et après les cours avec une équipe éducative attentive et bienveillante.",
      link: "/services/garde"
    },
    {
      id: 4,
      icon: BusFront,
      title: "Transport",
      description: "Service de navettes sécurisées avec accompagnement pour assurer le confort et la sérénité des familles.",
      link: "/services/transport"
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">Nos Services</h2>
        <div className="services-grid">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="service-wrapper">
                <div className="service-card">
                  <div className="service-icon-wrapper">
                    <IconComponent size={42} strokeWidth={1.5} className="service-icon" />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                </div>
                <div className="service-description-wrapper">
                  <p className="service-description">{service.description}</p>
                  <a href={service.link} className="service-link">
                    En savoir plus
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .services-section {
          padding: 100px 24px;
          background: linear-gradient(135deg, #ffffff 0%, #fef9f5 100%);
          position: relative;
          overflow: hidden;
        }

        /* Décoration de fond subtile */
        .services-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(circle at 10% 20%, rgba(249, 115, 22, 0.02) 0%, transparent 50%);
          pointer-events: none;
        }

        .services-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .services-title {
          font-family: 'Georgia', 'Times New Roman', serif;
          font-size: clamp(2.5rem, 5vw, 2.5rem);
          color: #0f172a;
          text-align: center;
          margin: 0 0 60px 0;
          position: relative;
          display: inline-block;
          width: 100%;
        }

        .services-title::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, #f97316, #1e3a8a);
          border-radius: 2px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 50px 30px;
        }

        .service-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Card en forme de losange */
        .service-card {
          width: 180px;
          height: 180px;
          background: linear-gradient(135deg, #ffffff 0%, #fef5e8 100%);
          border-radius: 20px;
          transform: rotate(45deg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          box-shadow: 0 10px 25px -8px rgba(0, 0, 0, 0.08);
          cursor: pointer;
          position: relative;
          margin-bottom: 35px;
          border: 1px solid rgba(249, 115, 22, 0.12);
        }

        .service-card:hover {
          transform: rotate(45deg) translateY(-12px);
          box-shadow: 0 25px 45px -12px rgba(249, 115, 22, 0.25);
          background: linear-gradient(135deg, #fff8f0 0%, #fff0e2 100%);
          border-color: rgba(249, 115, 22, 0.3);
        }

        /* Contenu à l'intérieur du losange (dérotation) */
        .service-icon-wrapper {
          transform: rotate(-45deg);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          transition: transform 0.3s ease;
        }

        .service-card:hover .service-icon-wrapper {
          transform: rotate(-45deg) scale(1.08);
        }

        .service-icon {
          color: #f97316;
          stroke: #f97316;
        }

        .service-title {
          transform: rotate(-45deg);
          font-family: 'Inter', -apple-system, sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: #0f172a;
          margin: 0;
          text-align: center;
          letter-spacing: 0.5px;
        }

        /* Description en bas à l'extérieur */
        .service-description-wrapper {
          text-align: center;
          margin-top: 20px;
          width: 100%;
        }

        .service-description {
          font-family: 'Inter', -apple-system, sans-serif;
          font-size: 0.85rem;
          line-height: 1.65;
          color: #5a6e8a;
          margin: 0 0 14px 0;
          text-align: center;
        }

        .service-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          font-weight: 500;
          color: #f97316;
          text-decoration: none;
          transition: all 0.3s ease;
          padding: 6px 0;
          border-bottom: 1px solid rgba(249, 115, 22, 0.25);
        }

        .service-link svg {
          transition: transform 0.3s ease;
          stroke: #f97316;
        }

        .service-link:hover {
          color: #1e3a8a;
          gap: 12px;
          border-bottom-color: #1e3a8a;
        }

        .service-link:hover svg {
          transform: translateX(5px);
          stroke: #1e3a8a;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 50px 40px;
          }

          .service-card {
            width: 160px;
            height: 160px;
          }

          .service-icon-wrapper svg {
            width: 38px;
            height: 38px;
          }

          .service-title {
            font-size: 1rem;
          }
        }

        @media (max-width: 768px) {
          .services-section {
            padding: 70px 20px;
          }

          .services-title {
            margin-bottom: 50px;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 55px;
          }

          .service-card {
            width: 170px;
            height: 170px;
          }

          .service-icon-wrapper svg {
            width: 40px;
            height: 40px;
          }

          .service-description {
            font-size: 0.9rem;
            max-width: 300px;
            margin-left: auto;
            margin-right: auto;
          }
        }

        @media (max-width: 480px) {
          .services-section {
            padding: 60px 16px;
          }

          .service-card {
            width: 150px;
            height: 150px;
          }

          .service-icon-wrapper svg {
            width: 35px;
            height: 35px;
          }

          .service-title {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;