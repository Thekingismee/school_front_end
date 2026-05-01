import React, { useState, useEffect } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

const ActualitesList = () => {
  // États
  const [actualites, setActualites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [deletingId, setDeletingId] = useState(null); // 🔥 État pour le bouton de suppression

  // Formulaire
  const [formData, setFormData] = useState({
    image: null,
    date_publication: new Date().toISOString().split('T')[0],
    categorie: 'Vie Scolaire',
    titre: '',
    description: '',
    statut: 'brouillon',
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  // Catégories disponibles
  const categories = [
    'Sport',
    'Commémoration',
    'Vie Scolaire',
    'Culture',
    'Événements',
    'Résultats',
    'Partenariats',
    'Autre',
  ];

  // Charger les actualités
  useEffect(() => {
    fetchActualites();
  }, []);

  const fetchActualites = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/admin/actualites`, {
        headers: {
          'Accept': 'application/json',
        },
        credentials: 'include',
      });

      if (!response.ok) throw new Error('Erreur de chargement');

      const data = await response.json();
      setActualites(data.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 🔥 Gestion de la suppression
  const handleDelete = async (id, slug, titre) => {
    if (!window.confirm(`Êtes-vous sûr de vouloir supprimer "${titre}" ?`)) {
      return;
    }

    try {
      setDeletingId(id);
      
      const response = await fetch(`${API_URL}/admin/actualites/${slug}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
        },
        credentials: 'include',
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || 'Erreur lors de la suppression');
      }

      // Retirer l'actualité de la liste localement
      setActualites(prev => prev.filter(actu => actu.id !== id));
      
    } catch (err) {
      alert('Erreur : ' + err.message);
    } finally {
      setDeletingId(null);
    }
  };

  // Gestion des inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Gestion de l'image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));

      // Preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Soumission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.titre || !formData.description) {
      alert('Veuillez remplir au moins le titre et la description');
      return;
    }

    try {
      setSubmitting(true);

      const data = new FormData();
      if (formData.image) {
        data.append('image', formData.image);
      }
      data.append('date_publication', formData.date_publication);
      data.append('categorie', formData.categorie);
      data.append('titre', formData.titre);
      data.append('description', formData.description);
      data.append('statut', formData.statut);

      const response = await fetch(`${API_URL}/admin/actualites`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        credentials: 'include',
        body: data,
      });

      const responseData = await response.json();

      if (!response.ok) {
        if (response.status === 422 && responseData.errors) {
          console.error('Erreurs de validation:', responseData.errors);
          alert('Erreurs de validation:\n' + Object.entries(responseData.errors).map(([key, msgs]) => `${key}: ${msgs[0]}`).join('\n'));
          return;
        }
        throw new Error(responseData.message || 'Erreur lors de la création');
      }

      // Reset et fermeture
      setFormData({
        image: null,
        date_publication: new Date().toISOString().split('T')[0],
        categorie: 'Vie Scolaire',
        titre: '',
        description: '',
        statut: 'brouillon',
      });
      setPreviewImage(null);
      setShowModal(false);

      // Recharger la liste
      fetchActualites();

    } catch (err) {
      alert('Erreur : ' + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  // Fermer la modal
  const closeModal = () => {
    setShowModal(false);
    setFormData({
      image: null,
      date_publication: new Date().toISOString().split('T')[0],
      categorie: 'Vie Scolaire',
      titre: '',
      description: '',
      statut: 'brouillon',
    });
    setPreviewImage(null);
  };

  // Styles
  const styles = {
    container: {
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '30px',
      paddingBottom: '15px',
      borderBottom: '2px solid #eee',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      margin: 0,
    },
    btnAdd: {
      padding: '10px 20px',
      backgroundColor: '#f97316',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '20px',
    },
    card: {
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      overflow: 'hidden',
      backgroundColor: 'white',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      position: 'relative',
    },
    cardImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      backgroundColor: '#f3f4f6',
    },
    cardContent: {
      padding: '15px',
    },
    badge: {
      display: 'inline-block',
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '12px',
      fontWeight: '500',
      marginBottom: '8px',
    },
    badgePublie: {
      backgroundColor: '#dcfce7',
      color: '#166534',
    },
    badgeBrouillon: {
      backgroundColor: '#f3f4f6',
      color: '#374151',
    },
    cardTitle: {
      fontSize: '16px',
      fontWeight: '600',
      margin: '0 0 8px 0',
      color: '#111827',
      paddingRight: '24px', // Espace pour le bouton delete
    },
    cardDate: {
      fontSize: '13px',
      color: '#6b7280',
      marginBottom: '10px',
    },
    cardDesc: {
      fontSize: '14px',
      color: '#4b5563',
      lineHeight: '1.5',
      margin: 0,
    },
    // 🔥 Bouton de suppression dans la carte
    btnDelete: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      backgroundColor: 'rgba(239, 68, 68, 0.9)',
      color: 'white',
      border: 'none',
      borderRadius: '50%',
      width: '32px',
      height: '32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      fontSize: '18px',
      transition: 'background-color 0.2s',
      zIndex: 10,
    },
    btnDeleteHover: {
      backgroundColor: 'rgba(220, 38, 38, 1)',
    },
    btnDeleteDisabled: {
      backgroundColor: 'rgba(156, 163, 175, 0.8)',
      cursor: 'not-allowed',
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    },
    modalContent: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '30px',
      width: '90%',
      maxWidth: '600px',
      maxHeight: '90vh',
      overflow: 'auto',
    },
    modalHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
    },
    modalTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      margin: 0,
    },
    btnClose: {
      background: 'none',
      border: 'none',
      fontSize: '24px',
      cursor: 'pointer',
      color: '#6b7280',
    },
    formGroup: {
      marginBottom: '16px',
    },
    label: {
      display: 'block',
      marginBottom: '6px',
      fontSize: '14px',
      fontWeight: '500',
      color: '#374151',
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      fontSize: '14px',
      boxSizing: 'border-box',
    },
    textarea: {
      width: '100%',
      padding: '10px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      fontSize: '14px',
      minHeight: '120px',
      resize: 'vertical',
      boxSizing: 'border-box',
    },
    select: {
      width: '100%',
      padding: '10px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      fontSize: '14px',
      boxSizing: 'border-box',
    },
    imagePreview: {
      marginTop: '10px',
      maxWidth: '100%',
      maxHeight: '200px',
      borderRadius: '6px',
    },
    btnSubmit: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#f97316',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      fontSize: '16px',
      fontWeight: '500',
      cursor: 'pointer',
      marginTop: '20px',
    },
    btnSubmitDisabled: {
      backgroundColor: '#fdba74',
      cursor: 'not-allowed',
    },
    loading: {
      textAlign: 'center',
      padding: '40px',
      color: '#6b7280',
    },
    error: {
      backgroundColor: '#fee2e2',
      color: '#dc2626',
      padding: '12px',
      borderRadius: '6px',
      marginBottom: '20px',
    },
  };

  // 🔥 État pour le hover du bouton delete
  const [hoveredDeleteId, setHoveredDeleteId] = useState(null);

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Actualités</h1>
        <button style={styles.btnAdd} onClick={() => setShowModal(true)}>
          + Ajouter une actualité
        </button>
      </div>

      {/* Erreur */}
      {error && (
        <div style={styles.error}>
          Erreur : {error}
        </div>
      )}

      {/* Liste */}
      {loading ? (
        <div style={styles.loading}>Chargement...</div>
      ) : actualites.length === 0 ? (
        <div style={styles.loading}>Aucune actualité trouvée</div>
      ) : (
        <div style={styles.grid}>
          {actualites.map((actu) => (
            <div key={actu.id} style={styles.card}>
              {/* 🔥 Bouton de suppression */}
              <button
                style={{
                  ...styles.btnDelete,
                  ...(deletingId === actu.id ? styles.btnDeleteDisabled : {}),
                  ...(hoveredDeleteId === actu.id ? styles.btnDeleteHover : {}),
                }}
                onClick={() => handleDelete(actu.id, actu.slug, actu.titre)}
                onMouseEnter={() => setHoveredDeleteId(actu.id)}
                onMouseLeave={() => setHoveredDeleteId(null)}
                disabled={deletingId === actu.id}
                title="Supprimer cette actualité"
              >
                {deletingId === actu.id ? '⏳' : '🗑️'}
              </button>

              {actu.has_image ? (
                <img
                  src={actu.image?.url}
                  alt={actu.titre}
                  style={styles.cardImage}
                />
              ) : (
                <div style={{ ...styles.cardImage, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af' }}>
                  Pas d'image
                </div>
              )}
              <div style={styles.cardContent}>
                <span style={{
                  ...styles.badge,
                  ...(actu.is_publie ? styles.badgePublie : styles.badgeBrouillon)
                }}>
                  {actu.is_publie ? 'Publié' : 'Brouillon'}
                </span>
                <h3 style={styles.cardTitle}>{actu.titre}</h3>
                <p style={styles.cardDate}>
                  {actu.date_publication_fr} • {actu.categorie}
                </p>
                <p style={styles.cardDesc}>{actu.description_excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div style={styles.modal} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Nouvelle actualité</h2>
              <button style={styles.btnClose} onClick={closeModal}>×</button>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Image */}
              <div style={styles.formGroup}>
                <label style={styles.label}>Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={styles.input}
                />
                {previewImage && (
                  <img src={previewImage} alt="Preview" style={styles.imagePreview} />
                )}
              </div>

              {/* Date */}
              <div style={styles.formGroup}>
                <label style={styles.label}>Date de publication *</label>
                <input
                  type="date"
                  name="date_publication"
                  value={formData.date_publication}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>

              {/* Catégorie */}
              <div style={styles.formGroup}>
                <label style={styles.label}>Catégorie *</label>
                <select
                  name="categorie"
                  value={formData.categorie}
                  onChange={handleChange}
                  style={styles.select}
                  required
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Titre */}
              <div style={styles.formGroup}>
                <label style={styles.label}>Titre *</label>
                <input
                  type="text"
                  name="titre"
                  value={formData.titre}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="Titre de l'actualité"
                  required
                />
              </div>

              {/* Description */}
              <div style={styles.formGroup}>
                <label style={styles.label}>Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  style={styles.textarea}
                  placeholder="Contenu de l'actualité..."
                  required
                />
              </div>

              {/* Statut */}
              <div style={styles.formGroup}>
                <label style={styles.label}>Statut</label>
                <select
                  name="statut"
                  value={formData.statut}
                  onChange={handleChange}
                  style={styles.select}
                >
                  <option value="brouillon">Brouillon</option>
                  <option value="publie">Publié</option>
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                style={{
                  ...styles.btnSubmit,
                  ...(submitting ? styles.btnSubmitDisabled : {})
                }}
                disabled={submitting}
              >
                {submitting ? 'Création en cours...' : 'Créer l\'actualité'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActualitesList;