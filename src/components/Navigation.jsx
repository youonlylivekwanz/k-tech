import React, { useState } from 'react';

export default function Navigation() {
  const [copied, setCopied] = useState(false);
  const email = "kwanelem@gmail.com";

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <header 
      className="glass-header"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        width: '100%',
      }}
    >
      <div 
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '76px',
        }}
      >
        {/* Brand Logo (Gertix Studio style with slash) */}
        <a 
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '1.15rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            color: 'var(--text-primary)',
            textTransform: 'uppercase',
          }}>
            K Tech
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '3px 8px',
            border: 'var(--border-style)',
            background: 'rgba(255, 255, 255, 0.9)',
          }}>
            <span className="status-beacon" />
            <span style={{
              fontSize: '0.68rem',
              fontFamily: 'var(--font-mono)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--text-secondary)',
            }}>
              Available
            </span>
          </div>
        </a>

        {/* Center: Numbered Links */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '36px',
        }}>
          <a 
            href="#home"
            style={{
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.target.style.color = 'var(--accent-primary)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
          >
            01 Home
          </a>

          <a 
            href="#portfolio"
            style={{
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.target.style.color = 'var(--accent-primary)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
          >
            02 Portfolio
          </a>

          <a 
            href="#services"
            style={{
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.target.style.color = 'var(--accent-primary)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
          >
            03 Services
          </a>

          <a 
            href="#contact"
            style={{
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.target.style.color = 'var(--accent-primary)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
          >
            04 Contact
          </a>
        </nav>

        {/* Right: Sharp rectangular action button */}
        <div>
          <button
            onClick={handleCopyEmail}
            className="cb-btn"
            style={{
              padding: '10px 20px',
              fontSize: '0.78rem',
            }}
          >
            {copied ? (
              <>
                <span>✓ Copied</span>
              </>
            ) : (
              <>
                <span>Get In Touch</span>
                <span>→</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
