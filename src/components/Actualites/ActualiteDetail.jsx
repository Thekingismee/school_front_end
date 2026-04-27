import React, { useEffect, useState } from "react";
import { ArrowLeft, Calendar, Tag, Share2 } from "lucide-react";
import { useHistory, useParams } from "react-router-dom"; // utilise useParams pour lire le paramètre de route

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

// Données mockées (à remplacer par un fetch API ou un contexte global)
const actualitesData = [
    {
        id: 1,
        image: "/actu1.jpg",
        fallbackImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80",
        date: "15 Mars 2024",
        categorie: "Sport",
        titre: "Concours Sportifs Interclasses 2026",
        description: "Participez aux grands concours sportifs organisés par notre école. Venez encourager nos équipes, partager des moments de dépassement de soi et célébrer l'esprit d'équipe. Au programme : épreuves athlétiques, jeux collectifs et remise des prix en présence de tous les participants.",
        contenu: `
            <p>Le <strong>Groupe Scolaire L'Atome</strong> a le plaisir d'annoncer la tenue de ses grands concours sportifs interclasses pour l'année 2026. Cet événement phare rassemble tous les niveaux dans une ambiance festive et compétitive.</p>
            
            <h3>🏆 Au programme :</h3>
            <ul>
                <li><strong>Épreuves individuelles :</strong> course de vitesse, saut en longueur, lancer de poids</li>
                <li><strong>Sports collectifs :</strong> football, basketball, volleyball, handball</li>
                <li><strong>Activités ludiques :</strong> parcours d'obstacles, jeux de coopération, défis en équipe</li>
                <li><strong>Cérémonie de clôture :</strong> remise des médailles et diplômes en présence des parents</li>
            </ul>
            
            <h3>📅 Informations pratiques :</h3>
            <ul>
                <li><strong>Date :</strong> Du 20 au 24 Mai 2026</li>
                <li><strong>Lieu :</strong> Complexe sportif du Groupe Scolaire L'Atome, Lissasfa</li>
                <li><strong>Horaires :</strong> 8h30 - 17h00 (tous les jours)</li>
                <li><strong>Public :</strong> Ouvert aux élèves, parents et invités</li>
            </ul>
            
            <blockquote>
                "Le sport est un formidable vecteur de valeurs : dépassement de soi, respect, esprit d'équipe et persévérance. Ces concours sont l'occasion pour nos élèves de mettre en pratique ces principes dans la joie et la bonne humeur."
                <footer>— Direction Pédagogique</footer>
            </blockquote>
            
            <p>Nous invitons chaleureusement les familles à venir encourager les participants et partager ces moments de convivialité. Des stands de restauration et d'animation seront disponibles tout au long de l'événement.</p>
            
            <p><em>Pour plus d'informations ou pour s'inscrire en tant que bénévole, contactez le bureau de la vie scolaire.</em></p>
        `,
        auteur: "Équipe Sportive",
        lecture: "3 min de lecture"
    },
    {
        id: 2,
        image: "/marchv.jpg",
        fallbackImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80",
        date: "10 Mars 2024",
        categorie: "Commémoration",
        titre: "Célébration de la Marche Verte : l'engagement de nos élèves",
        description: "À l'occasion de l'anniversaire de la Marche Verte, nos élèves ont organisé une journée de commémoration mêlant activités citoyennes et expressions artistiques. Au programme : expositions sur l'histoire nationale, chants patriotiques et témoignages autour des valeurs d'unité et de fidélité. Une belle occasion de transmettre la mémoire collective aux jeunes générations.",
        contenu: `
            <p>Le <strong>6 Novembre</strong> marque un moment fort de notre histoire nationale. Cette année encore, le Groupe Scolaire L'Atome a célébré la Marche Verte avec ferveur et pédagogie.</p>
            
            <h3>🎨 Une journée riche en émotions :</h3>
            <ul>
                <li><strong>Exposition historique :</strong> Les élèves de cycle secondaire ont préparé des panneaux illustrant les étapes clés de la Marche Verte, accompagnés de témoignages et d'archives.</li>
                <li><strong>Spectacle artistique :</strong> Chants patriotiques, poésies et saynètes théâtrales ont été présentés par les différentes classes.</li>
                <li><strong>Table ronde :</strong> Des intervenants ont partagé des récits personnels sur l'importance de l'unité nationale et de la préservation du patrimoine.</li>
                <li><strong>Ateliers citoyens :</strong> Réalisation de drapeaux, création de fresques murales et rédaction de lettres symboliques.</li>
            </ul>
            
            <h3>🌟 Les mots des élèves :</h3>
            <blockquote>
                "Comprendre notre histoire, c'est mieux construire notre avenir. Cette journée nous a appris l'importance de rester unis pour protéger notre pays."
                <footer>— Yasmine, 3ème année collège</footer>
            </blockquote>
            
            <blockquote>
                "J'ai été touché par les témoignages des anciens. Cela donne du sens à nos efforts quotidiens à l'école."
                <footer>— Mehdi, 1ère année lycée</footer>
            </blockquote>
            
            <p>Cette célébration s'inscrit dans notre projet éducatif visant à former des citoyens éclairés, fiers de leur identité et engagés pour leur communauté.</p>
            
            <p><em>Un grand merci à tous les enseignants, élèves et parents qui ont contribué au succès de cet événement.</em></p>
        `,
        auteur: "Équipe Pédagogique",
        lecture: "4 min de lecture"
    },
    {
        id: 3,
        image: "/actu3.jpg",
        fallbackImage: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&q=80",
        date: "05 Septembre 2026",
        categorie: "Vie Scolaire",
        titre: "Rentrée 2026 : une nouvelle année commence !",
        description: "Sourires, cartables neufs et retrouvailles chaleureuses ont marqué le coup d'envoi de cette rentrée 2026 au Groupe Scolaire L'Atome. Élèves, familles et équipe éducative se sont retrouvés dans une ambiance festive et bienveillante pour accueillir cette nouvelle année scolaire. Un moment de joie et d'enthousiasme qui donne le ton d'une année placée sous le signe de la réussite et du partage.",
        contenu: `
            <p>C'est avec enthousiasme que le <strong>Groupe Scolaire L'Atome</strong> a accueilli ses élèves pour cette rentrée 2026. Une cérémonie d'accueil chaleureuse a marqué le début de cette nouvelle année scolaire.</p>
            
            <h3>🎒 Au programme de la journée :</h3>
            <ul>
                <li><strong>Cérémonie d'accueil :</strong> Discours de la direction, présentation des nouveaux enseignants et des projets de l'année.</li>
                <li><strong>Découverte des espaces :</strong> Visite guidée des nouvelles salles, du CDI rénové et des espaces de détente.</li>
                <li><strong>Activités de cohésion :</strong> Jeux de présentation, chasse au trésor pédagogique et atelier "projet de classe".</li>
                <li><strong>Rencontres parents-enseignants :</strong> Échanges individuels pour définir les objectifs de l'année.</li>
            </ul>
            
            <h3>✨ Les nouveautés 2026 :</h3>
            <ul>
                <li>📚 <strong>Plateforme numérique :</strong> Accès simplifié aux ressources pédagogiques et suivi des progrès en temps réel.</li>
                <li>🌱 <strong>Jardin pédagogique :</strong> Un espace vert dédié aux projets scientifiques et au développement durable.</li>
                <li>🎭 <strong>Ateliers artistiques élargis :</strong> Théâtre, musique, arts plastiques et danse ouverts à tous les niveaux.</li>
                <li>🤝 <strong>Programme de mentorat :</strong> Accompagnement personnalisé des élèves par des anciens et des professionnels.</li>
            </ul>
            
            <blockquote>
                "Cette rentrée incarne notre engagement : offrir à chaque enfant un environnement stimulant, bienveillant et tourné vers l'avenir. Ensemble, faisons de cette année un succès collectif."
                <footer>— M. El Amrani, Directeur</footer>
            </blockquote>
            
            <p>Nous remercions les familles pour leur confiance et leur implication. Une belle année d'apprentissages, de découvertes et de réussites commence !</p>
            
            <p><em>Restez connectés : de nombreuses annonces et événements seront partagés tout au long de l'année sur notre espace familles.</em></p>
        `,
        auteur: "Direction Générale",
        lecture: "3 min de lecture"
    }
];

const ActualiteDetail = () => {
    const history = useHistory();
    const { slug } = useParams();
    const [actualite, setActualite] = useState(null);
    const [loading, setLoading] = useState(true);
    const [imageError, setImageError] = useState(false);
    const [error, setError] = useState(null);

    const imageUrl = actualite?.image?.url || actualite?.image?.path || '/default-article.jpg';
    const displayDate = actualite?.date_publication_fr || actualite?.date_publication || actualite?.created_at || '';
    const articleStatus = actualite?.statut === 'publie' ? 'Publié' : actualite?.statut === 'brouillon' ? 'Brouillon' : null;

    // Chargement de l'article depuis l'API backend
    useEffect(() => {
        if (!slug) return;

        const fetchActualite = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`${API_URL}/admin/actualites/${slug}`, {
                    headers: {
                        Accept: 'application/json',
                    },
                    credentials: 'include',
                });

                if (response.status === 404) {
                    setActualite(null);
                    setError('Actualité non trouvée');
                    return;
                }

                if (!response.ok) {
                    throw new Error(`Erreur de chargement (${response.status})`);
                }

                const json = await response.json();
                setActualite(json.data || null);
            } catch (fetchError) {
                setError(fetchError.message || 'Erreur lors du chargement de l’actualité');
                setActualite(null);
            } finally {
                setLoading(false);
            }
        };

        fetchActualite();
    }, [slug]);

    // Gestion du retour
    const handleBack = () => {
        if (history.length > 1) {
            history.goBack();
        } else {
            history.push('/#actualites'); // Retour à la section actualités de la page d'accueil
        }
    };

    // Partage sur les réseaux
    const handleShare = async () => {
        if (navigator.share && actualite) {
            try {
                await navigator.share({
                    title: actualite.titre,
                    text: actualite.description,
                    url: window.location.href
                });
            } catch (err) {
                console.log('Partage annulé', err);
            }
        } else {
            // Fallback : copie du lien
            navigator.clipboard.writeText(window.location.href);
            alert('Lien copié dans le presse-papiers !');
        }
    };

    // État de chargement
    if (loading) {
        return (
            <div className="detail-loading">
                <div className="detail-loading-spinner" />
                <p>Chargement de l'actualité...</p>
            </div>
        );
    }

    // Article non trouvé ou erreur de chargement
    if (!actualite) {
        return (
            <div className="detail-not-found">
                <div className="detail-not-found-icon">❌</div>
                <h2>{error ? 'Erreur de chargement' : 'Actualité non trouvée'}</h2>
                <p>{error || 'L\'article que vous recherchez n\'existe pas ou a été supprimé.'}</p>
                <button className="detail-back-btn" onClick={handleBack}>
                    <ArrowLeft size={18} />
                    Retour aux actualités
                </button>
            </div>
        );
    }

    return (
        <article className="actualite-detail">
            {/* Barre de navigation */}
            <div className="detail-header">
                <button className="detail-back-btn" onClick={handleBack}>
                    <ArrowLeft size={20} />
                    <span>Retour</span>
                </button>
                <button className="detail-share-btn" onClick={handleShare} title="Partager">
                    <Share2 size={20} />
                </button>
            </div>

            {/* Image principale */}
            <div className="detail-image-wrapper">
                <div className="detail-image-box">
                    <img
                        src={imageError ? '/default-article.jpg' : imageUrl}
                        alt={actualite.titre}
                        className="detail-img"
                        onError={() => setImageError(true)}
                    />
                    <div className="detail-image-overlay" />
                </div>
                {/* Badge catégorie */}
                <span className="detail-categorie-badge">
                    <Tag size={14} />
                    {actualite.categorie}
                </span>
            </div>

            {/* Contenu principal */}
            <div className="detail-content-wrapper">
                <div className="detail-content">
                    {/* Métadonnées */}
                    <div className="detail-meta">
                        <div className="detail-date">
                            <Calendar size={16} />
                            <time dateTime={actualite.date_publication || actualite.created_at || ''}>{displayDate}</time>
                        </div>
                        {articleStatus && (
                            <span className="detail-lecture">{articleStatus}</span>
                        )}
                    </div>

                    {/* Titre */}
                    <h1 className="detail-title">{actualite.titre}</h1>

                    {/* Description courte */}
                    <p className="detail-chapo">{actualite.description}</p>

                    {/* Contenu riche */}
                    {actualite.contenu ? (
                        <div 
                            className="detail-body"
                            dangerouslySetInnerHTML={{ __html: actualite.contenu }}
                        />
                    ) : (
                        <div className="detail-body">
                            <p>{actualite.description}</p>
                        </div>
                    )}

                    {/* Signature */}
                    {actualite.auteur && (
                        <div className="detail-signature">
                            <div className="detail-author">
                                <div className="detail-author-avatar">
                                    {actualite.auteur.charAt(0)}
                                </div>
                                <div>
                                    <strong>{actualite.auteur}</strong>
                                    <span>Groupe Scolaire L'Atome</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Actions */}
                    <div className="detail-actions">
                        <button className="detail-action-btn primary" onClick={handleShare}>
                            <Share2 size={18} />
                            Partager cet article
                        </button>
                        <button className="detail-action-btn secondary" onClick={handleBack}>
                            <ArrowLeft size={18} />
                            Voir les derniers actualités
                        </button>
                    </div>
                </div>

                {/* Sidebar (optionnelle) */}
                {/* <aside className="detail-sidebar">
                    <div className="detail-sidebar-card">
                        <h4>📰 Autres actualités</h4>
                        <ul className="detail-related-list">
                            {actualitesData
                                .filter(a => a.id !== actualite.id && a.categorie === actualite.categorie)
                                .slice(0, 3)
                                .map(related => (
                                    <li key={related.id}>
                                        <a href={`/actualites/${related.id}`}>
                                            <span className="detail-related-date">{related.date}</span>
                                            <span className="detail-related-title">{related.titre}</span>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </aside> */}
            </div>

            {/* Styles */}
            <style jsx>{`
                /* ===== CONTENEUR PRINCIPAL ===== */
                .actualite-detail {
                    min-height: 100vh;
                    background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
                    font-family: "Georgia", "Times New Roman", serif;
                    padding-bottom: 60px;
                }

                /* ===== BARRE DE NAVIGATION ===== */
                .detail-header {
                    position: sticky;
                    top: 0;
                    z-index: 100;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid rgba(226, 232, 240, 0.6);
                    padding: 12px 24px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    max-width: 1200px;
                    margin: 0 auto;
                    width: 100%;
                }

                .detail-back-btn {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    background: transparent;
                    border: none;
                    color: #1e3a8a;
                    font-family: "Arial", sans-serif;
                    font-size: 0.95rem;
                    font-weight: 500;
                    cursor: pointer;
                    padding: 8px 12px;
                    border-radius: 8px;
                    transition: all 0.2s ease;
                }

                .detail-back-btn:hover {
                    background: rgba(30, 58, 138, 0.08);
                    color: #f97316;
                }

                .detail-share-btn {
                    background: transparent;
                    border: none;
                    color: #64748b;
                    cursor: pointer;
                    padding: 8px;
                    border-radius: 50%;
                    transition: all 0.2s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .detail-share-btn:hover {
                    background: rgba(249, 115, 22, 0.1);
                    color: #f97316;
                    transform: scale(1.1);
                }

                /* ===== IMAGE PRINCIPALE ===== */
                .detail-image-wrapper {
                    position: relative;
                    height: clamp(300px, 50vh, 500px);
                    overflow: hidden;
                    margin-bottom: 40px;
                }

                .detail-image-box {
                    width: 100%;
                    height: 100%;
                }

                .detail-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.8s ease;
                }

                .detail-image-wrapper:hover .detail-img {
                    transform: scale(1.03);
                }

                .detail-image-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        to bottom,
                        transparent 0%,
                        transparent 40%,
                        rgba(15, 23, 42, 0.6) 100%
                    );
                }

                .detail-categorie-badge {
                    position: absolute;
                    top: 24px;
                    right: 24px;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    background: rgba(255, 255, 255, 0.95);
                    color: #f97316;
                    font-family: "Arial", sans-serif;
                    font-size: 0.8rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    padding: 8px 16px;
                    border-radius: 50px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                    z-index: 2;
                }

                /* ===== CONTENU PRINCIPAL ===== */
                .detail-content-wrapper {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 24px;
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 40px;
                }

                @media (min-width: 1024px) {
                    .detail-content-wrapper {
                        grid-template-columns: 2fr 1fr;
                        align-items: start;
                    }
                }

                .detail-content {
                    background: #ffffff;
                    border-radius: 16px;
                    padding: 40px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
                }

                /* Métadonnées */
                .detail-meta {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    margin-bottom: 24px;
                    padding-bottom: 24px;
                    border-bottom: 1px solid #e2e8f0;
                    font-family: "Arial", sans-serif;
                }

                .detail-date {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    color: #1e3a8a;
                    font-size: 0.95rem;
                    font-weight: 500;
                }

                .detail-date svg {
                    stroke: #1e3a8a;
                }

                .detail-lecture {
                    color: #64748b;
                    font-size: 0.9rem;
                }

                /* Titre */
                .detail-title {
                    font-size: clamp(1.8rem, 4vw, 2.5rem);
                    font-weight: 700;
                    color: #0f172a;
                    margin: 0 0 20px 0;
                    line-height: 1.3;
                }

                /* Chapô */
                .detail-chapo {
                    font-family: "Arial", sans-serif;
                    font-size: 1.15rem;
                    line-height: 1.7;
                    color: #475569;
                    margin: 0 0 32px 0;
                    padding-left: 16px;
                    border-left: 4px solid #f97316;
                }

                /* Corps de l'article */
                .detail-body {
                    font-family: "Arial", sans-serif;
                    font-size: 1.05rem;
                    line-height: 1.8;
                    color: #334155;
                }

                .detail-body p {
                    margin: 0 0 20px 0;
                }

                .detail-body h3 {
                    font-family: "Georgia", serif;
                    font-size: 1.4rem;
                    font-weight: 600;
                    color: #0f172a;
                    margin: 32px 0 16px 0;
                }

                .detail-body ul {
                    margin: 0 0 20px 24px;
                    padding: 0;
                    list-style: none;
                }

                .detail-body li {
                    margin: 8px 0;
                    padding-left: 24px;
                    position: relative;
                }

                .detail-body li::before {
                    content: "•";
                    position: absolute;
                    left: 0;
                    color: #f97316;
                    font-weight: bold;
                    font-size: 1.2rem;
                }

                .detail-body strong {
                    color: #0f172a;
                    font-weight: 600;
                }

                .detail-body blockquote {
                    margin: 32px 0;
                    padding: 24px 32px;
                    background: linear-gradient(135deg, #fff8f0 0%, #fef5e8 100%);
                    border-left: 4px solid #f97316;
                    border-radius: 0 12px 12px 0;
                    font-style: italic;
                    color: #475569;
                }

                .detail-body blockquote footer {
                    display: block;
                    margin-top: 12px;
                    font-family: "Arial", sans-serif;
                    font-size: 0.9rem;
                    font-weight: 500;
                    color: #1e3a8a;
                    font-style: normal;
                }

                .detail-body blockquote footer::before {
                    content: "— ";
                }

                .detail-body em {
                    color: #64748b;
                }

                /* Signature auteur */
                .detail-signature {
                    margin: 40px 0;
                    padding-top: 24px;
                    border-top: 1px solid #e2e8f0;
                }

                .detail-author {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .detail-author-avatar {
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #f97316, #1e3a8a);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-weight: 700;
                    font-size: 1.2rem;
                    font-family: "Arial", sans-serif;
                }

                .detail-author div span {
                    display: block;
                    font-family: "Arial", sans-serif;
                    font-size: 0.85rem;
                    color: #64748b;
                }

                /* Actions */
                .detail-actions {
                    display: flex;
                    gap: 12px;
                    margin-top: 40px;
                    padding-top: 24px;
                    border-top: 1px solid #e2e8f0;
                    flex-wrap: wrap;
                }

                .detail-action-btn {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 12px 24px;
                    border-radius: 50px;
                    font-family: "Arial", sans-serif;
                    font-size: 0.95rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    border: none;
                }

                .detail-action-btn.primary {
                    background: linear-gradient(135deg, #f97316, #ea580c);
                    color: white;
                    box-shadow: 0 4px 14px rgba(249, 115, 22, 0.3);
                }

                .detail-action-btn.primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(249, 115, 22, 0.45);
                }

                .detail-action-btn.secondary {
                    background: transparent;
                    color: #1e3a8a;
                    border: 2px solid #1e3a8a;
                }

                .detail-action-btn.secondary:hover {
                    background: rgba(30, 58, 138, 0.08);
                }

                /* ===== SIDEBAR ===== */
                .detail-sidebar {
                    position: sticky;
                    top: 100px;
                    align-self: start;
                }

                .detail-sidebar-card {
                    background: #ffffff;
                    border-radius: 16px;
                    padding: 24px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
                }

                .detail-sidebar-card h4 {
                    font-family: "Georgia", serif;
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: #0f172a;
                    margin: 0 0 16px 0;
                    padding-bottom: 12px;
                    border-bottom: 2px solid #f97316;
                }

                .detail-related-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .detail-related-list li {
                    margin: 0 0 16px 0;
                    padding: 0 0 16px 0;
                    border-bottom: 1px solid #f1f5f9;
                }

                .detail-related-list li:last-child {
                    margin: 0;
                    padding: 0;
                    border: none;
                }

                .detail-related-list a {
                    display: block;
                    text-decoration: none;
                    color: inherit;
                    transition: all 0.2s ease;
                }

                .detail-related-list a:hover {
                    color: #f97316;
                }

                .detail-related-list a:hover .detail-related-title {
                    text-decoration: underline;
                }

                .detail-related-date {
                    display: block;
                    font-family: "Arial", sans-serif;
                    font-size: 0.8rem;
                    color: #64748b;
                    margin-bottom: 4px;
                }

                .detail-related-title {
                    display: block;
                    font-family: "Georgia", serif;
                    font-size: 0.95rem;
                    font-weight: 500;
                    color: #0f172a;
                    line-height: 1.4;
                }

                /* ===== ÉTATS DE CHARGEMENT / ERREUR ===== */
                .detail-loading,
                .detail-not-found {
                    min-height: 60vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    padding: 40px 24px;
                    font-family: "Arial", sans-serif;
                }

                .detail-loading-spinner {
                    width: 48px;
                    height: 48px;
                    border: 4px solid #e2e8f0;
                    border-top-color: #f97316;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin-bottom: 20px;
                }

                @keyframes spin {
                    to { transform: rotate(360deg); }
                }

                .detail-not-found-icon {
                    font-size: 4rem;
                    margin-bottom: 20px;
                }

                .detail-not-found h2 {
                    font-size: 1.8rem;
                    color: #0f172a;
                    margin: 0 0 12px 0;
                }

                .detail-not-found p {
                    color: #64748b;
                    margin: 0 0 24px 0;
                    max-width: 400px;
                }

                /* ===== RESPONSIVE ===== */
                @media (max-width: 768px) {
                    .detail-content {
                        padding: 28px 24px;
                        border-radius: 12px;
                    }

                    .detail-title {
                        font-size: 1.6rem;
                    }

                    .detail-chapo {
                        font-size: 1.05rem;
                        padding-left: 12px;
                    }

                    .detail-body {
                        font-size: 1rem;
                    }

                    .detail-image-wrapper {
                        height: 280px;
                        margin-bottom: 28px;
                    }

                    .detail-categorie-badge {
                        top: 16px;
                        right: 16px;
                        font-size: 0.75rem;
                        padding: 6px 12px;
                    }

                    .detail-actions {
                        flex-direction: column;
                    }

                    .detail-action-btn {
                        width: 100%;
                        justify-content: center;
                    }

                    .detail-sidebar {
                        position: static;
                    }
                }

                @media (max-width: 480px) {
                    .detail-header {
                        padding: 10px 16px;
                    }

                    .detail-back-btn span {
                        display: none;
                    }

                    .detail-content-wrapper {
                        padding: 0 16px;
                    }

                    .detail-content {
                        padding: 24px 20px;
                    }

                    .detail-body blockquote {
                        padding: 20px 24px;
                    }
                }
            `}</style>
        </article>
    );
};

export default ActualiteDetail;