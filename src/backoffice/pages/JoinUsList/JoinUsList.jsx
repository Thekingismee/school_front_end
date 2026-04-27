import React, { useState, useEffect, useCallback } from 'react';
import {
  MoreVertical, CheckCircle, XCircle, Clock, User, Phone, Mail, MapPin,
  Edit, Trash2, Download, Eye, Briefcase, Calendar, FileText, Upload,
  AlertCircle, Filter, Search, ChevronLeft, ChevronRight, Tag, Building2,
  MessageSquare, Users, GraduationCap, ExternalLink,
  ArrowLeft
} from 'lucide-react';
import './JoinUsList.css';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

// 🎨 Configurations d'affichage
const statutConfig = {
  nouveau: { label: 'Nouveau', class: 'nouveau', icon: Clock, priority: 1 },
  en_cours: { label: 'En cours', class: 'en_cours', icon: AlertCircle, priority: 2 },
  contacte: { label: 'Contacté', class: 'contacte', icon: Phone, priority: 3 },
  entretien: { label: 'Entretien', class: 'entretien', icon: Users, priority: 4 },
  accepte: { label: 'Accepté', class: 'accepte', icon: CheckCircle, priority: 5 },
  refuse: { label: 'Refusé', class: 'refuse', icon: XCircle, priority: 6 },
  archive: { label: 'Archivé', class: 'archive', icon: FileText, priority: 7 },
};

const prioriteConfig = {
  faible: { label: 'Faible', class: 'faible', dotClass: 'faible' },
  normale: { label: 'Normale', class: 'normale', dotClass: 'normale' },
  haute: { label: 'Haute', class: 'haute', dotClass: 'haute' },
};

const disponibiliteConfig = {
  immediate: { label: 'Immédiate', class: 'dispo-immediate' },
  '1mois': { label: '1 mois', class: 'dispo-1mois' },
  rentree: { label: 'Rentrée', class: 'dispo-rentree' },
  autre: { label: 'Autre', class: 'dispo-autre' },
};

const posteLabels = {
  'enseignant-maternelle': 'Enseignant(e) Maternelle',
  'enseignant-primaire': 'Enseignant(e) Primaire',
  'enseignant-college': 'Enseignant(e) Collège',
  'enseignant-lycee': 'Enseignant(e) Lycée',
  'direction': 'Direction / Administration',
  'support': 'Support & Services',
  'autre': 'Autre poste',
};

// 🔽 Dropdown Menu Component
const CandidatureDropdown = ({ candidature, onUpdate, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [note, setNote] = useState(candidature.note_recruteur || '');

  const handleStatusChange = async (newStatut) => {
    try {
      const res = await fetch(`${API_URL}/admin/candidatures/${candidature.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ statut: newStatut }),
      });
      if (res.ok) {
        onUpdate(candidature.id, { statut: newStatut });
        setIsOpen(false);
      }
    } catch (err) {
      console.error('Erreur mise à jour statut:', err);
    }
  };

  const handlePriorityChange = async (newPriorite) => {
    try {
      const res = await fetch(`${API_URL}/admin/candidatures/${candidature.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ priorite: newPriorite }),
      });
      if (res.ok) {
        onUpdate(candidature.id, { priorite: newPriorite });
        setIsOpen(false);
      }
    } catch (err) {
      console.error('Erreur mise à jour priorité:', err);
    }
  };

  const handleSaveNote = async () => {
    try {
      const res = await fetch(`${API_URL}/admin/candidatures/${candidature.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ note_recruteur: note }),
      });
      if (res.ok) {
        onUpdate(candidature.id, { note_recruteur: note });
        setShowNoteModal(false);
        setIsOpen(false);
      }
    } catch (err) {
      console.error('Erreur sauvegarde note:', err);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Supprimer cette candidature définitivement ?')) return;
    try {
      const res = await fetch(`${API_URL}/admin/candidatures/${candidature.id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (res.ok) {
        onDelete(candidature.id);
        setIsOpen(false);
      }
    } catch (err) {
      console.error('Erreur suppression:', err);
    }
  };

  const StatusIcon = statutConfig[candidature.statut]?.icon || Clock;

  return (
    <>
      <div className="joinus-dropdown">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="joinus-dropdown-btn"
          aria-label="Menu actions"
        >
          <MoreVertical size={18} />
        </button>

        {isOpen && (
          <>
            <div className="joinus-dropdown-overlay" onClick={() => setIsOpen(false)} />
            <div className="joinus-dropdown-menu">

              {/* Statut */}
              <div className="joinus-dropdown-section">
                <span className="joinus-dropdown-section-title">Statut</span>
              </div>
              {Object.entries(statutConfig).map(([key, config]) => {
                const Icon = config.icon;
                const isCurrent = candidature.statut === key;
                return (
                  <button
                    key={key}
                    onClick={() => handleStatusChange(key)}
                    disabled={isCurrent}
                    className={`joinus-dropdown-item ${isCurrent ? 'active' : ''}`}
                  >
                    <Icon size={14} />
                    {config.label}
                    {isCurrent && <span className="joinus-dropdown-checkmark">✓</span>}
                  </button>
                );
              })}

              <div className="joinus-dropdown-divider" />

              {/* Priorité */}
              <div className="joinus-dropdown-section">
                <span className="joinus-dropdown-section-title">Priorité</span>
              </div>
              {Object.entries(prioriteConfig).map(([key, config]) => (
                <button
                  key={key}
                  onClick={() => handlePriorityChange(key)}
                  className={`joinus-dropdown-item ${candidature.priorite === key ? 'active' : ''}`}
                >
                  <span className={`joinus-priority-dot ${config.dotClass}`} />
                  {config.label}
                </button>
              ))}

              <div className="joinus-dropdown-divider" />

              {/* Actions */}
              <button
                onClick={() => { setNote(candidature.note_recruteur || ''); setShowNoteModal(true); }}
                className="joinus-dropdown-item"
              >
                <Edit size={14} />
                Ajouter une note
              </button>
              <button
                onClick={() => { /* Voir détails */ }}
                className="joinus-dropdown-item"
              >
                <Eye size={14} />
                Voir le dossier complet
              </button>

              <div className="joinus-dropdown-divider" />

              <button
                onClick={handleDelete}
                className="joinus-dropdown-item danger"
              >
                <Trash2 size={14} />
                Supprimer
              </button>
            </div>
          </>
        )}
      </div>

      {/* Modal note recruteur */}
      {showNoteModal && (
        <div className="joinus-modal-overlay" onClick={() => setShowNoteModal(false)}>
          <div className="joinus-modal" onClick={e => e.stopPropagation()}>
            <div className="joinus-modal-header">
              <Edit size={20} />
              <h3 className="joinus-modal-title">Note interne RH</h3>
            </div>

            <div className="joinus-modal-summary">
              <p>👤 {candidature.candidat.nom_complet}</p>
              <p>🎯 {candidature.poste.label} • {disponibiliteConfig[candidature.disponibilite.code]?.label}</p>
            </div>

            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Notes pour l'équipe de recrutement..."
              className="joinus-modal-textarea"
              rows={4}
            />

            <div className="joinus-modal-actions">
              <button
                onClick={() => setShowNoteModal(false)}
                className="joinus-modal-btn joinus-modal-btn-secondary"
              >
                Annuler
              </button>
              <button
                onClick={handleSaveNote}
                className="joinus-modal-btn joinus-modal-btn-primary"
              >
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// 💼 Candidature Card Component
const CandidatureCard = ({ candidature, onUpdate, onDelete }) => {
  const statut = statutConfig[candidature.statut] || statutConfig.nouveau;
  const priorite = prioriteConfig[candidature.priorite] || prioriteConfig.normale;
  const dispo = disponibiliteConfig[candidature.disponibilite.code] || disponibiliteConfig.autre;
  const StatusIcon = statut.icon;

  const cardBorderClass = candidature.is_nouveau ? 'nouveau' : 'default';

  return (
    <div className={`joinus-card ${cardBorderClass}`}>

      {/* Header avec dropdown */}
      <div className="joinus-card-header">
        <div className="joinus-card-badges">
          <span className={`joinus-badge ${statut.class}`}>
            <StatusIcon size={12} />
            {statut.label}
          </span>
          <span className={`joinus-badge-priority ${priorite.class}`}>
            <span className={`joinus-priority-dot ${priorite.dotClass}`} />
            {priorite.label}
          </span>
        </div>
        <CandidatureDropdown candidature={candidature} onUpdate={onUpdate} onDelete={onDelete} />
      </div>

      {/* Contenu */}
      <div className="joinus-card-content">

        {/* 👤 Candidat */}
        <div>
          <h4 className="joinus-card-visitor-title">
            <User size={14} />
            Candidat
          </h4>
          <div>
            <p className="joinus-card-visitor-name">{candidature.candidat.nom_complet}</p>
            <div className="joinus-card-contacts">
              <a href={`mailto:${candidature.candidat.email}`} className="joinus-card-contact">
                <Mail size={12} />
                {candidature.candidat.email}
              </a>
              <a href={`tel:${candidature.candidat.telephone}`} className="joinus-card-contact">
                <Phone size={12} />
                {candidature.candidat.telephone}
              </a>
            </div>
            <p className="joinus-card-location">
              <MapPin size={12} />
              {candidature.candidat.ville}
            </p>
          </div>
        </div>

        {/* 🎯 Poste & Disponibilité */}
        <div className="joinus-card-info-grid">
          <div className="joinus-card-info-box">
            <p className="joinus-card-info-label">Poste souhaité</p>
            <p className="joinus-card-info-value orange-icon">
              <Briefcase size={12} />
              {candidature.poste.label}
            </p>
          </div>
          <div className="joinus-card-info-box">
            <p className="joinus-card-info-label">Disponibilité</p>
            <p className={`joinus-card-info-value ${dispo.class}`}>
              <Calendar size={12} />
              {candidature.disponibilite.label}
            </p>
          </div>
        </div>

        {/* 📋 Contrats */}
        {candidature.contrat_labels?.length > 0 && (
          <div>
            <p className="joinus-card-contrats-label">Types de contrat</p>
            <div className="joinus-card-contrats">
              {candidature.contrat_labels.map((ctr, i) => (
                <span key={i} className="joinus-contrat-tag">
                  {ctr}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 💬 Message (si présent) */}
        {candidature.message && (
          <div className="joinus-card-message">
            <p className="joinus-card-message-text">
              <MessageSquare size={14} />
              {candidature.message_excerpt}
            </p>
          </div>
        )}

        {/* 📁 Fichiers avec liens de téléchargement */}
        <div>
          <p className="joinus-card-files-label">
            <Upload size={12} />
            Pièces jointes
          </p>
          <div className="joinus-card-files">
            {/* CV - Obligatoire */}
            {candidature.fichiers?.cv?.url && (
              <a
                href={candidature.fichiers.cv.url}
                target="_blank"
                rel="noopener noreferrer"
                className="joinus-file-link cv"
              >
                <div className="joinus-file-info">
                  <FileText size={14} />
                  <span className="joinus-file-name">{candidature.fichiers.cv.nom}</span>
                </div>
                <div className="joinus-file-meta">
                  <span className="joinus-file-size">{candidature.fichiers.cv.size}</span>
                  <Download size={14} className="joinus-file-download" />
                </div>
              </a>
            )}

            {/* Lettre de motivation - Optionnelle */}
            {candidature.fichiers?.lettre?.url && (
              <a
                href={candidature.fichiers.lettre.url}
                target="_blank"
                rel="noopener noreferrer"
                className="joinus-file-link lettre"
              >
                <div className="joinus-file-info">
                  <FileText size={14} />
                  <span className="joinus-file-name">{candidature.fichiers.lettre.nom}</span>
                </div>
                <div className="joinus-file-meta">
                  <span className="joinus-file-size">{candidature.fichiers.lettre.size}</span>
                  <Download size={14} className="joinus-file-download" />
                </div>
              </a>
            )}

            {/* Diplômes - Multiples */}
            {candidature.fichiers?.diplomes?.length > 0 && candidature.fichiers.diplomes.map((doc, idx) => (
              <a
                key={idx}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="joinus-file-link diplome"
              >
                <div className="joinus-file-info">
                  <GraduationCap size={14} />
                  <span className="joinus-file-name">{doc.nom}</span>
                </div>
                <div className="joinus-file-meta">
                  <span className="joinus-file-size">{doc.size}</span>
                  <Download size={14} className="joinus-file-download" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 📝 Note recruteur (si présente) */}
        {candidature.note_recruteur && (
          <div className="joinus-card-note">
            <p className="joinus-card-note-text">
              <Edit size={14} />
              <span><strong>Note :</strong> {candidature.note_recruteur}</span>
            </p>
            {candidature.date_premier_contact && (
              <p className="joinus-card-note-contact">
                Contacté le {candidature.date_premier_contact}
              </p>
            )}
          </div>
        )}

        {/* 📊 Métadonnées */}
        <div className="joinus-card-meta">
          <span className="joinus-card-meta-date">
            <Calendar size={10} />
            Reçu le {candidature.created_at}
          </span>
          {candidature.source && (
            <span className="joinus-card-source">
              <Tag size={10} />
              {candidature.source}
            </span>
          )}
        </div>
      </div>

      {/* Badge "Nouveau" animé */}
      {candidature.is_nouveau && (
        <div className="joinus-card-new-badge">
          <span className="joinus-new-dot"></span>
        </div>
      )}
    </div>
  );
};

// 📋 Main Component
const JoinUsList = ({
  candidatures = [],
  pagination = {},
  availableFilters = {},
  isLoading = false,
  error = null,
  fetchCandidatures,
  updateCandidatureStatus,
  deleteCandidature
}) => {
  // Keep local state for filters, currentPage, showAdvancedFilters, etc.
  const [filters, setFilters] = useState({
    statut: '',
    priorite: '',
    poste_souhaite: '',
    disponibilite: '',
    etablissement: '',
    search: '',
    date_debut: '',
    date_fin: '',
  });
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(12);
  const [sortBy, setSortBy] = useState('created_at');
  const [sortDir, setSortDir] = useState('desc');

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    setCurrentPage(1);
    fetchCandidatures({ page: 1, per_page: perPage, sortBy, sortDir, ...newFilters });
  };

  useEffect(() => {
    fetchCandidatures({ page: currentPage, perPage, sortBy, sortDir, ...filters });
  }, [fetchCandidatures, currentPage, perPage, sortBy, sortDir, filters]);

  const handleUpdate = (id, updates) => {
    updateCandidatureStatus(id, updates);
  };

  const handleDelete = (id) => {
    deleteCandidature(id);
  };

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortDir(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortDir('asc');
    }
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setFilters({ statut: '', priorite: '', poste_souhaite: '', disponibilite: '', etablissement: '', search: '', date_debut: '', date_fin: '' });
    setCurrentPage(1);
  };

  const hasActiveFilters = Object.values(filters).some(v => v || v === true);

  return (
    <div className="joinus-container">
      {/* En-tête */}
      <div className="joinus-header">
        <h1>
          <a href="/admin" className="rdv-back-link">
            <ArrowLeft size={14} />
          </a>Gestion des candidatures</h1>
        <p>
          {pagination.total} candidature{pagination.total > 1 ? 's' : ''} • {pagination.nouveau_count} nouvelle{pagination.nouveau_count > 1 ? 's' : ''}
        </p>
      </div>

      {/* Stats rapides */}
      <div className="joinus-stats">
        <div className="joinus-stat-card nouveau">
          <div className="joinus-stat-value">{pagination.nouveau_count || 0}</div>
          <div className="joinus-stat-label">Nouvelles</div>
        </div>
        <div className="joinus-stat-card haute">
          <div className="joinus-stat-value">
            {candidatures.filter(c => c.priorite === 'haute' && c.statut !== 'accepte' && c.statut !== 'refuse').length}
          </div>
          <div className="joinus-stat-label">Priorité haute</div>
        </div>
        <div className="joinus-stat-card accepte">
          <div className="joinus-stat-value">
            {candidatures.filter(c => c.statut === 'accepte').length}
          </div>
          <div className="joinus-stat-label">Acceptées</div>
        </div>
      </div>

      {/* Barre de filtres */}
      <div className="joinus-filters">
        <div className="joinus-filters-header">
          <h3><Filter size={14} /> Filtres</h3>
          <button
            className="joinus-btn-toggle"
            onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
          >
            {showAdvancedFilters ? 'Masquer' : 'Afficher'} avancés
          </button>
        </div>

        <div className="joinus-filters-grid">
          {/* Recherche */}
          <div className="joinus-filter-group joinus-search-wrapper">
            <Search className="joinus-search-icon" size={16} />
            <input
              type="text"
              placeholder="Rechercher (nom, email, ville, message)..."
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
            />
          </div>

          {/* Statut */}
          <div className="joinus-filter-group">
            <label>Statut</label>
            <select value={filters.statut} onChange={(e) => handleFilterChange('statut', e.target.value)}>
              <option value="">Tous</option>
              {availableFilters.statuts?.map(s => (
                <option key={s} value={s}>{statutConfig[s]?.label || s}</option>
              ))}
            </select>
          </div>

          {/* Priorité */}
          <div className="joinus-filter-group">
            <label>Priorité</label>
            <select value={filters.priorite} onChange={(e) => handleFilterChange('priorite', e.target.value)}>
              <option value="">Toutes</option>
              {availableFilters.priorites?.map(p => (
                <option key={p} value={p}>{prioriteConfig[p]?.label || p}</option>
              ))}
            </select>
          </div>

          {/* Poste */}
          <div className="joinus-filter-group">
            <label>Poste</label>
            <select value={filters.poste_souhaite} onChange={(e) => handleFilterChange('poste_souhaite', e.target.value)}>
              <option value="">Tous</option>
              {availableFilters.postes?.map(p => (
                <option key={p} value={p}>{posteLabels[p] || p}</option>
              ))}
            </select>
          </div>

          {/* Disponibilité */}
          <div className="joinus-filter-group">
            <label>Disponibilité</label>
            <select value={filters.disponibilite} onChange={(e) => handleFilterChange('disponibilite', e.target.value)}>
              <option value="">Toutes</option>
              {availableFilters.disponibilites?.map(d => (
                <option key={d} value={d}>{disponibiliteConfig[d]?.label || d}</option>
              ))}
            </select>
          </div>

          {/* Dates (avancé) */}
          {showAdvancedFilters && (
            <>
              <div className="joinus-filter-group">
                <label>Du</label>
                <input type="date" value={filters.date_debut} onChange={(e) => handleFilterChange('date_debut', e.target.value)} />
              </div>
              <div className="joinus-filter-group">
                <label>Au</label>
                <input type="date" value={filters.date_fin} onChange={(e) => handleFilterChange('date_fin', e.target.value)} />
              </div>
            </>
          )}
        </div>

        {/* Tri & Actions */}
        <div className="joinus-filters-actions">
          <div className="joinus-sort-controls">
            <span className="text-xs text-gray-500">Trier par :</span>
            <button
              className={`joinus-sort-btn ${sortBy === 'created_at' ? 'active' : ''}`}
              onClick={() => handleSort('created_at')}
            >
              Date <ChevronLeft size={10} className={`joinus-sort-icon ${sortDir === 'asc' ? 'asc' : 'desc'}`} />
            </button>
            <button
              className={`joinus-sort-btn ${sortBy === 'priorite' ? 'active' : ''}`}
              onClick={() => handleSort('priorite')}
            >
              Priorité
            </button>
            <button
              className={`joinus-sort-btn ${sortBy === 'nom' ? 'active' : ''}`}
              onClick={() => handleSort('nom')}
            >
              Nom
            </button>
          </div>

          {hasActiveFilters && (
            <button onClick={clearFilters} className="joinus-btn-clear">
              Réinitialiser
            </button>
          )}
        </div>
      </div>

      {/* États */}
      {isLoading ? (
        <div className="joinus-state">
          <div className="joinus-loading-spinner" />
          <p>Chargement des candidatures...</p>
        </div>
      ) : error ? (
        <div className="joinus-state">
          <AlertCircle className="joinus-state-icon" />
          <p className="joinus-state-title joinus-state-error">{error}</p>
          <button onClick={() => fetchCandidatures({ page: currentPage, perPage, sortBy, sortDir, ...filters })} className="joinus-btn-primary">Réessayer</button>
        </div>
      ) : candidatures.length === 0 ? (
        <div className="joinus-state">
          <Briefcase className="joinus-state-icon" />
          <p className="joinus-state-title">Aucune candidature trouvée</p>
          <p className="joinus-state-text">Essayez de modifier vos filtres</p>
          {hasActiveFilters && (
            <button onClick={clearFilters} className="joinus-btn-primary">Voir toutes les candidatures</button>
          )}
        </div>
      ) : (
        <>
          {/* Grille de cartes */}
          <div className="joinus-grid">
            {candidatures.map(candidature => (
              <CandidatureCard
                key={candidature.id}
                candidature={candidature}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            ))}
          </div>

          {/* Pagination */}
          {pagination.last_page > 1 && (
            <div className="joinus-pagination">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="joinus-pagination-btn"
              >
                <ChevronLeft size={16} />
                Précédent
              </button>
              <span className="joinus-pagination-info">
                Page {currentPage} sur {pagination.last_page}
              </span>
              <button
                onClick={() => setCurrentPage(p => Math.min(pagination.last_page, p + 1))}
                disabled={currentPage === pagination.last_page || !pagination.has_more}
                className="joinus-pagination-btn"
              >
                Suivant
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default JoinUsList;