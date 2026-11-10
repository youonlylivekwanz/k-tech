import React from 'react';
import { motion } from 'framer-motion';
import { CAPABILITIES } from '../data/projects';

export default function Capabilities() {
  return (
    <section id="services" style={{
      position: 'relative',
      padding: '100px 0',
      borderBottom: 'var(--border-style)',
      background: 'rgba(255, 255, 255, 0.4)',
      backdropFilter: 'blur(16px)',
    }}>
      <div className="container">
        {/* Gertix Disciplines Header */}
        <div style={{ marginBottom: '64px' }}>
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
              03 Services & Disciplines
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
            marginBottom: '18px',
          }}>
            three disciplines. <br />
            <span style={{ color: 'var(--text-secondary)' }}>one standard of craft.</span>
          </h2>

          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            maxWidth: '720px',
            lineHeight: 1.6,
          }}>
            From interactive 3D media and frontend engineering to systems architecture in C++/Python and relational cloud backends, I engineer end-to-end software solutions with precision.
          </p>
        </div>

        {/* Gertix Architectural Business Areas Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          border: 'var(--border-style)',
          background: 'var(--bg-surface)',
          backdropFilter: 'blur(20px)',
        }}>
          {CAPABILITIES.map((domain, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              style={{
                padding: '44px 36px',
                borderRight: idx < CAPABILITIES.length - 1 ? 'var(--border-style)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--accent-primary)',
                  marginBottom: '12px',
                }}>
                  0{idx + 1}
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                  marginBottom: '14px',
                }}>
                  {domain.category}
                </h3>

                <p style={{
                  fontSize: '0.94rem',
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)',
                  marginBottom: '28px',
                }}>
                  {domain.summary}
                </p>

                {/* Sub-skills list */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}>
                  {domain.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      style={{
                        padding: '14px 16px',
                        border: 'var(--border-style)',
                        background: 'rgba(255, 255, 255, 0.6)',
                      }}
                    >
                      <div style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.92rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '3px',
                      }}>
                        {skill.name}
                      </div>
                      <div style={{
                        fontSize: '0.82rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.4,
                      }}>
                        {skill.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
