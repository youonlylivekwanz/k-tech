import React, { useState } from 'react';

export default function ContactColophon() {
  const [copied, setCopied] = useState(false);
  const email = "kwanelem@gmail.com";
  const phone = "+27 (067) 197-2197";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <footer id="contact" style={{
      position: 'relative',
      backgroundColor: 'var(--bg-canvas)',
    }}>
      {/* Gertix Contact Section */}
      <div 
        className="container"
        style={{
          paddingTop: '100px',
          paddingBottom: '80px',
          borderBottom: 'var(--border-style)',
        }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'center',
        }}>
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px',
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--accent-primary)',
              }}>
                04 Contact // K Tech • Kwanele Magutshwa
              </span>
              <span style={{
                width: '40px',
                height: '1px',
                background: 'var(--border-dark)',
              }} />
            </div>

            <h2 style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              textTransform: 'lowercase',
              marginBottom: '20px',
            }}>
              get in touch.
            </h2>

            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              maxWidth: '520px',
              lineHeight: 1.6,
              marginBottom: '20px',
            }}>
              Planning a new web platform, scaling commercial operational software, or exploring software engineering collaboration? Reach out directly.
            </p>

            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              color: 'var(--text-muted)',
              lineHeight: 1.8,
            }}>
              <div>📍 Location: Boksburg / Johannesburg, South Africa</div>
              <div>🎓 Education: BSc in Computing, UNISA</div>
              <div>⚡ Practice: K Tech Software Engineering & Web Architecture</div>
            </div>
          </div>

          {/* Sharp Whitened Glass Contact Box */}
          <div 
            className="glass-panel"
            style={{
              padding: '40px',
              border: 'var(--border-style)',
              background: 'var(--bg-surface)',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            <div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--text-muted)',
                marginBottom: '8px',
              }}>
                Direct Email
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(1.15rem, 2.5vw, 1.4rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
              }}>
                {email}
              </div>
            </div>

            <div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--text-muted)',
                marginBottom: '8px',
              }}>
                Direct Telephone
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                fontWeight: 700,
                color: 'var(--text-secondary)',
              }}>
                {phone}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={handleCopyEmail}
                className="cb-btn"
                style={{
                  padding: '12px 24px',
                  fontSize: '0.82rem',
                }}
              >
                {copied ? (
                  <>
                    <span>✓ Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <span>Copy Address</span>
                    <span>→</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${email}`}
                className="cb-btn-secondary"
                style={{
                  padding: '12px 24px',
                  fontSize: '0.82rem',
                }}
              >
                <span>Open Mail Client</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Gertix Studio Clean Site Footer */}
      <div className="container" style={{ padding: '40px 32px 60px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px',
          marginBottom: '32px',
        }}>
          {/* Logo */}
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '1.05rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            color: 'var(--text-primary)',
          }}>
            K Tech
          </div>

          {/* Numbered Footer Navigation */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
            flexWrap: 'wrap',
          }}>
            <a href="#home" style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
              01 Home
            </a>
            <a href="#portfolio" style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
              02 Portfolio
            </a>
            <a href="#services" style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
              03 Services
            </a>
            <a href="#contact" style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
              04 Contact
            </a>
          </nav>
        </div>

        {/* Legal & Copyright Baseline */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          borderTop: 'var(--border-style)',
          paddingTop: '24px',
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
          }}>
            © {new Date().getFullYear()} K Tech • Kwanele Magutshwa. All rights reserved.
          </div>

          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--text-faint)',
          }}>
            Full-Stack Software Engineering • Web Architecture • UI/UX
          </div>
        </div>
      </div>
    </footer>
  );
}
