import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, Loader2, Trash2 } from 'lucide-react';

// ──────────────────────────────────────────────────────────────
// MARKDOWN PARSER — converti le Markdown en HTML propre
// Gère : titres, gras, italique, code inline, blocs de code,
//        listes (ul/ol), tableaux, liens, séparateurs
// ──────────────────────────────────────────────────────────────
const parseMarkdown = (text) => {
  if (!text) return '';

  // Escape HTML de base (sécurité)
  const escape = (str) =>
    str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

  let html = '';
  const lines = text.split('\n');
  let i = 0;

  const processInline = (str) => {
    return escape(str)
      // Gras + italique
      .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>')
      // Gras
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/__(.*?)__/g, '<strong>$1</strong>')
      // Italique
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/_(.*?)_/g, '<em>$1</em>')
      // Barré
      .replace(/~~(.*?)~~/g, '<del>$1</del>')
      // Code inline
      .replace(/`([^`]+)`/g, '<code style="background:#f1f5f9;color:#0f172a;padding:2px 6px;border-radius:4px;font-family:monospace;font-size:13px;">$1</code>')
      // Liens
      .replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color:#219ebc;text-decoration:underline;">$1</a>');
  };

  while (i < lines.length) {
    const line = lines[i];

    // Bloc de code (```)
    if (line.trimStart().startsWith('```')) {
      const lang = line.trim().slice(3).trim();
      i++;
      let codeLines = [];
      while (i < lines.length && !lines[i].trimStart().startsWith('```')) {
        codeLines.push(escape(lines[i]));
        i++;
      }
      i++; // sauter la ligne fermante ```
      html += `<div style="margin:8px 0;background:#0f172a;border-radius:8px;overflow:hidden;">`;
      if (lang) {
        html += `<div style="padding:6px 14px;background:#1e293b;color:#94a3b8;font-size:11px;font-family:monospace;letter-spacing:0.05em;">${escape(lang)}</div>`;
      }
      html += `<pre style="margin:0;padding:14px;overflow-x:auto;font-family:monospace;font-size:13px;line-height:1.6;color:#e2e8f0;white-space:pre;">${codeLines.join('\n')}</pre></div>`;
      continue;
    }

    // Tableau
    if (line.includes('|') && i + 1 < lines.length && lines[i + 1].match(/^\|?[\s\-\|]+\|?$/)) {
      const headers = line.split('|').map(c => c.trim()).filter(c => c !== '');
      i += 2; // sauter ligne de séparation
      let rows = [];
      while (i < lines.length && lines[i].includes('|')) {
        const cells = lines[i].split('|').map(c => c.trim()).filter(c => c !== '');
        rows.push(cells);
        i++;
      }
      html += `<div style="overflow-x:auto;margin:8px 0;"><table style="border-collapse:collapse;width:100%;font-size:13px;">`;
      html += `<thead><tr>${headers.map(h => `<th style="padding:8px 12px;background:#e0f4f8;color:#1a1a2e;border:1px solid #b7e3ee;text-align:left;font-weight:600;">${processInline(h)}</th>`).join('')}</tr></thead>`;
      html += `<tbody>${rows.map((row, ri) => `<tr style="background:${ri % 2 === 0 ? '#ffffff' : '#f8fbfc'};">${row.map(cell => `<td style="padding:8px 12px;border:1px solid #d4e9ed;color:#1a1a2e;">${processInline(cell)}</td>`).join('')}</tr>`).join('')}</tbody>`;
      html += `</table></div>`;
      continue;
    }

    // Titres
    const headingMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const sizes = ['20px', '18px', '16px', '15px', '14px', '13px'];
      html += `<h${level} style="margin:10px 0 6px;font-size:${sizes[level - 1]};font-weight:600;color:#1a1a2e;line-height:1.3;">${processInline(headingMatch[2])}</h${level}>`;
      i++;
      continue;
    }

    // Liste à puces
    if (line.match(/^[\s]*[-*+]\s+/)) {
      html += '<ul style="margin:6px 0;padding-left:20px;list-style:disc;">';
      while (i < lines.length && lines[i].match(/^[\s]*[-*+]\s+/)) {
        const content = lines[i].replace(/^[\s]*[-*+]\s+/, '');
        const indent = lines[i].match(/^(\s*)/)[1].length;
        html += `<li style="margin:3px 0;font-size:14px;color:#1a1a2e;padding-left:${indent > 0 ? 8 : 0}px;">${processInline(content)}</li>`;
        i++;
      }
      html += '</ul>';
      continue;
    }

    // Liste numérotée
    if (line.match(/^[\s]*\d+\.\s+/)) {
      html += '<ol style="margin:6px 0;padding-left:20px;list-style:decimal;">';
      while (i < lines.length && lines[i].match(/^[\s]*\d+\.\s+/)) {
        const content = lines[i].replace(/^[\s]*\d+\.\s+/, '');
        html += `<li style="margin:3px 0;font-size:14px;color:#1a1a2e;">${processInline(content)}</li>`;
        i++;
      }
      html += '</ol>';
      continue;
    }

    // Blockquote
    if (line.startsWith('> ')) {
      html += `<blockquote style="margin:6px 0;padding:8px 14px;border-left:3px solid #219ebc;background:#f0f9ff;color:#475569;font-style:italic;border-radius:0 6px 6px 0;">${processInline(line.slice(2))}</blockquote>`;
      i++;
      continue;
    }

    // Séparateur
    if (line.match(/^[-*_]{3,}$/)) {
      html += '<hr style="border:none;border-top:1px solid #e2e8f0;margin:10px 0;">';
      i++;
      continue;
    }

    // Ligne vide
    if (line.trim() === '') {
      html += '<br>';
      i++;
      continue;
    }

    // Paragraphe normal
    html += `<p style="margin:4px 0;font-size:14px;line-height:1.6;color:#1a1a2e;">${processInline(line)}</p>`;
    i++;
  }

  return html;
};

// ──────────────────────────────────────────────────────────────
// COMPONENT
// ──────────────────────────────────────────────────────────────
const ChatbotWidget = ({
  apiUrl = "http://localhost:3300/chatbot",
  systemPrompt = "Tu es un assistant chaleureux et bienveillant d'une école. Tu réponds avec empathie et simplicité.",
  placeholder = "Écrivez votre message...",
  welcomeMessage = "Bonjour ! 😊 Je suis là pour vous aider avec vos questions sur notre école. N'hésitez pas !",
  userId = "anonymous"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        id: Date.now(),
        role: 'assistant',
        content: welcomeMessage,
        timestamp: new Date().toISOString()
      }]);
    }
  }, [isOpen, welcomeMessage, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    const history = messages.map(msg => ({
      role: msg.role,
      content: msg.content
    }));

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage.content,
          history,
          system_prompt: systemPrompt,
          temperature: 0.7,
          max_tokens: 2048,
          user_id: userId
        })
      });

      if (!response.ok) throw new Error(`Erreur HTTP: ${response.status}`);

      const data = await response.json();

      if (data.success && data.data?.response) {
        setMessages(prev => [...prev, {
          id: Date.now() + 1,
          role: 'assistant',
          content: data.data.response,
          timestamp: new Date().toISOString()
        }]);
      } else {
        throw new Error(data.error || 'Réponse invalide');
      }
    } catch {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        role: 'assistant',
        content: "Oups ! 😅 Je rencontre un petit souci technique. Pouvez-vous réessayer dans un instant ?",
        timestamp: new Date().toISOString(),
        isError: true
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClear = () => {
    setMessages([{
      id: Date.now(),
      role: 'assistant',
      content: welcomeMessage,
      timestamp: new Date().toISOString()
    }]);
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  };

  // ── Bulle de message avec rendu Markdown ──
  const MessageBubble = ({ msg }) => {
    const isUser = msg.role === 'user';

    if (isUser) {
      // Messages utilisateur : texte simple (pas de Markdown)
      return (
        <div className="message-bubble user-bubble">
          {msg.content}
        </div>
      );
    }

    // Messages bot : rendu Markdown
    return (
      <div
        className={`message-bubble bot-bubble ${msg.isError ? 'error-bubble' : ''}`}
        dangerouslySetInnerHTML={{ __html: parseMarkdown(msg.content) }}
      />
    );
  };

  // ──────────────────────────────────────────────────────────────
  // BOUTON FLOTTANT
  // ──────────────────────────────────────────────────────────────
  if (!isOpen) {
    return (
      <>
        <button onClick={handleToggle} className="chat-float-btn" aria-label="Ouvrir le chat">
          <div className="chat-float-pulse" />
          <img src="/Logo Atome-AR-FR+Slogan-Final.png" alt="Logo" width={45} height={45} />
          <span className="chat-float-tooltip">Besoin d'aide ?</span>
        </button>

        <style>{`
          .chat-float-btn {
            position: fixed;
            bottom: 24px;
            right: 24px;
            width: 64px;
            height: 64px;
            border-radius: 50%;
            background-color: #fff;
            border: 2px dashed #1a1a2e;
            color: #1a1a2e;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            z-index: 9999;
          }
          .chat-float-btn:hover {
            transform: scale(1.1) rotate(5deg);
          }
          .chat-float-pulse {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 2px dashed #1a1a2e;
            animation: pulse-ring 2s ease-out infinite;
          }
          @keyframes pulse-ring {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(1.3); opacity: 0; }
          }
          .chat-float-tooltip {
            position: absolute;
            right: 80px;
            background: #1a1a2e;
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 13px;
            font-family: 'Segoe UI', sans-serif;
            white-space: nowrap;
            opacity: 0;
            transform: translateX(10px);
            transition: all 0.3s ease;
            pointer-events: none;
          }
          .chat-float-btn:hover .chat-float-tooltip {
            opacity: 1;
            transform: translateX(0);
          }
        `}</style>
      </>
    );
  }

  // ──────────────────────────────────────────────────────────────
  // FENÊTRE DE CHAT
  // ──────────────────────────────────────────────────────────────
  return (
    <div className="chat-widget">
      <div className="chat-window">

        {/* Header */}
        <div className="chat-header">
          <div className="chat-header-info">
            <div className="chat-avatar">
              <img src="/Logo Atome-AR-FR+Slogan-Final.png" alt="Logo" width={30} height={30} />
              <span className="chat-status-dot" />
            </div>
            <div className="chat-header-text">
              <h3>L'Atome Bot</h3>
              <span>En ligne • Répond en quelques secondes</span>
            </div>
          </div>
          <div className="chat-header-actions">
            <button onClick={handleClear} className="chat-icon-btn" title="Nouvelle conversation">
              <Trash2 size={16} />
            </button>
            <button onClick={handleToggle} className="chat-icon-btn" title="Fermer">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div
              key={msg.id}
              className={`chat-message ${msg.role === 'user' ? 'user' : 'bot'}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="message-avatar">
                {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
              </div>
              <div className="message-content">
                <MessageBubble msg={msg} />
                <span className="message-time">{formatTime(msg.timestamp)}</span>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="chat-message bot">
              <div className="message-avatar bot-avatar-icon">
                <Bot size={14} />
              </div>
              <div className="typing-indicator">
                <span /><span /><span />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="chat-input-area">
          <div className="chat-input-wrapper">
            <textarea
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={placeholder}
              rows={1}
              disabled={isLoading}
            />
          </div>
          <button
            onClick={handleSend}
            disabled={!inputValue.trim() || isLoading}
            className="chat-send-btn"
          >
            {isLoading ? <Loader2 size={20} className="spin" /> : <Send size={20} />}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes messageSlide {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes typingBounce {
          0%, 60%, 100% { transform: translateY(0); }
          30%            { transform: translateY(-4px); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .chat-widget {
          position: fixed;
          bottom: 0;
          right: 0;
          z-index: 9999;
          font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        }

        .chat-window {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 420px;
          height: 580px;
          background: #ffffff;
          border-radius: 8px;
          border: 2px dashed #1a1a2e;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* Header */
        .chat-header {
          background: linear-gradient(135deg, #b7b7b7 0%, #aaa9a9 100%);
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-shrink: 0;
        }
        .chat-header-info {
          display: flex;
          align-items: center;
          gap: 14px;
          flex: 1;
        }
        .chat-avatar {
          width: 44px;
          height: 44px;
          background: rgba(255,255,255,1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .chat-status-dot {
          position: absolute;
          bottom: 2px;
          right: 2px;
          width: 12px;
          height: 12px;
          background: #90EE90;
          border: 2px solid #219ebc;
          border-radius: 50%;
        }
        .chat-header-text h3 {
          color: white;
          font-size: 16px;
          font-weight: 600;
          margin: 0 0 2px;
        }
        .chat-header-text span {
          color: rgba(255,255,255,0.85);
          font-size: 12px;
        }
        .chat-header-actions {
          display: flex;
          gap: 8px;
        }
        .chat-icon-btn {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          border: none;
          background: rgba(255,255,255,0.15);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        .chat-icon-btn:hover {
          background: rgba(255,255,255,0.25);
          transform: scale(1.05);
        }

        /* Messages */
        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .chat-message {
          display: flex;
          gap: 10px;
          max-width: 90%;
          animation: messageSlide 0.3s ease-out;
        }
        .chat-message.user {
          align-self: flex-end;
          flex-direction: row-reverse;
        }
        .chat-message.bot {
          align-self: flex-start;
        }
        .message-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 4px;
        }
        .chat-message.bot .message-avatar {
          background: #fafafa;
          color: #1a1a2e;
          border: 1px solid #1a1a2e;
        }
        .chat-message.user .message-avatar {
          background: #fb8500;
          color: white;
        }
        .message-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 0;
        }

        /* Bulles */
        .message-bubble {
          padding: 12px 16px;
          border-radius: 18px;
          font-size: 14px;
          line-height: 1.6;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          word-break: break-word;
          overflow-wrap: break-word;
        }
        .bot-bubble {
          background: #e0f4f8;
          border-bottom-left-radius: 4px;
          color: #1a1a2e;
          /* Styles pour les éléments Markdown rendus dans la bulle bot */
        }
        /* Reset des marges pour le premier et dernier enfant dans la bulle */
        .bot-bubble > *:first-child { margin-top: 0 !important; }
        .bot-bubble > *:last-child  { margin-bottom: 0 !important; }
        /* Surcharge des <br> consécutifs */
        .bot-bubble br + br { display: none; }

        .user-bubble {
          background: #219ebc;
          color: white;
          border-bottom-right-radius: 4px;
          white-space: pre-wrap;
        }
        .error-bubble {
          background: #fee2e2 !important;
          color: #991b1b !important;
        }

        .message-time {
          font-size: 11px;
          color: #6b7280;
          padding: 0 4px;
        }
        .chat-message.user .message-time {
          text-align: right;
        }

        /* Typing */
        .typing-indicator {
          display: flex;
          gap: 6px;
          padding: 16px 14px;
          background: #e0f4f8;
          border-radius: 18px;
          border-bottom-left-radius: 4px;
          align-items: center;
        }
        .typing-indicator span {
          width: 8px;
          height: 8px;
          background: #219ebc;
          border-radius: 50%;
          animation: typingBounce 1.4s infinite ease-in-out;
        }
        .typing-indicator span:nth-child(1) { animation-delay: 0ms; }
        .typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
        .typing-indicator span:nth-child(3) { animation-delay: 0.4s; }

        /* Input */
        .chat-input-area {
          padding: 14px 18px 18px;
          background: white;
          border-top: 1px solid #e5e7eb;
          display: flex;
          gap: 10px;
          align-items: flex-end;
          flex-shrink: 0;
        }
        .chat-input-wrapper {
          flex: 1;
          background: #f3f4f6;
          border-radius: 24px;
          padding: 4px;
          transition: all 0.2s ease;
        }
        .chat-input-wrapper:focus-within {
          background: #e0f4f8;
          box-shadow: 0 0 0 3px rgba(33,158,188,0.1);
        }
        .chat-input-wrapper textarea {
          width: 100%;
          padding: 10px 14px;
          border: none;
          background: transparent;
          font-size: 14px;
          color: #1a1a2e;
          outline: none;
          resize: none;
          min-height: 40px;
          max-height: 120px;
          font-family: inherit;
          box-sizing: border-box;
        }
        .chat-input-wrapper textarea::placeholder {
          color: #9ca3af;
        }
        .chat-send-btn {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: linear-gradient(135deg, #fb8500 0%, #f7931e 100%);
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          box-shadow: 0 4px 15px rgba(251,133,0,0.3);
          flex-shrink: 0;
        }
        .chat-send-btn:hover:not(:disabled) {
          transform: scale(1.05);
        }
        .chat-send-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .spin {
          animation: spin 1s linear infinite;
        }

        /* Responsive mobile */
        @media (max-width: 480px) {
          .chat-window {
            position: fixed;
            inset: 0;
            width: 100%;
            height: 100%;
            border-radius: 0;
            border: none;
          }
        }
      `}</style>
    </div>
  );
};

export default ChatbotWidget;