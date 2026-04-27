import React, { useState } from "react";
import {
    Send, CheckCircle, User, Phone, Mail, MapPin,
    Briefcase, Building2, Calendar, FileText, Upload, AlertCircle
} from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

const JoinUs = () => {
    const [formData, setFormData] = useState({
        // 👤 Informations personnelles
        nom: "", prenom: "", email: "", telephone: "", ville: "",
        // 🏫 Établissement
        etablissement: "l'Atome-lissasfa",
        // 📌 Poste
        poste: "enseignant-maternelle", posteAutre: "",
        // 📋 Contrat
        contrat: { cdi: false, cdd: false, tempsPlein: false, tempsPartiel: false },
        // 📁 Fichiers
        cv: null, lettre: null, diplomes: null,
        // 🕒 Disponibilité
        disponibilite: "", disponibiliteAutre: "",
        // 💬 Message
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errors, setErrors] = useState({});
    const [apiError, setApiError] = useState(null);

    const handleChange = e => {
        const { name, value, type, checked } = e.target;

        if (name.startsWith("contrat.")) {
            const field = name.split(".")[1];
            setFormData(prev => ({
                ...prev,
                contrat: { ...prev.contrat, [field]: checked }
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
        if (apiError) setApiError(null);
    };

    const handleFileChange = e => {
        const { name, files } = e.target;
        const file = files[0];

        // Validation client
        if (name === "cv" && file) {
            if (file.size > 5 * 1024 * 1024) {
                setErrors(prev => ({ ...prev, cv: "Le CV ne doit pas dépasser 5 Mo" }));
                return;
            }
            const valid = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            if (!valid.includes(file.type)) {
                setErrors(prev => ({ ...prev, cv: "Format accepté : PDF ou DOC" }));
                return;
            }
        }

        setFormData(prev => ({ ...prev, [name]: name === 'diplomes' ? files : file }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.nom.trim()) newErrors.nom = "Le nom est requis";
        if (!formData.prenom.trim()) newErrors.prenom = "Le prénom est requis";
        if (!formData.email.trim()) newErrors.email = "L'email est requis";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email invalide";
        if (!formData.telephone.trim()) newErrors.telephone = "Le téléphone est requis";
        if (!formData.ville.trim()) newErrors.ville = "La ville est requise";

        const hasContrat = Object.values(formData.contrat).some(v => v);
        if (!hasContrat) newErrors.contrat = "Veuillez sélectionner au moins un type de contrat";

        if (!formData.disponibilite) newErrors.disponibilite = "Veuillez sélectionner votre disponibilité";
        if (formData.disponibilite === "autre" && !formData.disponibiliteAutre.trim()) {
            newErrors.disponibiliteAutre = "Veuillez préciser votre disponibilité";
        }
        if (!formData.cv) newErrors.cv = "Le CV est requis";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if (!validateForm()) {
            document.querySelector(".form-field.error")?.scrollIntoView({ behavior: "smooth", block: "center" });
            return;
        }

        setIsSubmitting(true);
        setApiError(null);

        try {
            // 📦 Construction du FormData pour l'upload de fichiers
            const payload = new FormData();

            // Champs texte
            payload.append('nom', formData.nom.trim());
            payload.append('prenom', formData.prenom.trim());
            payload.append('email', formData.email.trim().toLowerCase());
            payload.append('telephone', formData.telephone.trim());
            payload.append('ville', formData.ville.trim());
            payload.append('etablissement', formData.etablissement);
            payload.append('poste_souhaite', formData.poste);
            if (formData.poste === 'autre') payload.append('poste_autre', formData.posteAutre.trim());

            // Checkboxes contrat → format Laravel attendu
            payload.append('contrat_cdi', formData.contrat.cdi ? '1' : '0');
            payload.append('contrat_cdd', formData.contrat.cdd ? '1' : '0');
            payload.append('contrat_temps_plein', formData.contrat.tempsPlein ? '1' : '0');
            payload.append('contrat_temps_partiel', formData.contrat.tempsPartiel ? '1' : '0');

            // Fichiers
            if (formData.cv) payload.append('cv', formData.cv);
            if (formData.lettre) payload.append('lettre', formData.lettre);
            if (formData.diplomes) {
                Array.from(formData.diplomes).forEach(file => payload.append('diplomes[]', file));
            }

            // Disponibilité
            payload.append('disponibilite', formData.disponibilite);
            if (formData.disponibilite === 'autre') payload.append('disponibilite_autre', formData.disponibiliteAutre.trim());

            // Message
            if (formData.message.trim()) payload.append('message', formData.message.trim());

            const response = await fetch(`${API_URL}/job-applications`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'X-Source': 'site',
                    // ⚠️ NE PAS mettre 'Content-Type': 'application/json' avec FormData !
                    // Le navigateur le définit automatiquement avec le boundary multipart
                },
                body: payload,
            });

            const data = await response.json();

            if (!response.ok) {
                if (response.status === 422 && data.errors) {
                    // Transformer les erreurs Laravel (snake_case → camelCase si besoin)
                    const formatted = {};
                    Object.entries(data.errors).forEach(([key, msgs]) => {
                        // Convertir snake_case vers camelCase pour correspondre au state React
                        const camelKey = key.replace(/_([a-z])/g, (_, l) => l.toUpperCase());
                        formatted[camelKey] = msgs[0];
                    });
                    setErrors(formatted);
                    throw new Error('Veuillez corriger les erreurs du formulaire');
                }
                throw new Error(data.message || 'Une erreur est survenue');
            }

            // ✅ Succès
            setIsSuccess(true);
            // Reset après délai
            setTimeout(() => {
                setIsSuccess(false);
                setFormData({
                    nom: "", prenom: "", email: "", telephone: "", ville: "",
                    etablissement: "l'Atome-lissasfa", poste: "enseignant-maternelle", posteAutre: "",
                    contrat: { cdi: false, cdd: false, tempsPlein: false, tempsPartiel: false },
                    cv: null, lettre: null, diplomes: null,
                    disponibilite: "", disponibiliteAutre: "", message: ""
                });
                setErrors({});
            }, 4000);

        } catch (error) {
            console.error('Erreur candidature:', error);
            if (error.message !== 'Veuillez corriger les erreurs du formulaire') {
                setApiError(error.message || 'Erreur de connexion au serveur');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const formatFileName = file => {
        if (!file) return "Aucun fichier sélectionné";
        const name = typeof file === 'string' ? file : file.name;
        return name.length > 25 ? name.slice(0, 22) + "..." : name;
    };

    return (
        <>
            <header className="inscription-header-hero">
                <img src="/inscrip2.jpg" alt="Recrutement Groupe Scolaire L'Atome" className="hero-background" />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="inscription-titre">Rejoignez notre équipe</h1>
                    <p className="hero-subtitle">Candidature spontanée & opportunités de carrière</p>
                </div>
            </header>

            <section className="inscription-section">
                <div className="inscription-container">
                    <div className="inscription-header">
                        <span className="inscription-badge">Recrutement 2026-2027</span>
                        <h2 className="inscription-title">Formulaire de candidature</h2>
                        <div className="inscription-line"></div>
                    </div>

                    {isSuccess ? (
                        <div className="inscription-success">
                            <div className="success-icon"><CheckCircle size={48} strokeWidth={1.5} /></div>
                            <h3>Candidature envoyée avec succès !</h3>
                            <p>Nous étudierons votre profil et vous contacterons dans les plus brefs délais.</p>
                            <div className="success-info">
                                <p>Un email de confirmation vous a été envoyé à {formData.email}</p>
                            </div>
                        </div>
                    ) : (
                        <form className="inscription-form" onSubmit={handleSubmit} encType="multipart/form-data" noValidate>
                            {/* Erreur API globale */}
                            {apiError && (
                                <div className="form-error-global">
                                    <AlertCircle size={18} />
                                    <span>{apiError}</span>
                                </div>
                            )}

                            {/* 👤 Informations personnelles */}
                            <div className="form-section">
                                <h3 className="form-section-title"><User size={20} /> Informations personnelles</h3>
                                <div className="form-row">
                                    <div className={`form-field ${errors.nom ? "error" : ""}`}>
                                        <label htmlFor="nom">Nom <span className="required">*</span></label>
                                        <div className="input-wrapper">
                                            <User size={18} className="input-icon" />
                                            <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} required placeholder="Votre nom" />
                                        </div>
                                        {errors.nom && <span className="error-message">{errors.nom}</span>}
                                    </div>
                                    <div className={`form-field ${errors.prenom ? "error" : ""}`}>
                                        <label htmlFor="prenom">Prénom <span className="required">*</span></label>
                                        <div className="input-wrapper">
                                            <User size={18} className="input-icon" />
                                            <input type="text" id="prenom" name="prenom" value={formData.prenom} onChange={handleChange} required placeholder="Votre prénom" />
                                        </div>
                                        {errors.prenom && <span className="error-message">{errors.prenom}</span>}
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className={`form-field ${errors.email ? "error" : ""}`}>
                                        <label htmlFor="email">Email <span className="required">*</span></label>
                                        <div className="input-wrapper">
                                            <Mail size={18} className="input-icon" />
                                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Votre adresse email" />
                                        </div>
                                        {errors.email && <span className="error-message">{errors.email}</span>}
                                    </div>
                                    <div className={`form-field ${errors.telephone ? "error" : ""}`}>
                                        <label htmlFor="telephone">Téléphone <span className="required">*</span></label>
                                        <div className="input-wrapper">
                                            <Phone size={18} className="input-icon" />
                                            <input type="tel" id="telephone" name="telephone" value={formData.telephone} onChange={handleChange} required placeholder="Votre numéro de téléphone" />
                                        </div>
                                        {errors.telephone && <span className="error-message">{errors.telephone}</span>}
                                    </div>
                                </div>
                                <div className={`form-field ${errors.ville ? "error" : ""}`}>
                                    <label htmlFor="ville">Ville de résidence <span className="required">*</span></label>
                                    <div className="input-wrapper">
                                        <MapPin size={18} className="input-icon" />
                                        <input type="text" id="ville" name="ville" value={formData.ville} onChange={handleChange} required placeholder="Votre ville de résidence" />
                                    </div>
                                    {errors.ville && <span className="error-message">{errors.ville}</span>}
                                </div>
                            </div>

                            {/* 🏫 Établissement */}
                            <div className="form-section">
                                <h3 className="form-section-title"><Building2 size={20} /> Établissement souhaité</h3>
                                <div className="form-field">
                                    <div className="input-wrapper">
                                        <Building2 size={18} className="input-icon" />
                                        <select id="etablissement" name="etablissement" value={formData.etablissement} onChange={handleChange} className="fixed-select" disabled>
                                            <option value="l'Atome-lissasfa">L'Atome – Lissasfa</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* 📌 Poste */}
                            <div className="form-section">
                                <h3 className="form-section-title"><Briefcase size={20} /> Poste recherché</h3>
                                <div className="form-field">
                                    <div className="input-wrapper">
                                        <Briefcase size={18} className="input-icon" />
                                        <select id="poste" name="poste" value={formData.poste} onChange={handleChange}>
                                            <option value="enseignant-maternelle">Enseignant(e) Maternelle</option>
                                            <option value="enseignant-primaire">Enseignant(e) Primaire</option>
                                            <option value="enseignant-college">Enseignant(e) Collège</option>
                                            <option value="enseignant-lycee">Enseignant(e) Lycée</option>
                                            <option value="direction">Direction / Administration</option>
                                            <option value="support">Support & Services</option>
                                            <option value="autre">Autre</option>
                                        </select>
                                    </div>
                                </div>
                                {formData.poste === "autre" && (
                                    <div className="form-field sub-field">
                                        <label htmlFor="posteAutre">Si autre, précisez</label>
                                        <input type="text" id="posteAutre" name="posteAutre" value={formData.posteAutre} onChange={handleChange} placeholder="Précisez le poste" className={errors.posteAutre ? "error" : ""} />
                                        {errors.posteAutre && <span className="error-message">{errors.posteAutre}</span>}
                                    </div>
                                )}
                            </div>

                            {/* 📋 Contrat */}
                            <div className="form-section">
                                <h3 className="form-section-title"><FileText size={20} /> Type de contrat souhaité</h3>
                                <div className={`form-field checkbox-group ${errors.contrat ? "error" : ""}`}>
                                    {['cdi', 'cdd', 'tempsPlein', 'tempsPartiel'].map(key => (
                                        <label key={key} className="checkbox-label">
                                            <input type="checkbox" name={`contrat.${key}`} checked={formData.contrat[key]} onChange={handleChange} />
                                            <span className="checkbox-custom"></span>
                                            {key === 'tempsPlein' ? 'Temps plein' : key === 'tempsPartiel' ? 'Temps partiel' : key.toUpperCase()}
                                        </label>
                                    ))}
                                    {errors.contrat && <span className="error-message">{errors.contrat}</span>}
                                </div>
                            </div>

                            {/* 📁 Pièces jointes */}
                            <div className="form-section">
                                <h3 className="form-section-title"><Upload size={20} /> Pièces jointes</h3>

                                <div className={`form-field ${errors.cv ? "error" : ""}`}>
                                    <label htmlFor="cv">CV (PDF, DOC – max 5 Mo) <span className="required">*</span></label>
                                    <div className="file-upload-wrapper">
                                        <input type="file" id="cv" name="cv" onChange={handleFileChange} accept=".pdf,.doc,.docx" required className="file-input" />
                                        <label htmlFor="cv" className="file-label"><Upload size={16} /> {formData.cv ? formatFileName(formData.cv) : "Parcourir..."}</label>
                                        <span className="file-name">{formData.cv ? formatFileName(formData.cv) : "Aucun fichier sélectionné"}</span>
                                    </div>
                                    {errors.cv && <span className="error-message">{errors.cv}</span>}
                                </div>

                                <div className="form-field">
                                    <label htmlFor="lettre">Lettre de motivation (optionnelle)</label>
                                    <div className="file-upload-wrapper">
                                        <input type="file" id="lettre" name="lettre" onChange={handleFileChange} accept=".pdf,.doc,.docx" className="file-input" />
                                        <label htmlFor="lettre" className="file-label"><Upload size={16} /> {formData.lettre ? formatFileName(formData.lettre) : "Parcourir..."}</label>
                                        <span className="file-name">{formData.lettre ? formatFileName(formData.lettre) : "Aucun fichier sélectionné"}</span>
                                    </div>
                                </div>

                                <div className="form-field">
                                    <label htmlFor="diplomes">Diplômes ou attestations</label>
                                    <div className="file-upload-wrapper">
                                        <input type="file" id="diplomes" name="diplomes" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" multiple className="file-input" />
                                        <label htmlFor="diplomes" className="file-label"><Upload size={16} /> {formData.diplomes ? `${formData.diplomes.length} fichier(s)` : "Parcourir..."}</label>
                                        <span className="file-name">{formData.diplomes ? `${formData.diplomes.length} fichier(s) sélectionné(s)` : "Aucun fichier sélectionné"}</span>
                                    </div>
                                </div>
                            </div>

                            {/* 🕒 Disponibilité */}
                            <div className="form-section">
                                <h3 className="form-section-title"><Calendar size={20} /> Disponibilité</h3>
                                <div className={`form-field radio-group ${errors.disponibilite ? "error" : ""}`}>
                                    {[
                                        { value: 'immediate', label: 'Immédiate' },
                                        { value: '1mois', label: 'Dans 1 mois' },
                                        { value: 'rentree', label: 'À la rentrée prochaine' },
                                        { value: 'autre', label: 'Autre' }
                                    ].map(opt => (
                                        <label key={opt.value} className="radio-label">
                                            <input type="radio" name="disponibilite" value={opt.value} checked={formData.disponibilite === opt.value} onChange={handleChange} />
                                            <span className="radio-custom"></span>
                                            {opt.label}
                                        </label>
                                    ))}
                                    {errors.disponibilite && <span className="error-message">{errors.disponibilite}</span>}
                                </div>
                                {formData.disponibilite === "autre" && (
                                    <div className={`form-field sub-field ${errors.disponibiliteAutre ? "error" : ""}`}>
                                        <label htmlFor="disponibiliteAutre">Si autre, précisez</label>
                                        <input type="text" id="disponibiliteAutre" name="disponibiliteAutre" value={formData.disponibiliteAutre} onChange={handleChange} placeholder="Précisez votre disponibilité" />
                                        {errors.disponibiliteAutre && <span className="error-message">{errors.disponibiliteAutre}</span>}
                                    </div>
                                )}
                            </div>

                            {/* 💬 Message */}
                            <div className="form-section">
                                <h3 className="form-section-title"><FileText size={20} /> Message complémentaire</h3>
                                <div className="form-field">
                                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="Motivations, expériences pertinentes, questions..." />
                                </div>
                            </div>

                            <button type="submit" className="inscription-submit" disabled={isSubmitting}>
                                {isSubmitting ? <><span className="spinner"></span> Envoi en cours...</> : <><>Envoyer ma candidature</><Send size={18} /></>}
                            </button>

                            <p className="form-footer">
                                En soumettant ce formulaire, vous acceptez que vos données soient traitées dans le cadre de notre processus de recrutement.
                                Conformément à la loi, vous disposez d'un droit d'accès et de rectification.
                            </p>
                        </form>
                    )}
                </div>
            </section>

            <style jsx>{`
                /* ... (mêmes styles que votre composant original, avec ajouts ci-dessous) ... */
                .form-error-global { display: flex; align-items: center; gap: 8px; background: #fef2f2; border: 1px solid #fecaca; color: #dc2626; padding: 12px 16px; border-radius: 12px; margin-bottom: 24px; font-family: 'Inter', sans-serif; font-size: 0.9rem; }
                .form-field.error input, .form-field.error select, .form-field.error textarea { border-color: #ef4444; background: #fef2f2; }
                .form-field.error input:focus, .form-field.error select:focus, .form-field.error textarea:focus { border-color: #ef4444; box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1); }
                .error-message { font-size: 0.75rem; color: #ef4444; margin-top: 4px; font-family: 'Inter', sans-serif; }
                /* ... (reste des styles identiques) ... */
                .inscription-header-hero { position: relative; text-align: center; min-height: 550px; overflow: hidden; display: flex; align-items: center; justify-content: center; }
                .hero-background { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
                .hero-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(135deg, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.5) 100%); z-index: 1; }
                .hero-content { position: relative; z-index: 2; padding: 140px 70px; }
                .inscription-titre { text-shadow: 2px 2px 30px rgba(0, 0, 0, 0.5); font-size: 4rem; font-weight: bold; font-family: 'Georgia', 'Times New Roman', serif; color: #fff; margin: 0 0 16px 0; }
                .hero-subtitle { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 1.2rem; color: rgba(255, 255, 255, 0.9); margin: 0; }
                .inscription-section { padding: 80px 24px; background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%); }
                .inscription-container { max-width: 800px; margin: 0 auto; }
                .inscription-header { text-align: center; margin-bottom: 48px; }
                .inscription-badge { display: inline-block; font-family: 'Inter', sans-serif; font-size: 0.75rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #f97316; background: rgba(249, 115, 22, 0.1); padding: 8px 20px; border-radius: 40px; margin-bottom: 24px; }
                .inscription-title { font-family: 'Georgia', serif; font-size: clamp(2rem, 4vw, 2.5rem); color: #0f172a; margin: 0 0 24px 0; }
                .inscription-line { width: 60px; height: 3px; background: linear-gradient(90deg, #f97316, #1e3a8a); margin: 0 auto; border-radius: 2px; }
                .inscription-form { background: #ffffff; padding: 48px; border-radius: 24px; box-shadow: 0 20px 35px -12px rgba(0, 0, 0, 0.08); }
                .form-section { margin-bottom: 32px; padding-bottom: 32px; border-bottom: 1px solid #eef2ff; }
                .form-section:last-of-type { border-bottom: none; padding-bottom: 0; }
                .form-section-title { display: flex; align-items: center; gap: 12px; font-family: 'Inter', sans-serif; font-size: 1.1rem; font-weight: 600; color: #0f172a; margin: 0 0 24px 0; padding-bottom: 12px; border-bottom: 2px solid #fef3e8; }
                .form-section-title svg { color: #f97316; }
                .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 24px; }
                .form-field { display: flex; flex-direction: column; gap: 8px; }
                .form-field label { font-family: 'Inter', sans-serif; font-size: 0.85rem; font-weight: 500; color: #334155; }
                .required { color: #f97316; }
                .input-wrapper { position: relative; display: flex; align-items: center; }
                .input-icon { position: absolute; left: 14px; color: #94a3b8; pointer-events: none; z-index: 1; }
                .form-field input, .form-field select, .form-field textarea { width: 100%; padding: 14px 16px 14px 44px; border: 2px solid #e2e8f0; border-radius: 12px; font-family: 'Inter', sans-serif; font-size: 0.95rem; color: #0f172a; background: #ffffff; outline: none; transition: all 0.2s ease; }
                .form-field select.fixed-select { background-color: #f8fafc; cursor: not-allowed; color: #64748b; }
                .form-field textarea { padding: 14px 16px; resize: vertical; }
                .form-field input:focus, .form-field select:focus, .form-field textarea:focus { border-color: #f97316; box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1); }
                .form-field input::placeholder, .form-field textarea::placeholder { color: #cbd5e1; }
                .checkbox-group, .radio-group { display: flex; flex-wrap: wrap; gap: 12px; padding: 8px 0; }
                .checkbox-label, .radio-label { display: flex; align-items: center; gap: 8px; font-family: 'Inter', sans-serif; font-size: 0.9rem; color: #334155; cursor: pointer; user-select: none; }
                .checkbox-label input, .radio-label input { position: absolute; opacity: 0; cursor: pointer; }
                .checkbox-custom, .radio-custom { width: 20px; height: 20px; border: 2px solid #e2e8f0; border-radius: 4px; background: #fff; transition: all 0.2s ease; flex-shrink: 0; }
                .radio-custom { border-radius: 50%; }
                .checkbox-label input:checked ~ .checkbox-custom, .radio-label input:checked ~ .radio-custom { background: #f97316; border-color: #f97316; }
                .checkbox-custom::after { content: ""; position: absolute; display: none; left: 6px; top: 2px; width: 5px; height: 10px; border: solid white; border-width: 0 2px 2px 0; transform: rotate(45deg); }
                .checkbox-label input:checked ~ .checkbox-custom::after { display: block; }
                .radio-custom::after { content: ""; position: absolute; display: none; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 10px; height: 10px; border-radius: 50%; background: white; }
                .radio-label input:checked ~ .radio-custom::after { display: block; }
                .file-upload-wrapper { position: relative; display: flex; align-items: center; gap: 12px; }
                .file-input { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); border: 0; }
                .file-label { display: inline-flex; align-items: center; gap: 8px; padding: 10px 16px; background: #f1f5f9; border: 2px solid #e2e8f0; border-radius: 10px; font-family: 'Inter', sans-serif; font-size: 0.85rem; color: #334155; cursor: pointer; transition: all 0.2s ease; }
                .file-label:hover { border-color: #f97316; background: #fff7ed; }
                .file-name { font-family: 'Inter', sans-serif; font-size: 0.85rem; color: #64748b; flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
                .sub-field { margin-top: 16px; padding-left: 32px; border-left: 2px solid #fef3e8; }
                .sub-field input { padding-left: 16px !important; }
                .inscription-submit { display: flex; align-items: center; justify-content: center; gap: 12px; width: 100%; padding: 16px 32px; background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); color: #fff; border: none; border-radius: 12px; font-family: 'Inter', sans-serif; font-size: 1rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease; margin-top: 16px; }
                .inscription-submit:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(249, 115, 22, 0.3); }
                .inscription-submit:disabled { opacity: 0.7; cursor: not-allowed; }
                .spinner { width: 20px; height: 20px; border: 2px solid rgba(255,255,255,0.3); border-top-color: #fff; border-radius: 50%; animation: spin 0.8s linear infinite; }
                @keyframes spin { to { transform: rotate(360deg); } }
                .form-footer { font-family: 'Inter', sans-serif; font-size: 0.75rem; color: #94a3b8; text-align: center; margin-top: 24px; line-height: 1.5; }
                .inscription-success { background: #fff; padding: 60px 40px; border-radius: 24px; box-shadow: 0 20px 35px -12px rgba(0,0,0,0.08); text-align: center; }
                .success-icon { width: 80px; height: 80px; background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; color: #059669; }
                .inscription-success h3 { font-family: 'Georgia', serif; font-size: 1.5rem; color: #0f172a; margin: 0 0 12px 0; }
                .inscription-success p { font-family: 'Inter', sans-serif; color: #64748b; margin: 0; }
                .success-info { margin-top: 24px; padding-top: 24px; border-top: 1px solid #eef2ff; }
                @media (max-width: 768px) { .inscription-header-hero { min-height: 450px; } .hero-content { padding: 100px 20px; } .inscription-titre { font-size: 2.5rem; } .inscription-form { padding: 32px 24px; } .form-row { grid-template-columns: 1fr; } .checkbox-group, .radio-group { flex-direction: column; } .file-upload-wrapper { flex-direction: column; align-items: flex-start; } }
            `}</style>
        </>
    );
};

export default JoinUs;