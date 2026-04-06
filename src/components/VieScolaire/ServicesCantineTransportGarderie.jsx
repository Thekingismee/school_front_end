// import React from 'react';

// const ServicesCantineTransportGarderie = () => {
//   const services = [
//     {
//       id: 1,
//       titre: 'Cantine Scolaire',
//       image: '/images/services/cantine.jpg',
//       fallbackImage: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80',
//       description: 'Des repas équilibrés et savoureux préparés sur place avec des produits frais et locaux. Nos menus sont élaborés par une nutritionniste pour garantir la santé et le bien-être de vos enfants. Options végétariennes et menus adaptés aux allergies alimentaires disponibles.'
//     },
//     {
//       id: 2,
//       titre: 'Transport Scolaire',
//       image: '/images/services/transport.jpg',
//       fallbackImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
//       description: 'Un service de transport sécurisé avec des chauffeurs expérimentés et des véhicules récents équipés de ceintures de sécurité. Desserte de nombreux quartiers avec des horaires adaptés aux emplois du temps des familles. Suivi en temps réel des trajets.'
//     },
//     {
//       id: 3,
//       titre: 'Garderie',
//       image: '/images/services/garderie.jpg',
//       fallbackImage: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80',
//       description: 'Un accueil chaleureux avant et après les cours pour accompagner les emplois du temps des parents. Activités ludiques encadrées, aide aux devoirs et goûter inclus. Un espace sécurisé où vos enfants se sentent comme à la maison.'
//     }
//   ];

//   return (
//     <section className="ctg-section">
//       <div className="ctg-container">
//         {/* En-tête simple */}
//         <div className="ctg-header">
//           <span className="ctg-label">Nos Services</span>
//           <h2 className="ctg-title">Une École Qui Pense à Tout</h2>
//           <p className="ctg-intro">
//             Des solutions pratiques pour accompagner votre famille au quotidien
//           </p>
//         </div>

//         {/* Les trois cartes */}
//         <div className="ctg-grid">
//           {services.map((service) => (
//             <article key={service.id} className="ctg-card">
//               <div className="ctg-image-wrap">
//                 <img
//                   src={service.image}
//                   alt={service.titre}
//                   onError={(e) => {
//                     e.target.src = service.fallbackImage;
//                   }}
//                 />
//               </div>

//               <div className="ctg-content">
//                 <h3 className="ctg-card-title">{service.titre}</h3>
//                 <div className="ctg-line" />
//                 <p className="ctg-description">{service.description}</p>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         .ctg-section {
//           padding: 80px 24px;
//           font-family: 'Georgia', 'Times New Roman', serif;
//         }

//         .ctg-container {
//           max-width: 1100px;
//           margin: 0 auto;
//         }

//         /* En-tête */
//         .ctg-header {
//           text-align: center;
//           margin-bottom: 50px;
//         }

//         .ctg-label {
//           display: block;
//           font-family: 'Arial', sans-serif;
//           font-size: 0.875rem;
//           font-weight: 600;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//           color: #f97316;
//           margin-bottom: 16px;
//         }

//         .ctg-title {
//           font-size: clamp(1.5rem, 5vw, 2.5rem);
//           font-weight: 700;
//           color: #0f172a;
//           margin: 0;
//           letter-spacing: 0.05em;
//         }

//         .ctg-intro {
//           font-family: 'Arial', sans-serif;
//           font-size: 1.05rem;
//           color: #6b7280;
//           margin: 0;
//           max-width: 500px;
//           margin-left: auto;
//           margin-right: auto;
//         }

//         /* Grille */
//         .ctg-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 30px;
//         }

//         /* Carte */
//         .ctg-card {
//           overflow: hidden;
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//         }

//         .ctg-card:hover {
//           transform: translateY(-6px);
//         }

//         /* Image */
//         .ctg-image-wrap {
//           height: 220px;
//           overflow: hidden;
//         }

//         .ctg-image-wrap img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: transform 0.5s ease;
//         }

//         .ctg-card:hover .ctg-image-wrap img {
//           transform: scale(1.03);
//         }

//         /* Contenu */
//         .ctg-content {
//           padding: 28px;
//         }

//         .ctg-card-title {
//           font-size: 1.3rem;
//           color: #3d405b;
//           margin: 0 0 12px 0;
//           font-weight: 600;
//         }

//         .ctg-line {
//           width: 40px;
//           height: 3px;
//           background: #d4a373;
//           margin-bottom: 16px;
//           border-radius: 2px;
//           transition: width 0.3s ease;
//         }

//         .ctg-card:hover .ctg-line {
//           width: 60px;
//         }

//         .ctg-description {
//           font-family: 'Arial', sans-serif;
//           font-size: 0.95rem;
//           line-height: 1.7;
//           color: #6b7280;
//           margin: 0;
//         }

//         /* Responsive */
//         @media (max-width: 900px) {
//           .ctg-grid {
//             grid-template-columns: 1fr;
//             max-width: 500px;
//             margin-left: auto;
//             margin-right: auto;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ServicesCantineTransportGarderie;

import React from "react";

const ServicesCantineTransportGarderie = () => {
    const services = [
        {
            id: 1,
            titre: "Cantine Scolaire",
            src: "/lunchbox.jpg",
            description:
                "Nous accompagnons les parents dans l'organisation des lunchboxes pour le petit-déjeuner et le déjeuner de leurs enfants. Vous préparez vous-même la lunchbox à la maison, et nous nous chargeons du service de réchauffement sur place. Nous veillons également à proposer un petit-déjeuner équilibré et à sensibiliser les enfants à une alimentation saine et variée."
        },
        {
            id: 2,
            titre: "Transport Scolaire",
            src: "/trans.jpg",
            description:
                "Un service de transport scolaire sécurisé avec des chauffeurs expérimentés et des véhicules récents. Nous assurons la desserte de nombreux quartiers avec des horaires adaptés aux besoins des familles. Un suivi en temps réel permet aux parents de connaître la position du bus à tout moment."
        },
        {
            id: 3,
            titre: "Garderie",
            src: "/garderie.jpg",
            description:
                "Un accueil chaleureux avant et après les cours pour accompagner les emplois du temps des parents. Des activités ludiques encadrées, une aide aux devoirs et un goûter sont inclus. Un espace sécurisé où vos enfants se sentent comme à la maison."
        },
        {
            id: 4,
            titre: "Livraison & Commande",
            src: "/delivery.jpg",
            description:
                "Un service innovant de commande et livraison de repas frais directement à l'école. Chaque matin, commandez le repas de votre enfant parmi une sélection de menus équilibrés. La livraison est assurée avant l'heure du déjeuner, avec des options sans contact et un paiement sécurisé."
        }
    ];

    return (
        <section className="ctg-section">
            <div className="ctg-container">
                <div className="ctg-header">
                    <span className="ctg-label">Nos Services</span>
                    <h2 className="ctg-title">Une École Qui Pense à Tout</h2>
                    <p className="ctg-intro">
                        Des solutions pratiques pour accompagner votre famille
                        au quotidien
                    </p>
                </div>

                <div className="ctg-grid">
                    {services.map(service => (
                        <article key={service.id} className="ctg-card">
                            <div className="ctg-image-wrap">
                                <img
                                    src={service.src}
                                    alt={service.titre}
                                    onError={e => {
                                        e.target.src = "/fallback-image.jpg";
                                    }}
                                />
                            </div>
                            <div className="ctg-content">
                                <h3 className="ctg-card-title">
                                    {service.titre}
                                </h3>
                                <div className="ctg-line" />
                                <p className="ctg-description">
                                    {service.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .ctg-section {
                    padding: 80px 24px;
                    font-family: "Georgia", "Times New Roman", serif;
                }
                .ctg-container {
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .ctg-header {
                    text-align: center;
                    margin-bottom: 50px;
                }
                .ctg-label {
                    display: block;
                    font-family: "Arial", sans-serif;
                    font-size: 0.875rem;
                    font-weight: 600;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    color: #f97316;
                    margin-bottom: 16px;
                }
                .ctg-title {
                    font-size: clamp(1.5rem, 5vw, 2.5rem);
                    font-weight: 700;
                    color: #0f172a;
                    margin: 0 0 12px 0;
                    letter-spacing: 0.05em;
                }
                .ctg-intro {
                    font-family: "Arial", sans-serif;
                    font-size: 1.05rem;
                    color: #6b7280;
                    margin: 0 auto;
                    max-width: 500px;
                }
                .ctg-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 28px;
                }
                .ctg-card {
                    overflow: hidden;
                    border-radius: 8px;
                    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
                    transition: transform 0.3s ease;
                    background: #fff;
                }
                .ctg-card:hover {
                    transform: translateY(-6px);
                }
                .ctg-image-wrap {
                    height: 200px;
                    overflow: hidden;
                }
                .ctg-image-wrap img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }
                .ctg-card:hover .ctg-image-wrap img {
                    transform: scale(1.03);
                }
                .ctg-content {
                    padding: 22px;
                }
                .ctg-card-title {
                    font-size: 1.1rem;
                    color: #3d405b;
                    margin: 0 0 10px 0;
                    font-weight: 600;
                }
                .ctg-line {
                    width: 40px;
                    height: 3px;
                    background: #d4a373;
                    margin-bottom: 14px;
                    border-radius: 2px;
                    transition: width 0.3s ease;
                }
                .ctg-card:hover .ctg-line {
                    width: 60px;
                }
                .ctg-description {
                    font-family: "Arial", sans-serif;
                    font-size: 0.88rem;
                    line-height: 1.7;
                    color: #6b7280;
                    margin: 0;
                }
                @media (max-width: 1100px) {
                    .ctg-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                @media (max-width: 600px) {
                    .ctg-grid {
                        grid-template-columns: 1fr;
                        max-width: 480px;
                        margin: 0 auto;
                    }
                }
            `}</style>
        </section>
    );
};

export default ServicesCantineTransportGarderie;
