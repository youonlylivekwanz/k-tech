import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../data/projects';

export default function SelectedWorks() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" style={{
      position: 'relative',
      padding: '100px 0',
      borderBottom: 'var(--border-style)',
    }}>
      <div className="container">
        {/* Gertix Section Header */}
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
              02 Portfolio
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
            selected projects.
          </h2>

          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            maxWidth: '680px',
            lineHeight: 1.6,
          }}>
            A curated overview of production web applications, commercial dashboards, and interactive digital showcases.
          </p>
        </div>

        {/* Project Cards (Sharp Rectangles with Whitened Glassmorphism) */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
        }}>
          {PROJECTS.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel"
              style={{
                position: 'relative',
                padding: 'clamp(28px, 4vw, 48px)',
                border: 'var(--border-style)',
                background: 'var(--bg-surface)',
              }}
            >
              {/* Card Meta Bar */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '28px',
                borderBottom: 'var(--border-style)',
                paddingBottom: '20px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'var(--accent-primary)',
                  }}>
                    #{project.number}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--text-secondary)',
                  }}>
                    {project.category}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    padding: '4px 10px',
                    border: 'var(--border-style)',
                    background: 'rgba(255, 255, 255, 0.9)',
                    color: 'var(--text-primary)',
                    fontWeight: 600,
                  }}>
                    {project.badge}
                  </span>
                  <span style={{
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-muted)',
                  }}>
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Card Content Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '40px',
                marginBottom: '32px',
              }}>
                {/* Left: Summary & Stats */}
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: 'var(--text-primary)',
                    marginBottom: '8px',
                  }}>
                    {project.title}
                  </h3>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.92rem',
                    fontWeight: 500,
                    color: 'var(--accent-primary)',
                    marginBottom: '16px',
                  }}>
                    {project.subtitle}
                  </div>
                  <p style={{
                    fontSize: '1.02rem',
                    lineHeight: 1.65,
                    color: 'var(--text-secondary)',
                    marginBottom: '28px',
                  }}>
                    {project.overview}
                  </p>

                  {/* Sharp Metric Grid */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    border: 'var(--border-style)',
                    background: 'rgba(255, 255, 255, 0.5)',
                  }}>
                    {project.stats.map((stat, sIdx) => (
                      <div 
                        key={sIdx}
                        style={{
                          padding: '14px 16px',
                          borderRight: sIdx < 2 ? 'var(--border-style)' : 'none',
                        }}
                      >
                        <div style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.98rem',
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          marginBottom: '3px',
                        }}>
                          {stat.value}
                        </div>
                        <div style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.7rem',
                          color: 'var(--text-muted)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                        }}>
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Key Deliverables */}
                <div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--text-muted)',
                    marginBottom: '16px',
                  }}>
                    Key Deliverables
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {project.architecture.map((item, aIdx) => (
                      <div 
                        key={aIdx}
                        style={{
                          padding: '16px 20px',
                          border: 'var(--border-style)',
                          background: 'rgba(255, 255, 255, 0.6)',
                        }}
                      >
                        <div style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.95rem',
                          fontWeight: 600,
                          color: 'var(--text-primary)',
                          marginBottom: '4px',
                        }}>
                          {item.title}
                        </div>
                        <div style={{
                          fontSize: '0.88rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.5,
                        }}>
                          {item.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Tags & Sharp Button */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
                borderTop: 'var(--border-style)',
                paddingTop: '20px',
              }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      style={{
                        fontSize: '0.74rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '4px 10px',
                        border: 'var(--border-style)',
                        background: 'rgba(255, 255, 255, 0.7)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="cb-btn-secondary"
                  style={{
                    padding: '10px 22px',
                    fontSize: '0.8rem',
                  }}
                >
                  <span>Case Study Details</span>
                  <span>→</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Sharp Rectangular Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
              background: 'rgba(10, 10, 12, 0.5)',
              backdropFilter: 'blur(20px)',
            }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.98, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.98, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel"
              style={{
                width: '100%',
                maxWidth: '720px',
                maxHeight: '85vh',
                overflowY: 'auto',
                padding: '44px',
                background: '#ffffff',
                border: 'var(--border-dark)',
                boxShadow: 'var(--shadow-elevated)',
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '24px',
                borderBottom: 'var(--border-style)',
                paddingBottom: '20px',
              }}>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--accent-primary)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '6px',
                  }}>
                    #{selectedProject.number} • {selectedProject.category}
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                  }}>
                    {selectedProject.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    padding: '8px 16px',
                    border: 'var(--border-style)',
                    background: 'var(--bg-canvas)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                  }}
                >
                  Close ✕
                </button>
              </div>

              <p style={{
                fontSize: '1.05rem',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                marginBottom: '28px',
              }}>
                {selectedProject.overview}
              </p>

              <div style={{ marginBottom: '32px' }}>
                <h4 style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--text-primary)',
                  marginBottom: '16px',
                }}>
                  Key Features & Highlights
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {selectedProject.architecture.map((item, idx) => (
                    <div 
                      key={idx}
                      style={{
                        padding: '16px 20px',
                        border: 'var(--border-style)',
                        background: 'rgba(248, 249, 250, 0.7)',
                      }}
                    >
                      <div style={{
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '4px',
                        fontSize: '0.96rem',
                      }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        {item.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                borderTop: 'var(--border-style)',
                paddingTop: '20px',
              }}>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="cb-btn"
                  style={{
                    padding: '10px 24px',
                    fontSize: '0.82rem',
                  }}
                >
                  Done
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
