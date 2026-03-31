import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2, Trash2 } from 'lucide-react';

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

  // Couleurs chaleureuses et humaines
  const theme = {
    primary: '#219ebc',        // Bleu turquoise apaisant
    primaryLight: '#8ecae6',   // Bleu clair
    secondary: '#ffb703',      // Jaune chaleureux
    accent: '#fb8500',         // Orange amical
    background: '#fefae0',     // Crème chaud
    surface: '#ffffff',
    text: '#1a1a2e',           // Bleu nuit doux
    textLight: '#4a5568',
    botBubble: '#e0f4f8',      // Bleu très clair
    userBubble: '#219ebc',
    border: '#d4e9ed'
  };

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

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

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
        const botMessage = {
          id: Date.now() + 1,
          role: 'assistant',
          content: data.data.response,
          timestamp: new Date().toISOString()
        };
        setMessages(prev => [...prev, botMessage]);
      } else {
        throw new Error(data.error || 'Réponse invalide');
      }
    } catch (error) {
      const errorMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: "Oups ! 😅 Je rencontre un petit souci technique. Pouvez-vous réessayer dans un instant ?",
        timestamp: new Date().toISOString(),
        isError: true
      };
      setMessages(prev => [...prev, errorMessage]);
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
    const date = new Date(timestamp);
    return date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  };

  if (!isOpen) {
    return (
      <button
        onClick={handleToggle}
        className="chat-float-btn"
        aria-label="Ouvrir le chat"
      >
        <div className="chat-float-pulse" />
        {/* <MessageCircle size={28} strokeWidth={2.5} /> */}
        <img src="/Logo Atome-AR-FR+Slogan-Final.png" alt="Logo" width={45} height={45}/>

        <span className="chat-float-tooltip">Besoin d'aide ?</span>

        <style jsx>{`
          .chat-float-btn {
            position: fixed;
            bottom: 24px;
            right: 24px;
            width: 64px;
            height: 64px;
            border-radius: 50%;
            // background: linear-gradient(135deg, #219ebc 0%, #126782 100%);
            background-color: #fff;
            border: none;
            color: #1a1a2e;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            // box-shadow: 
            //   0 4px 20px rgba(33, 158, 188, 0.4),
            //   0 8px 30px rgba(33, 158, 188, 0.2);
            transition: all 0.3s ease;
            z-index: 9999;
            border: 2px dashed #1a1a2e;
            // animation: chat-bounce 2s ease infinite;
          }

          .chat-float-btn:hover {
            transform: scale(1.1) rotate(5deg);
            // box-shadow: 
            //   0 6px 30px rgba(33, 158, 188, 0.5),
            //   0 12px 40px rgba(33, 158, 188, 0.3);
          }

          .chat-float-pulse {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 2px dashed #1a1a2e;

            // background: rgba(33, 158, 188, 0.3);
            animation: pulse-ring 2s ease-out infinite;
          }

          @keyframes pulse-ring {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(1.3); opacity: 0;  }
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
      </button>
    );
  }

  return (
    <div className="chat-widget">
      {/* Overlay */}
      <div className="chat-overlay" onClick={handleToggle} />
      
      {/* Fenêtre de chat */}
      <div className="chat-window">
        {/* Header */}
        <div className="chat-header">
          <div className="chat-header-info">
            <div className="chat-avatar">
              {/* <Bot size={22} /> */}
                      <img src="/Logo Atome-AR-FR+Slogan-Final.png" alt="Logo" width={30} height={30}/>

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
                {msg.role === 'user' ? <User size={14} /> :<Bot size={14}/> 
                // <img src="/Logo Atome-AR-FR+Slogan-Final.png" alt="Logo" width={20} height={20} />
                }
              </div>
              <div className="message-content">
                <div className={`message-bubble ${msg.isError ? 'error' : ''}`}>
                  {msg.content}
                </div>
                <span className="message-time">{formatTime(msg.timestamp)}</span>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="chat-message bot">
              <div className="message-avatar">
                <Bot size={14} />
              </div>
              <div className="typing-indicator">
                <span />
                <span />
                <span />
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
            {isLoading ? (
              <Loader2 size={20} className="spin" />
            ) : (
              <Send size={20} />
            )}
          </button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes messageSlide {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes typingBounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-4px); }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      <style jsx>{`
        .chat-widget {
          position: fixed;
          bottom: 0;
          right: 0;
          z-index: 9999;
          font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        }

        // .chat-overlay {
        //   position: fixed;
        //   inset: 0;
        //   background: rgba(26, 26, 46, 0.2);
        //   backdrop-filter: blur(4px);
        //   animation: fadeIn 0.3s ease;
        // }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .chat-window {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 400px;
          height: 550px;
          background: #ffffffff;
          border-radius: 8px;
          border: 2px dashed #1a1a2e;
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.25),
            0 0 0 1px rgba(255, 255, 255, 0.5) inset;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Header */
        .chat-header {
          background: linear-gradient(135deg, #b7b7b7ff 0%, #aaa9a9ff 100%);
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        //   border-bottom: 2px solid #1a1a2e;
          gap: 12px;
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
          background: rgba(255, 255, 255, 1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          position: relative;
          backdrop-filter: blur(10px);
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
          margin: 0 0 2px 0;
        }

        .chat-header-text span {
          color: rgba(255, 255, 255, 0.85);
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
          background: rgba(255, 255, 255, 0.15);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .chat-icon-btn:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: scale(1.05);
        }

        /* Messages */
        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .chat-message {
          display: flex;
          gap: 10px;
          max-width: 85%;
          animation: messageSlide 0.3s ease-out;
        }

        .chat-message.user {
          align-self: flex-end;
          flex-direction: row-reverse;
        }

        .message-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 12px;
        }

        .chat-message.bot .message-avatar {
          background: #fafafaff;
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
        }

        .message-bubble {
          padding: 14px 18px;
          border-radius: 20px;
          font-size: 14px;
          line-height: 1.6;
          color: #1a1a2e;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .chat-message.bot .message-bubble {
          background: #e0f4f8;
          border-bottom-left-radius: 6px;
        }

        .chat-message.user .message-bubble {
          background: #219ebc;
          color: white;
          border-bottom-right-radius: 6px;
        }

        .message-bubble.error {
          background: #fee2e2;
          color: #991b1b;
        }

        .message-time {
          font-size: 11px;
          color: #6b7280;
          padding: 0 4px;
        }

        .chat-message.user .message-time {
          text-align: right;
        }

        /* Typing indicator */
        .typing-indicator {
          display: flex;
          gap: 6px;
          padding: 18px 16px;
          background: #e0f4f8;
          border-radius: 20px;
          border-bottom-left-radius: 6px;
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

        /* Input area */
        .chat-input-area {
          padding: 16px 20px 20px;
          background: white;
          border-top: 1px solid #e5e7eb;
          display: flex;
          gap: 12px;
          align-items: flex-end;
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
          box-shadow: 0 0 0 3px rgba(33, 158, 188, 0.1);
        }

        .chat-input-wrapper textarea {
          width: 100%;
          padding: 12px 16px;
          border: none;
          background: transparent;
          font-size: 14px;
          color: #1a1a2e;
          outline: none;
          resize: none;
          min-height: 44px;
          max-height: 120px;
          font-family: inherit;
        }

        .chat-input-wrapper textarea::placeholder {
          color: #9ca3af;
        }

        .chat-send-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #fb8500 0%, #f7931e 100%);
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          box-shadow: 0 4px 15px rgba(251, 133, 0, 0.3);
        }

        .chat-send-btn:hover:not(:disabled) {
          transform: scale(1.05);
        }

        .chat-send-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }

        .spin {
          animation: spin 1s linear infinite;
        }

        /* Responsive */
        @media (max-width: 480px) {
          .chat-window {
            position: fixed;
            inset: 0;
            width: 100%;
            height: 100%;
            border-radius: 0;
            bottom: 0;
            right: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ChatbotWidget;