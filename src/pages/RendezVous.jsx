import { useState } from "react";

const DAYS = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
const HOURS = [
  "09:00", "09:15", "09:30", "09:45",
  "10:00", "10:15", "10:30", "10:45",
  "11:00", "11:15", "11:30", "11:45",
  "14:00", "14:15", "14:30", "14:45",
  "15:00", "15:15", "15:30", "15:45",
  "16:00", "16:15", "16:30", "16:45",
];

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

const MONTH_NAMES_FR = [
  "Janvier","Février","Mars","Avril","Mai","Juin",
  "Juillet","Août","Septembre","Octobre","Novembre","Décembre"
];

export default function RendezVous() {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState("calendar"); // "calendar" | "hours" | "form"
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [form, setForm] = useState({
    nom: "", email: "", invites: "", telephone: "", message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const firstDayAdj = firstDay === 0 ? 6 : firstDay - 1;
  const today = new Date();

  const handleDayClick = (day) => {
    const clicked = new Date(year, month, day);
    if (clicked < new Date(today.getFullYear(), today.getMonth(), today.getDate())) return;
    setSelectedDay({ day, month, year });
    setStep("hours");
  };

  const handleHourClick = (hour) => {
    setSelectedHour(hour);
  };

  const handleNext = () => {
    if (step === "hours" && selectedHour) {
      setStep("form");
    }
  };

  const handleBack = () => {
    if (step === "hours") { setStep("calendar"); setSelectedHour(null); }
    if (step === "form") { setStep("hours"); }
  };

  const handleSubmit = () => {
    if (!form.nom || !form.email || !form.telephone) return;
    setSubmitted(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setTimeout(() => {
      setStep("calendar");
      setSelectedDay(null);
      setSelectedHour(null);
      setForm({ nom: "", email: "", invites: "", telephone: "", message: "" });
      setSubmitted(false);
    }, 300);
  };

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
    setSelectedDay(null);
    setStep("calendar");
  };
  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
    setSelectedDay(null);
    setStep("calendar");
  };

  const isDisabled = (day) => {
    return new Date(year, month, day) < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  };

  return (
    <>
      <style>{`

        .rdv-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          background: #faf9f7;
        }

        .rdv-map-container {
          width: 100%;
          height: 420px;
          position: relative;
          overflow: hidden;
        }

        .rdv-map-container iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }

        .rdv-btn-bar {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 28px 0;
        }

        .rdv-btn {
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: #f97316;
          color: #fff;
          border: none;
          padding: 16px 48px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: background 0.3s, transform 0.15s;
          clip-path: polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%);
        }

        .rdv-btn:hover {
          background: #b8683d;
          transform: scale(1.03);
        }

        /* OVERLAY */
        .rdv-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10,10,10,0.65);
          backdrop-filter: blur(4px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.25s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* MODAL */
        .rdv-modal {
          background: #fff;
          width: 880px;
          max-width: 97vw;
          max-height: 92vh;
          display: flex;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 32px 80px rgba(0,0,0,0.28);
          animation: slideUp 0.3s cubic-bezier(0.16,1,0.3,1);
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* LEFT PANEL */
        .rdv-left {
          width: 260px;
          min-width: 220px;
          background: white;
          color: #000;
          border-right:1px solid #cecece;
          padding: 40px 28px 32px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          position: relative;
          overflow: hidden;
        }

        .rdv-left::before {
          content: '';
          position: absolute;
          top: -60px; right: -60px;
          width: 200px; height: 200px;
          background: radial-gradient(circle, #f9731622 0%, transparent 70%);
          pointer-events: none;
        }

        .rdv-left-logo {
          font-size: 22px;
          font-weight: 700;
          color: #f97316;
          line-height: 1.2;
        }

        .rdv-left-divider {
          width: 40px;
          height: 2px;
          background: #f97316;
          border-radius: 2px;
        }

        .rdv-left-title {
          font-size: 17px;
          font-weight: 600;
          color: #000;
          line-height: 1.4;
        }

        .rdv-left-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #f9731622;
          border: 1px solid #f9731655;
          color: #f97316;
          font-size: 12px;
          padding: 5px 12px;
          border-radius: 20px;
          width: fit-content;
        }

        .rdv-left-desc {
          font-size: 13px;
          color: #aaa;
          line-height: 1.7;
        }

        .rdv-left-addr {
          font-size: 12px;
          color: #777;
          margin-top: auto;
          line-height: 1.6;
          display: flex;
          align-items: flex-start;
          gap: 6px;
        }

        .rdv-left-addr svg { flex-shrink: 0; margin-top: 2px; }

        .rdv-selected-info {
          background: #f9731618;
          border-left: 3px solid #f97316;
          padding: 10px 12px;
          border-radius: 2px;
          font-size: 13px;
          color: #ddd;
          line-height: 1.6;
        }

        /* RIGHT PANEL */
        .rdv-right {
          flex: 1;
          padding: 36px 32px 28px;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          min-width: 0;
        }

        .rdv-close {
          position: absolute;
          top: 16px; right: 20px;
          background: none;
          border: none;
          cursor: pointer;
          color: #888;
          font-size: 22px;
          line-height: 1;
          z-index: 10;
          transition: color 0.2s;
        }
        .rdv-close:hover { color: #222; }

        /* CALENDAR */
        .rdv-cal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }

        .rdv-cal-title {
          font-size: 18px;
          font-weight: 600;
          color: #1a1a1a;
        }

        .rdv-cal-nav {
          background: none;
          border: 1px solid #e0e0e0;
          width: 32px; height: 32px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #555;
          transition: border-color 0.2s, color 0.2s;
        }
        .rdv-cal-nav:hover { border-color: #f97316; color: #f97316; }

        .rdv-cal-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 4px;
        }

        .rdv-cal-day-header {
          text-align: center;
          font-size: 11px;
          font-weight: 500;
          color: #aaa;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 6px 0;
        }

        .rdv-cal-day {
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          border-radius: 50%;
          cursor: pointer;
          color: #333;
          transition: background 0.15s, color 0.15s;
          border: none;
          background: none;
        }

        .rdv-cal-day:hover:not(.disabled):not(.empty) {
          background: #f5edd8;
          color: #1a1a1a;
        }

        .rdv-cal-day.today {
          font-weight: 700;
          color: #f97316;
        }

        .rdv-cal-day.selected {
          background: #f97316;
          color: #fff;
          font-weight: 600;
        }

        .rdv-cal-day.disabled {
          color: #ddd;
          cursor: not-allowed;
        }

        .rdv-cal-day.empty {
          pointer-events: none;
        }

        /* HOURS */
        .rdv-hours-title {
          font-size: 18px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 8px;
        }

        .rdv-hours-subtitle {
          font-size: 13px;
          color: #888;
          margin-bottom: 24px;
        }

        .rdv-hours-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
          flex: 1;
          align-content: start;
        }

        .rdv-hour-btn {
          border: 1px solid #e8e8e8;
          background: none;
          padding: 10px 6px;
          font-size: 14px;
          color: #444;
          border-radius: 4px;
          cursor: pointer;
          transition: border-color 0.15s, background 0.15s, color 0.15s;
        }

        .rdv-hour-btn:hover {
          border-color: #f97316;
          color: #f97316;
        }

        .rdv-hour-btn.selected {
          background: #f97316;
          border-color: #f97316;
          color: #fff;
          font-weight: 500;
        }

        /* FORM */
        .rdv-form-title {
          font-size: 20px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 24px;
        }

        .rdv-field {
          display: flex;
          flex-direction: column;
          gap: 5px;
          margin-bottom: 16px;
        }

        .rdv-label {
          font-size: 12px;
          font-weight: 500;
          color: #555;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 3px;
        }

        .rdv-label span { color: #f97316; }

        .rdv-input {
          border: 1px solid #e0e0e0;
          padding: 11px 14px;
          font-size: 14px;
          color: #222;
          border-radius: 3px;
          outline: none;
          transition: border-color 0.2s;
          background: #fafaf9;
        }

        .rdv-input:focus { border-color: #f97316; background: #fff; }

        .rdv-phone-row {
          display: flex;
          gap: 0;
        }

        .rdv-phone-prefix {
          border: 1px solid #e0e0e0;
          border-right: none;
          padding: 11px 12px;
          font-size: 14px;
          color: #555;
          background: #f0ede8;
          border-radius: 3px 0 0 3px;
          white-space: nowrap;
        }

        .rdv-phone-input {
          flex: 1;
          border-radius: 0 3px 3px 0;
        }

        .rdv-textarea {
          resize: vertical;
          min-height: 80px;
        }

        /* BOTTOM BAR */
        .rdv-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
          padding-top: 24px;
          border-top: 1px solid #f0f0f0;
          flex-shrink: 0;
        }

        .rdv-back-btn {
          background: none;
          border: none;
          font-size: 14px;
          color: #888;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s;
          padding: 0;
        }
        .rdv-back-btn:hover { color: #333; }

        .rdv-next-btn {
          background: #1a1a1a;
          color: #fff;
          border: none;
          font-size: 14px;
          font-weight: 500;
          padding: 13px 36px;
          cursor: pointer;
          border-radius: 2px;
          transition: background 0.2s;
          letter-spacing: 0.04em;
        }
        .rdv-next-btn:hover:not(:disabled) { background: #f97316; }
        .rdv-next-btn:disabled { opacity: 0.35; cursor: not-allowed; }

        /* SUCCESS */
        .rdv-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex: 1;
          gap: 16px;
          text-align: center;
          padding: 40px 20px;
        }

        .rdv-success-icon {
          width: 64px; height: 64px;
          background: #f97316;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          color: #fff;
        }

        .rdv-success h3 {
          font-size: 22px;
          color: #1a1a1a;
          margin: 0;
        }

        .rdv-success p {
          font-size: 14px;
          color: #888;
          margin: 0;
          line-height: 1.6;
        }

        @media (max-width: 640px) {
          .rdv-modal { flex-direction: column; max-height: 96vh; }
          .rdv-left { width: 100%; min-height: unset; padding: 24px 20px 16px; flex-direction: row; flex-wrap: wrap; gap: 10px; }
          .rdv-left-addr, .rdv-left-desc { display: none; }
          .rdv-right { padding: 20px 16px; }
          .rdv-hours-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>

      <div className="rdv-wrapper">
        {/* MAP */}
        <div className="rdv-map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.1!2d-7.66!3d33.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMxJzQ4LjAiTiA3wrAzOSczNi4wIlc!5e0!3m2!1sfr!2sma!4v1680000000000!5m2!1sfr!2sma&q=Lissasfa,Casablanca"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="L'Atome Lissasfa"
          />
        </div>

        {/* BUTTON BAR */}
        <div className="rdv-btn-bar">
          <button className="rdv-btn" onClick={() => setShowModal(true)}>
            Réservez votre visite
          </button>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="rdv-overlay" onClick={(e) => e.target === e.currentTarget && handleClose()}>
          <div className="rdv-modal">
            {/* LEFT */}
            <div className="rdv-left">
              <div className="rdv-left-logo">L'Atome</div>
              <div className="rdv-left-divider" />
              <div className="rdv-left-title">RDV à L'Atome Lissasfa</div>
              <div className="rdv-left-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                15 min
              </div>
              <div className="rdv-left-desc">
                Bla bla bla — venez découvrir notre espace unique dédié à la créativité et à l'innovation.
              </div>

              {selectedDay && (
                <div className="rdv-selected-info">
                  📅 {selectedDay.day} {MONTH_NAMES_FR[selectedDay.month]} {selectedDay.year}
                  {selectedHour && <><br />🕐 {selectedHour}</>}
                </div>
              )}

              <div className="rdv-left-addr">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                Casablanca 20220
              </div>
            </div>

            {/* RIGHT */}
            <div className="rdv-right" style={{ position: "relative" }}>
              <button className="rdv-close" onClick={handleClose}>✕</button>

              {submitted ? (
                <div className="rdv-success">
                  <div className="rdv-success-icon">✓</div>
                  <h3>Rendez-vous confirmé !</h3>
                  <p>
                    Votre visite est planifiée le {selectedDay?.day} {MONTH_NAMES_FR[selectedDay?.month]} à {selectedHour}.<br />
                    Un e-mail de confirmation vous sera envoyé.
                  </p>
                  <button className="rdv-next-btn" onClick={handleClose}>Fermer</button>
                </div>
              ) : (
                <>
                  {/* CALENDAR */}
                  {step === "calendar" && (
                    <>
                      <div className="rdv-cal-header">
                        <button className="rdv-cal-nav" onClick={prevMonth}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="15 18 9 12 15 6"/>
                          </svg>
                        </button>
                        <div className="rdv-cal-title">{MONTH_NAMES_FR[month]} {year}</div>
                        <button className="rdv-cal-nav" onClick={nextMonth}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="9 18 15 12 9 6"/>
                          </svg>
                        </button>
                      </div>

                      <div className="rdv-cal-grid">
                        {DAYS.map(d => (
                          <div key={d} className="rdv-cal-day-header">{d}</div>
                        ))}
                        {Array(firstDayAdj).fill(null).map((_, i) => (
                          <div key={`e-${i}`} className="rdv-cal-day empty" />
                        ))}
                        {Array(daysInMonth).fill(null).map((_, i) => {
                          const day = i + 1;
                          const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
                          const isSel = selectedDay?.day === day && selectedDay?.month === month && selectedDay?.year === year;
                          const dis = isDisabled(day);
                          return (
                            <button
                              key={day}
                              className={`rdv-cal-day${isToday ? " today" : ""}${isSel ? " selected" : ""}${dis ? " disabled" : ""}`}
                              onClick={() => !dis && handleDayClick(day)}
                            >
                              {day}
                            </button>
                          );
                        })}
                      </div>
                    </>
                  )}

                  {/* HOURS */}
                  {step === "hours" && (
                    <>
                      <div className="rdv-hours-title">Choisissez une heure</div>
                      <div className="rdv-hours-subtitle">
                        {selectedDay?.day} {MONTH_NAMES_FR[selectedDay?.month]} {selectedDay?.year} — Durée : 15 min
                      </div>
                      <div className="rdv-hours-grid">
                        {HOURS.map(h => (
                          <button
                            key={h}
                            className={`rdv-hour-btn${selectedHour === h ? " selected" : ""}`}
                            onClick={() => setSelectedHour(h)}
                          >
                            {h}
                          </button>
                        ))}
                      </div>
                    </>
                  )}

                  {/* FORM */}
                  {step === "form" && (
                    <>
                      <div className="rdv-form-title">Indiquez vos informations</div>

                      <div className="rdv-field">
                        <label className="rdv-label">Nom <span>*</span></label>
                        <input
                          className="rdv-input"
                          placeholder="Votre nom complet"
                          value={form.nom}
                          onChange={e => setForm(f => ({ ...f, nom: e.target.value }))}
                        />
                      </div>

                      <div className="rdv-field">
                        <label className="rdv-label">E-mail <span>*</span></label>
                        <input
                          className="rdv-input"
                          type="email"
                          placeholder="votre@email.com"
                          value={form.email}
                          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        />
                      </div>

                      <div className="rdv-field">
                        <label className="rdv-label">Ajouter des invités</label>
                        <input
                          className="rdv-input"
                          placeholder="email@exemple.com"
                          value={form.invites}
                          onChange={e => setForm(f => ({ ...f, invites: e.target.value }))}
                        />
                      </div>

                      <div className="rdv-field">
                        <label className="rdv-label">Numéro de téléphone <span>*</span></label>
                        <div className="rdv-phone-row">
                          <span className="rdv-phone-prefix">🇲🇦 +212</span>
                          <input
                            className="rdv-input rdv-phone-input"
                            type="tel"
                            placeholder="6 XX XX XX XX"
                            value={form.telephone}
                            onChange={e => setForm(f => ({ ...f, telephone: e.target.value }))}
                          />
                        </div>
                      </div>

                      <div className="rdv-field">
                        <label className="rdv-label">Message</label>
                        <textarea
                          className="rdv-input rdv-textarea"
                          placeholder="Précisez votre demande (optionnel)"
                          value={form.message}
                          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        />
                      </div>
                    </>
                  )}

                  {/* BOTTOM */}
                  <div className="rdv-bottom">
                    {step !== "calendar" ? (
                      <button className="rdv-back-btn" onClick={handleBack}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="15 18 9 12 15 6"/>
                        </svg>
                        Retour
                      </button>
                    ) : <div />}

                    {step === "calendar" && (
                      <div style={{ fontSize: 13, color: "#aaa" }}>Sélectionnez une date</div>
                    )}

                    {step === "hours" && (
                      <button
                        className="rdv-next-btn"
                        disabled={!selectedHour}
                        onClick={handleNext}
                      >
                        Suivant →
                      </button>
                    )}

                    {step === "form" && (
                      <button
                        className="rdv-next-btn"
                        disabled={!form.nom || !form.email || !form.telephone}
                        onClick={handleSubmit}
                      >
                        Confirmer le RDV
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}