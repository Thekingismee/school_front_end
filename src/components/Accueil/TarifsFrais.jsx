import React, { useState } from "react";
import ContactPopup from "../components/Accueil/ContactPopup";
import { FileText, ChevronDown, ChevronUp, Shield } from "lucide-react";

function Tarifs() {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [activeFaq, setActiveFaq] = useState(null);

    const toggleFaq = index => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const faqItems = [
        {
            question: "Les frais de scolarité sont-ils déductibles des impôts ?",
            reponse:
                "Oui, sous certaines conditions. Notre équipe vous fournit les attestations nécessaires pour votre déclaration fiscale. Nous vous conseillons de consulter votre expert-comptable pour plus de détails."
        },
        {
            question: "Existe-t-il des aides financières ?",
            reponse:
                "Absolument. Nous avons mis en place un fonds de solidarité interne qui étudie chaque situation avec bienveillance et confidentialité. N'hésitez pas à nous contacter pour en discuter librement."
        },
        {
            question: "Peut-on modifier la formule en cours d'année ?",
            reponse:
                "Oui, un passage d'une formule à l'autre est possible en cours d'année, sans frais supplémentaires. Il suffit d'en faire la demande auprès de notre service financier."
        },
        {
            question: "Les fournitures sont-elles incluses ?",
            reponse:
                "Les manuels scolaires et fournitures de base sont inclus pour tous les niveaux. Seuls quelques équipements spécifiques (calculatrice scientifique, matériel de sport…) restent à la charge des familles."
        }
    ];

    return (
        <div className="tarifs-page">
            {/* Hero sobre */}
            <header className="hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="hero-title-accent">Tarifs</span>
                    </h1>
                </div>
            </header>


            {/* Valeurs courtes */}
            <section className="valeurs">
                <div className="wrap">
                    <div className="valeurs-liste">
                        <div className="valeur-item">
                            <span className="valeur-puce">—</span>
                            <div>
                                <strong>Transparence totale</strong>
                                <p>Chaque poste est expliqué, rien n'est caché.</p>
                            </div>
                        </div>
                        <div className="valeur-item">
                            <span className="valeur-puce">—</span>
                            <div>
                                <strong>Écoute et souplesse</strong>
                                <p>Nous adaptons la formule à votre situation.</p>
                            </div>
                        </div>
                        <div className="valeur-item">
                            <span className="valeur-puce">—</span>
                            <div>
                                <strong>Solidarité réelle</strong>
                                <p>Un fonds d'entraide pour les moments difficiles.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modalités de paiement */}
            <section className="modalites">
                <div className="wrap">
                    <div className="section-intro">
                        <h2>Comment régler les frais de scolarité ?</h2>
                        <p>Trois formules, pensées pour s'adapter à votre budget.</p>
                    </div>

                    <div className="modalites-grille">
                        <div className="modalite">
                            <div className="modalite-top">
                                <h3>Annuel</h3>
                                <span className="badge-economie">−3%</span>
                            </div>
                            <p className="modalite-desc">
                                Un seul paiement à la rentrée. Simple et avantageux.
                            </p>
                            <ul className="modalite-details">
                                <li>Règlement unique en septembre</li>
                                <li>Remise de 3 % sur le total annuel</li>
                            </ul>
                            <button className="btn-choisir" onClick={() => setIsContactOpen(true)}>
                                Choisir cette formule
                            </button>
                        </div>

                        <div className="modalite modalite-phare">
                            <div className="phare-label">La plus choisie</div>
                            <div className="modalite-top">
                                <h3>Trimestriel</h3>
                            </div>
                            <p className="modalite-desc">
                                Trois versements répartis sur l'année. L'équilibre parfait.
                            </p>
                            <ul className="modalite-details">
                                <li>40 % en septembre</li>
                                <li>30 % en janvier</li>
                                <li>30 % en avril</li>
                            </ul>
                            <button className="btn-choisir btn-phare" onClick={() => setIsContactOpen(true)}>
                                Choisir cette formule
                            </button>
                        </div>

                        <div className="modalite">
                            <div className="modalite-top">
                                <h3>Mensuel</h3>
                            </div>
                            <p className="modalite-desc">
                                Dix mensualités de septembre à juin. Le maximum de flexibilité.
                            </p>
                            <ul className="modalite-details">
                                <li>10 prélèvements réguliers</li>
                                <li>Sans frais supplémentaires</li>
                            </ul>
                            <button className="btn-choisir" onClick={() => setIsContactOpen(true)}>
                                Choisir cette formule
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Réductions */}
            <section className="reductions">
                <div className="wrap">
                    <div className="section-intro">
                        <h2>Réductions pour les familles</h2>
                        <p>Plus vos enfants sont inscrits chez nous, plus vous bénéficiez d'avantages.</p>
                    </div>

                    <div className="reductions-grille">
                        <div className="reduction-ligne">
                            <span className="reduction-label">2ème enfant inscrit</span>
                            <span className="reduction-taux">5 %</span>
                            <span className="reduction-detail">sur les frais de scolarité</span>
                        </div>
                        <div className="reduction-ligne">
                            <span className="reduction-label">3ème enfant inscrit</span>
                            <span className="reduction-taux">8 %</span>
                            <span className="reduction-detail">sur les frais de scolarité</span>
                        </div>
                        <div className="reduction-ligne">
                            <span className="reduction-label">4ème enfant et plus</span>
                            <span className="reduction-taux">12 %</span>
                            <span className="reduction-detail">sur les frais de scolarité</span>
                        </div>
                        <div className="reduction-ligne reduction-separateur">
                            <span className="reduction-label">Inscription avant le 31 mars</span>
                            <span className="reduction-taux">5 %</span>
                            <span className="reduction-detail">inscription anticipée</span>
                        </div>
                        <div className="reduction-ligne">
                            <span className="reduction-label">Paiement comptant</span>
                            <span className="reduction-taux">3 %</span>
                            <span className="reduction-detail">remise supplémentaire</span>
                        </div>
                    </div>

                    <p className="reductions-note">
                        <Shield size={15} />
                        Les réductions sont cumulables dans la limite de 15 % du total annuel.
                    </p>
                </div>
            </section>

            {/* Règlement financier */}
            <section className="reglement">
                <div className="wrap">
                    <div className="reglement-bloc">
                        <div className="reglement-texte">
                            <FileText size={20} className="reglement-icone" />
                            <div>
                                <h3>Règlement financier complet</h3>
                                <p>
                                    Conditions générales, garanties, procédures en cas de difficultés —
                                    tout est consigné dans notre document officiel.
                                </p>
                            </div>
                        </div>
                        <button className="btn-telechargement" onClick={() => setIsContactOpen(true)}>
                            Télécharger le document
                        </button>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="faq">
                <div className="wrap wrap-etroit">
                    <div className="section-intro">
                        <h2>Questions fréquentes</h2>
                    </div>

                    <div className="faq-liste">
                        {faqItems.map((item, index) => (
                            <div
                                key={index}
                                className={`faq-item ${activeFaq === index ? "ouvert" : ""}`}
                            >
                                <button
                                    className="faq-question"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span>{item.question}</span>
                                    {activeFaq === index
                                        ? <ChevronUp size={18} />
                                        : <ChevronDown size={18} />
                                    }
                                </button>
                                {activeFaq === index && (
                                    <div className="faq-reponse">
                                        <p>{item.reponse}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="faq-bas">
                        <p>Une question sans réponse ici ?</p>
                        <button className="btn-contact" onClick={() => setIsContactOpen(true)}>
                            Écrire à notre équipe financière
                        </button>
                    </div>
                </div>
            </section>

            {/* CTA final sobre */}
            <section className="cta-final">
                <div className="wrap">
                    <div className="cta-contenu">
                        <h2>Prêt à inscrire votre enfant ?</h2>
                        <p>Notre équipe vous accompagne à chaque étape, administrativement et financièrement.</p>
                        <div className="cta-boutons">
                            <button className="btn-rdv" onClick={() => setIsContactOpen(true)}>
                                Demander un rendez-vous
                            </button>
                            <button className="btn-brochure" onClick={() => setIsContactOpen(true)}>
                                Télécharger la brochure
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <ContactPopup
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
            />

            <style jsx>{`
                /* ─── BASE ─── */



                  .hero-section {
                    position: relative;
                    min-height: 85vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    background-image: url("/tarr.jpg");
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    overflow: hidden;
                }

                .hero-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(255, 255, 255, 0.85);
                    z-index: 1;
                }

                .hero-content {
                    position: relative;
                    z-index: 2;
                    max-width: 900px;
                    padding: 20px;
                    animation: fadeInUp 0.9s ease-out;
                }

                .hero-title {
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                .hero-title-accent {
                    font-size: 5rem;
                    font-weight: 800;
                    letter-spacing: 4px;
                    color: #ee721f;
                    font-family: "Playfair Display", "Times New Roman", serif;
                    text-transform: uppercase;
                    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
                    animation: slideInRight 0.8s ease-out;
                    position: relative;
                    display: inline-block;
                }

                .hero-title-accent::before {
                    content: "";
                    position: absolute;
                    bottom: -15px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 100px;
                    height: 3px;
                    background: linear-gradient(
                        90deg,
                        transparent,
                        #ee721f,
                        #ee721f,
                        transparent
                    );
                    border-radius: 3px;
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(60px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                
                .tarifs-page {
                    font-family: "Inter", "Helvetica Neue", sans-serif;
                    color: #1a1a1a;
                }

                .wrap {
                    max-width: 1100px;
                    margin: 0 auto;
                    padding: 0 24px;
                }

                .wrap-etroit {
                    max-width: 760px;
                    margin: 0 auto;
                    padding: 0 24px;
                }

                /* ─── HERO ─── */
                .hero {
                    background: #f9f6f1;
                    border-bottom: 1px solid #e8e2d9;
                    padding: 90px 24px 80px;
                    text-align: center;
                }

                .hero-eyebrow {
                    font-size: 0.78rem;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: #9e8b78;
                    margin: 0 0 18px;
                }

                .hero h1 {
                    font-size: 3.2rem;
                    font-weight: 700;
                    color: #1a1a1a;
                    margin: 0 0 20px;
                    letter-spacing: -0.02em;
                    line-height: 1.1;
                }

                .hero-sub {
                    font-size: 1.1rem;
                    color: #666;
                    max-width: 520px;
                    margin: 0 auto;
                    line-height: 1.65;
                }

                /* ─── VALEURS ─── */
                .valeurs {
                    padding: 60px 0;
                    background: #fff;
                    border-bottom: 1px solid #efefef;
                }

                .valeurs-liste {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 40px;
                }

                .valeur-item {
                    display: flex;
                    gap: 14px;
                    align-items: flex-start;
                }

                .valeur-puce {
                    color: #e07020;
                    font-size: 1.2rem;
                    font-weight: 300;
                    margin-top: 2px;
                    flex-shrink: 0;
                }

                .valeur-item strong {
                    display: block;
                    font-size: 0.95rem;
                    font-weight: 600;
                    color: #1a1a1a;
                    margin-bottom: 5px;
                }

                .valeur-item p {
                    font-size: 0.88rem;
                    color: #777;
                    line-height: 1.55;
                    margin: 0;
                }

                /* ─── SECTION INTRO ─── */
                .section-intro {
                    margin-bottom: 44px;
                }

                .section-intro h2 {
                    font-size: 1.75rem;
                    font-weight: 700;
                    color: #1a1a1a;
                    margin: 0 0 10px;
                    letter-spacing: -0.01em;
                }

                .section-intro p {
                    font-size: 0.95rem;
                    color: #777;
                    margin: 0;
                }

                /* ─── MODALITÉS ─── */
                .modalites {
                    padding: 72px 0;
                    background: #fff;
                }

                .modalites-grille {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                }

                .modalite {
                    border: 1.5px solid #e8e4df;
                    border-radius: 14px;
                    padding: 32px 28px;
                    position: relative;
                    background: #fdfcfb;
                    transition: border-color 0.2s;
                }

                .modalite:hover {
                    border-color: #c8c0b8;
                }

                .modalite-phare {
                    border-color: #e07020;
                    background: #fff;
                }

                .phare-label {
                    position: absolute;
                    top: -12px;
                    left: 24px;
                    background: #e07020;
                    color: #fff;
                    font-size: 0.72rem;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    padding: 4px 12px;
                    border-radius: 20px;
                }

                .modalite-top {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 10px;
                }

                .modalite-top h3 {
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: #1a1a1a;
                    margin: 0;
                }

                .badge-economie {
                    background: #fef3e8;
                    color: #c85c10;
                    font-size: 0.75rem;
                    font-weight: 600;
                    padding: 3px 8px;
                    border-radius: 6px;
                }

                .modalite-desc {
                    font-size: 0.88rem;
                    color: #888;
                    line-height: 1.55;
                    margin: 0 0 18px;
                }

                .modalite-details {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 28px;
                    border-top: 1px solid #eee;
                    padding-top: 16px;
                }

                .modalite-details li {
                    font-size: 0.85rem;
                    color: #555;
                    padding: 5px 0;
                    padding-left: 14px;
                    position: relative;
                }

                .modalite-details li::before {
                    content: "·";
                    position: absolute;
                    left: 0;
                    color: #e07020;
                    font-size: 1.2rem;
                    line-height: 1;
                    top: 3px;
                }

                .btn-choisir {
                    width: 100%;
                    padding: 11px 0;
                    border: 1.5px solid #1a1a1a;
                    background: transparent;
                    color: #1a1a1a;
                    font-size: 0.85rem;
                    font-weight: 600;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .btn-choisir:hover {
                    background: #1a1a1a;
                    color: #fff;
                }

                .btn-phare {
                    border-color: #e07020;
                    color: #e07020;
                }

                .btn-phare:hover {
                    background: #e07020;
                    color: #fff;
                }

                /* ─── RÉDUCTIONS ─── */
                .reductions {
                    padding: 72px 0;
                    background: #f9f6f1;
                    border-top: 1px solid #efefef;
                    border-bottom: 1px solid #efefef;
                }

                .reductions-grille {
                    border: 1.5px solid #e4ddd6;
                    border-radius: 12px;
                    overflow: hidden;
                    background: #fff;
                    margin-bottom: 18px;
                }

                .reduction-ligne {
                    display: grid;
                    grid-template-columns: 1fr auto auto;
                    align-items: center;
                    gap: 20px;
                    padding: 18px 28px;
                    border-bottom: 1px solid #f0ece7;
                }

                .reduction-ligne:last-child {
                    border-bottom: none;
                }

                .reduction-separateur {
                    border-top: 2px solid #f0ece7;
                }

                .reduction-label {
                    font-size: 0.92rem;
                    color: #333;
                    font-weight: 500;
                }

                .reduction-taux {
                    font-size: 1.4rem;
                    font-weight: 700;
                    color: #e07020;
                    min-width: 52px;
                    text-align: right;
                }

                .reduction-detail {
                    font-size: 0.78rem;
                    color: #aaa;
                    min-width: 160px;
                    text-align: right;
                }

                .reductions-note {
                    display: flex;
                    align-items: center;
                    gap: 7px;
                    font-size: 0.8rem;
                    color: #999;
                }

                .reductions-note svg {
                    flex-shrink: 0;
                    color: #bbb;
                }

                /* ─── RÈGLEMENT ─── */
                .reglement {
                    padding: 60px 0;
                    background: #fff;
                }

                .reglement-bloc {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 24px;
                    padding: 28px 32px;
                    border: 1.5px solid #e8e4df;
                    border-radius: 12px;
                    background: #fdfcfb;
                }

                .reglement-texte {
                    display: flex;
                    align-items: flex-start;
                    gap: 14px;
                }

                .reglement-icone {
                    color: #e07020;
                    margin-top: 2px;
                    flex-shrink: 0;
                }

                .reglement-texte h3 {
                    font-size: 1rem;
                    font-weight: 700;
                    color: #1a1a1a;
                    margin: 0 0 5px;
                }

                .reglement-texte p {
                    font-size: 0.85rem;
                    color: #888;
                    margin: 0;
                    line-height: 1.55;
                }

                .btn-telechargement {
                    flex-shrink: 0;
                    padding: 11px 24px;
                    border: 1.5px solid #e07020;
                    background: transparent;
                    color: #e07020;
                    font-size: 0.85rem;
                    font-weight: 600;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.2s;
                    white-space: nowrap;
                }

                .btn-telechargement:hover {
                    background: #e07020;
                    color: #fff;
                }

                /* ─── FAQ ─── */
                .faq {
                    padding: 72px 0;
                    background: #fff;
                    border-top: 1px solid #efefef;
                }

                .faq-liste {
                    margin-bottom: 40px;
                }

                .faq-item {
                    border-bottom: 1px solid #eee;
                }

                .faq-question {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 16px;
                    padding: 20px 0;
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    text-align: left;
                    font-size: 0.95rem;
                    font-weight: 600;
                    color: #1a1a1a;
                    transition: color 0.2s;
                }

                .faq-question:hover {
                    color: #e07020;
                }

                .faq-question svg {
                    flex-shrink: 0;
                    color: #bbb;
                }

                .faq-reponse {
                    padding-bottom: 20px;
                }

                .faq-reponse p {
                    font-size: 0.9rem;
                    color: #666;
                    line-height: 1.65;
                    margin: 0;
                }

                .faq-bas {
                    padding: 28px;
                    background: #f9f6f1;
                    border-radius: 10px;
                    text-align: center;
                }

                .faq-bas p {
                    font-size: 0.9rem;
                    color: #888;
                    margin: 0 0 12px;
                }

                .btn-contact {
                    background: transparent;
                    border: 1.5px solid #1a1a1a;
                    color: #1a1a1a;
                    padding: 10px 24px;
                    border-radius: 8px;
                    font-size: 0.85rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .btn-contact:hover {
                    background: #1a1a1a;
                    color: #fff;
                }

                /* ─── CTA FINAL ─── */
                .cta-final {
                    padding: 80px 0;
                    background: #1a1a1a;
                }

                .cta-contenu {
                    max-width: 600px;
                }

                .cta-contenu h2 {
                    font-size: 2rem;
                    font-weight: 700;
                    color: #fff;
                    margin: 0 0 12px;
                    letter-spacing: -0.01em;
                }

                .cta-contenu p {
                    font-size: 0.95rem;
                    color: #aaa;
                    margin: 0 0 32px;
                    line-height: 1.6;
                }

                .cta-boutons {
                    display: flex;
                    gap: 14px;
                    flex-wrap: wrap;
                }

                .btn-rdv {
                    padding: 13px 28px;
                    background: #e07020;
                    color: #fff;
                    border: none;
                    border-radius: 8px;
                    font-size: 0.9rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .btn-rdv:hover {
                    background: #c85c10;
                }

                .btn-brochure {
                    padding: 13px 28px;
                    background: transparent;
                    color: #fff;
                    border: 1.5px solid rgba(255, 255, 255, 0.3);
                    border-radius: 8px;
                    font-size: 0.9rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .btn-brochure:hover {
                    border-color: rgba(255, 255, 255, 0.7);
                }

                /* ─── RESPONSIVE ─── */
                @media (max-width: 768px) {
                    .hero h1 {
                        font-size: 2.2rem;
                    }

                    .valeurs-liste {
                        grid-template-columns: 1fr;
                        gap: 24px;
                    }

                    .modalites-grille {
                        grid-template-columns: 1fr;
                    }

                    .reduction-ligne {
                        grid-template-columns: 1fr auto;
                        grid-template-rows: auto auto;
                    }

                    .reduction-detail {
                        grid-column: 1;
                        text-align: left;
                        color: #bbb;
                    }

                    .reglement-bloc {
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    .cta-boutons {
                        flex-direction: column;
                    }

                    .btn-rdv,
                    .btn-brochure {
                        width: 100%;
                        text-align: center;
                    }
                }
            `}</style>
        </div>
    );
}

export default Tarifs;