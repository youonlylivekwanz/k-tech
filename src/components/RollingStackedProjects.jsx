import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function RollingStackedProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activePreviewUrl, setActivePreviewUrl] = useState(null);
  const [previewDevice, setPreviewDevice] = useState('desktop'); // 'desktop' or 'mobile'

  const projects = [
    {
      id: 'semadi-properties',
      number: '01',
      title: 'Semadi Properties — Commercial Asset Platform',
      category: 'Commercial Platform & Dashboard',
      tags: ['React 19', 'Executive Dashboard', 'Commercial UI', 'Leasing Proposals', 'Data Modeling'],
      description: 'A complete commercial real estate ecosystem uniting property portfolio analytics, unit occupancy tracking, tenant management, and automated client leasing proposals.',
      bg: '#f6f4ee',
      accent: '#C5A880',
      badge: 'Enterprise Platform',
      hasLivePreview: true,
      previewUrl: '/semadi-preview.html',
      stats: [
        { label: 'Role', value: 'Lead Architecture & UI' },
        { label: 'Occupancy Rate', value: '94.2% Target' },
        { label: 'Platform Scope', value: 'Web & Tablet' },
      ],
      previewHeadline: 'High-Density Operational Dashboard',
      previewDetails: 'Financial KPI monitors, lease renewal workflows, and standardized institutional proposal playbooks.',
      deliverables: [
        { title: 'Property Performance Dashboard', detail: 'Created clear visual monitors so managers can track rental yields, occupancy percentages, lease expiries, and tenant maintenance tickets in real time.' },
        { title: 'Standardized Proposal & Playbook Engine', detail: 'Organized commercial documentation and proposal templates to streamline leasing deals with prospective commercial tenants.' },
        { title: 'Structured Data Architecture', detail: 'Designed clean relational system structures to keep lease dates, square meterage, maintenance tickets, and emergency contacts organized.' },
      ]
    },
    {
      id: 'ni',
      number: '02',
      title: 'Ni — High-Fashion Motion Experience',
      category: 'Creative Frontend & Motion',
      tags: ['React 19', 'Framer Motion v12', 'WebGL & Three.js', 'Bento Architecture'],
      description: 'An intimate, high-fashion editorial digital sanctuary crafted with fluid liquid glassmorphism, responsive bento archives, an interactive gift vault, and custom typography.',
      bg: '#f8f9fa',
      accent: '#0033a0',
      badge: 'Featured Experience',
      hasDirectLink: true,
      directLinkUrl: 'https://ni-mauve.vercel.app',
      stats: [
        { label: 'Motion Engine', value: 'Framer Motion v12' },
        { label: 'Responsiveness', value: 'Mobile & Desktop' },
        { label: 'Frame Budget', value: '60 FPS Target' },
      ],
      previewHeadline: 'Liquid Molten Chrome & Curated Bento',
      previewDetails: 'Interactive countdown timer gates, sealed archival letters, and smooth 60fps micro-interactions.',
      deliverables: [
        { title: 'Smooth Interactive Animations', detail: 'Built physics-based spring transitions, sealed archive letters, and floating optical pill controls that make the website tactile and responsive.' },
        { title: 'Responsive Bento Layout', detail: 'Designed an editorial multi-media vault that gracefully reflows between mobile viewports and ultra-wide cinematic desktop displays.' },
        { title: 'Atmospheric Canvas Depth', detail: 'Paired distinctive typography with ambient background lighting and shader particle mesh to create a memorable brand presence.' },
      ]
    },
    {
      id: 'buddy-learning',
      number: '03',
      title: 'Buddy Learning LMS — Operations Engine',
      category: 'EdTech Platform & Tutoring LMS',
      tags: ['Next.js 19', 'FastAPI (Python)', 'PostgreSQL RDS', 'AWS S3 Vault', 'POPIA Compliant'],
      description: 'A comprehensive software platform, operational implementation plan, and technical architecture for an AI-integrated Learning Management System transforming manual scheduling and spreadsheets into a high-concurrency automated digital ecosystem.',
      bg: '#FAF8F5',
      accent: '#F8991D',
      badge: 'Live Platform & Architecture',
      hasDirectLink: true,
      directLinkUrl: 'https://buddy-learning-ten.vercel.app/',
      stats: [
        { label: 'Architecture', value: '4 Role Portals' },
        { label: 'Backend Engine', value: 'FastAPI Async' },
        { label: 'Deployment', value: 'Live on Vercel' },
      ],
      previewHeadline: 'Automated Operations & Multi-Role Hub',
      previewDetails: 'Dynamic tutor remuneration cron, dynamic PDF invoicing, AI session summaries, and institutional cohort metrics.',
      deliverables: [
        { title: '4-Role Multi-Tenant Architecture', detail: 'Specialized portals for Learner Hub (gamified streaks & XP), Tutor Terminal (lesson timers & calendar availability), Sponsor Suite (cohort ROI), and Admin Command Center.' },
        { title: 'Dynamic Invoicing & Tutor Payout Cron', detail: 'FastAPI asynchronous billing engine managing automated recurring client invoices, lesson hour verification, and automated tutor remuneration calculations.' },
        { title: 'AI Progress & Session Summaries', detail: 'Integrated LLM API pipeline generating automated lesson recaps, key takeaways, and homework assignments with POPIA-compliant data encryption.' },
      ]
    },
  ];

  return (
    <section 
      id="portfolio"
      style={{
        position: 'relative',
        width: '100%',
      }}
    >
      {/* 
        Native CSS Sticky Stacking Deck:
        Each card has `position: sticky; top: 76px; height: calc(100vh - 76px);`
        As the user scrolls down, each subsequent card rolls up directly over the previous one,
        matching the exact Gertix Studio .business-areas--snap animation sequence.
      */}
      {projects.map((project, idx) => (
        <article
          key={project.id}
          style={{
            position: 'sticky',
            top: '76px',
            height: 'calc(100vh - 76px)',
            minHeight: 'calc(100vh - 76px)',
            backgroundColor: project.bg,
            borderTop: idx > 0 ? '1px solid rgba(0, 0, 0, 0.25)' : 'none',
            boxShadow: idx > 0 ? '0 -24px 48px rgba(0, 0, 0, 0.12)' : 'none',
            zIndex: idx + 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '24px 0',
            boxSizing: 'border-box',
            overflow: 'hidden',
          }}
        >
          <div className="container" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {/* Card Main Grid (1fr 1fr matching Gertix Studio) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '40px',
              alignItems: 'center',
            }}>
              {/* LEFT COLUMN: Number, Title, Tags, Excerpt, Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {/* Top Row: Number & Category */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  borderBottom: 'var(--border-style)',
                  paddingBottom: '14px',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    color: project.accent,
                    letterSpacing: '-0.02em',
                  }}>
                    {project.number}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: 'var(--text-secondary)',
                    fontWeight: 600,
                  }}>
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(1.85rem, 3.4vw, 2.85rem)',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  color: 'var(--text-primary)',
                }}>
                  {project.title}
                </h3>

                {/* Sharp Rectangular Tag Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        padding: '5px 12px',
                        border: '1px solid rgba(0, 0, 0, 0.25)',
                        background: 'rgba(255, 255, 255, 0.85)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Excerpt */}
                <p style={{
                  fontSize: '1.02rem',
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)',
                  maxWidth: '540px',
                }}>
                  {project.description}
                </p>

                {/* Action Buttons matching Gertix style */}
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', paddingTop: '6px' }}>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="cb-btn"
                    style={{
                      padding: '12px 24px',
                      fontSize: '0.82rem',
                    }}
                  >
                    <span>Explore Case Study</span>
                    <span aria-hidden="true">→</span>
                  </button>

                  {/* Project 01: Semadi Live Preview Button */}
                  {project.hasLivePreview && (
                    <button
                      onClick={() => setActivePreviewUrl(project.previewUrl)}
                      className="cb-btn-secondary"
                      style={{
                        padding: '12px 22px',
                        fontSize: '0.82rem',
                        borderColor: '#C5A880',
                        color: '#0B192C',
                        background: 'rgba(255, 255, 255, 0.95)',
                      }}
                    >
                      <span style={{ fontWeight: 700 }}>Interactive Site Preview</span>
                      <span aria-hidden="true" style={{ color: '#C5A880', fontWeight: 700 }}>↗</span>
                    </button>
                  )}

                  {/* Direct Website Link (Ni & Buddy Learning) */}
                  {project.hasDirectLink && (
                    <a
                      href={project.directLinkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cb-btn-secondary"
                      style={{
                        padding: '12px 22px',
                        fontSize: '0.82rem',
                        borderColor: project.accent,
                        color: project.id === 'buddy-learning' ? '#9C5B07' : project.accent,
                        background: 'rgba(255, 255, 255, 0.95)',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontWeight: 700,
                      }}
                    >
                      <span>{project.id === 'buddy-learning' ? 'Visit Live Platform' : 'Visit Live Website'}</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>

              {/* RIGHT COLUMN: Realistic Visual System Architecture Preview */}
              <div style={{
                border: '1px dashed rgba(0, 0, 0, 0.3)',
                padding: '14px',
                background: 'rgba(255, 255, 255, 0.85)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  borderBottom: 'var(--border-style)',
                  paddingBottom: '8px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', background: project.accent, display: 'inline-block' }} />
                    <span>System Architecture Preview</span>
                  </div>
                  <span>Year 2026</span>
                </div>

                {/* PROJECT-SPECIFIC HIGH-FIDELITY VISUAL SIMULATION */}

                {/* 1. SEMADI PROPERTIES REALISTIC LUXURY UI PREVIEW */}
                {project.id === 'semadi-properties' && (
                  <div style={{
                    minHeight: '310px',
                    background: '#F8FAFC',
                    border: '1px solid #CBD5E1',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    color: '#0F172A',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    {/* Top utility bar matching Semadi preview.html */}
                    <div style={{
                      background: '#0B192C',
                      color: '#94A3B8',
                      padding: '6px 14px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '0.68rem',
                      fontFamily: 'var(--font-mono)',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ color: '#E2E8F0', fontWeight: 600 }}>SEMADI PROPERTIES</span>
                        <span style={{ color: '#475569' }}>•</span>
                        <span>COMMERCIAL ASSET MANAGEMENT</span>
                      </div>
                      <span style={{
                        background: 'rgba(197, 168, 128, 0.2)',
                        color: '#C5A880',
                        padding: '2px 8px',
                        fontWeight: 700,
                        fontSize: '0.66rem',
                        letterSpacing: '0.04em',
                      }}>
                        ZAR (R)
                      </span>
                    </div>

                    {/* Semadi Header with Authentic Brand Emblem */}
                    <div style={{
                      background: '#FFFFFF',
                      padding: '10px 14px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderBottom: '1px solid #E2E8F0',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        {/* Authentic Logo Emblem */}
                        <div style={{
                          width: '32px',
                          height: '32px',
                          background: 'linear-gradient(135deg, #0B192C 0%, #1E293B 100%)',
                          border: '1.5px solid #C5A880',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#C5A880',
                          fontFamily: 'Georgia, serif',
                          fontSize: '1.2rem',
                          fontWeight: 700,
                        }}>
                          S
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <span style={{
                            fontFamily: 'Georgia, serif',
                            fontSize: '0.92rem',
                            fontWeight: 700,
                            letterSpacing: '0.05em',
                            color: '#0B192C',
                            lineHeight: 1.1,
                          }}>
                            SEMADI
                          </span>
                          <span style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.55rem',
                            letterSpacing: '0.22em',
                            color: '#C5A880',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                          }}>
                            PROPERTIES
                          </span>
                        </div>
                      </div>

                      {/* Header Navigation Pills */}
                      <div style={{ display: 'flex', gap: '12px', fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 600 }}>
                        <span style={{ color: '#0B192C', borderBottom: '2px solid #C5A880', paddingBottom: '2px' }}>Portfolios</span>
                        <span style={{ color: '#64748B' }}>Dashboard</span>
                        <span style={{ color: '#64748B' }}>Leasing</span>
                      </div>
                    </div>

                    {/* Main Content Area */}
                    <div style={{ padding: '12px 14px' }}>
                      {/* KPI Row (Exact match to Semadi Dashboard) */}
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '8px',
                        marginBottom: '10px',
                      }}>
                        <div style={{
                          background: '#FFFFFF',
                          padding: '8px 10px',
                          border: '1px solid #E2E8F0',
                          borderLeft: '3px solid #C5A880',
                        }}>
                          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: '#64748B', textTransform: 'uppercase' }}>
                            Monthly Yield
                          </div>
                          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', fontWeight: 700, color: '#0B192C', marginTop: '2px' }}>
                            R1.84M
                          </div>
                          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: '#059669', fontWeight: 600 }}>
                            ↑ +14.2% YoY
                          </div>
                        </div>

                        <div style={{
                          background: '#FFFFFF',
                          padding: '8px 10px',
                          border: '1px solid #E2E8F0',
                          borderLeft: '3px solid #0B192C',
                        }}>
                          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: '#64748B', textTransform: 'uppercase' }}>
                            Occupancy
                          </div>
                          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', fontWeight: 700, color: '#0B192C', marginTop: '2px' }}>
                            94.2%
                          </div>
                          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: '#64748B' }}>
                            42 Units Active
                          </div>
                        </div>

                        <div style={{
                          background: '#FFFFFF',
                          padding: '8px 10px',
                          border: '1px solid #E2E8F0',
                          borderLeft: '3px solid #C5A880',
                        }}>
                          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: '#64748B', textTransform: 'uppercase' }}>
                            Proposals
                          </div>
                          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', fontWeight: 700, color: '#0B192C', marginTop: '2px' }}>
                            8 Active
                          </div>
                          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: '#B5966B', fontWeight: 600 }}>
                            Institutional Flow
                          </div>
                        </div>
                      </div>

                      {/* Featured Commercial Asset Card */}
                      <div style={{
                        background: '#FFFFFF',
                        border: '1px solid #E2E8F0',
                        padding: '10px 12px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 700, color: '#0B192C' }}>
                              Parktown Commercial Centre
                            </span>
                            <span style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.56rem',
                              padding: '1px 6px',
                              background: '#F8F5F0',
                              color: '#B5966B',
                              border: '1px solid #E2E8F0',
                              fontWeight: 600,
                              textTransform: 'uppercase',
                            }}>
                              Grade-A
                            </span>
                          </div>
                          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.64rem', color: '#64748B', marginTop: '2px' }}>
                            14,200 m² GLA • Prime Commercial Corridor
                          </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#059669', fontWeight: 700 }}>
                            100% Leased
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action inside preview matching Semadi brand button */}
                    <div style={{
                      background: '#FFFFFF',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '8px 14px',
                      borderTop: '1px solid #E2E8F0',
                    }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#64748B' }}>
                        Executive Commercial Architecture
                      </span>
                      <button
                        onClick={() => setActivePreviewUrl(project.previewUrl)}
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          padding: '6px 14px',
                          background: '#0B192C',
                          color: '#FFFFFF',
                          border: '1px solid #C5A880',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          boxShadow: '0 2px 6px rgba(11, 25, 44, 0.15)',
                        }}
                      >
                        <span style={{ color: '#C5A880' }}>Launch Prototype</span>
                        <span>↗</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* 2. NI HIGH-FASHION MOTION EXPERIENCE VISUAL PREVIEW */}
                {project.id === 'ni' && (
                  <div style={{
                    minHeight: '290px',
                    background: 'radial-gradient(circle at 50% 30%, #1e1b2e 0%, #080709 90%)',
                    border: 'var(--border-dark)',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    color: '#ffffff',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    {/* Top status bar */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                      paddingBottom: '10px',
                    }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', letterSpacing: '0.12em', color: '#d4af37' }}>
                        NI // CHAPTER 01 — SANCTUARY
                      </span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#d4af37' }} />
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', color: '#a1a1aa' }}>60 FPS Spring</span>
                      </div>
                    </div>

                    {/* Center Monogram & Molten Chrome Typography */}
                    <div style={{ textAlign: 'center', margin: '20px 0' }}>
                      <div style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '3.6rem',
                        lineHeight: 1,
                        color: '#f5f0e6',
                        letterSpacing: '0.08em',
                        textShadow: '0 0 30px rgba(212, 175, 55, 0.4)',
                      }}>
                        Ni
                      </div>
                      <div style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        letterSpacing: '0.24em',
                        textTransform: 'uppercase',
                        color: '#d4af37',
                        marginTop: '6px',
                      }}>
                        Liquid Glassmorphism & Bento
                      </div>
                    </div>

                    {/* Bento & Interaction Tags */}
                    <div style={{
                      display: 'flex',
                      gap: '8px',
                      justifyContent: 'center',
                    }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', padding: '4px 8px', background: 'rgba(255, 255, 255, 0.08)', color: '#f4f4f5', border: '1px solid rgba(255, 255, 255, 0.12)' }}>
                        Optical Glass Pill
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', padding: '4px 8px', background: 'rgba(255, 255, 255, 0.08)', color: '#f4f4f5', border: '1px solid rgba(255, 255, 255, 0.12)' }}>
                        Bento Vault
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', padding: '4px 8px', background: 'rgba(255, 255, 255, 0.08)', color: '#f4f4f5', border: '1px solid rgba(255, 255, 255, 0.12)' }}>
                        Chronos Lock
                      </span>
                    </div>

                    {/* Bottom Action inside preview */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: '14px',
                      paddingTop: '10px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#a1a1aa' }}>
                        Three.js Shader Mesh & Canvas
                      </span>
                      <a
                        href={project.directLinkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          padding: '6px 14px',
                          background: '#d4af37',
                          color: '#080709',
                          textDecoration: 'none',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        Visit Website ↗
                      </a>
                    </div>
                  </div>
                )}

                {/* 3. BUDDY LEARNING LMS REALISTIC BASE44 UI PREVIEW */}
                {project.id === 'buddy-learning' && (
                  <div style={{
                    minHeight: '310px',
                    background: '#FAF8F5',
                    border: '1px solid #E7E5E0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    color: '#1C1917',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    {/* Top Header matching Header.tsx with authentic Buddy Logo */}
                    <div style={{
                      background: 'rgba(250, 248, 245, 0.98)',
                      padding: '8px 14px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderBottom: '1px solid #E7E5E0',
                    }}>
                      {/* Logo and Subtitle */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <img
                          src="/buddy-learning-logo-transparent.png"
                          alt="Buddy Learning"
                          style={{ height: '22px', width: 'auto', display: 'block' }}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const sibling = e.currentTarget.nextElementSibling;
                            if (sibling) sibling.style.display = 'flex';
                          }}
                        />
                        <div style={{ display: 'none', alignItems: 'center', gap: '4px' }}>
                          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', fontWeight: 800, color: '#1C1917' }}>
                            BUDDY<span style={{ color: '#F8991D' }}>.</span>
                          </span>
                        </div>
                        <span style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.62rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          color: '#78716C',
                          borderLeft: '1px solid #E7E5E0',
                          paddingLeft: '8px',
                          fontWeight: 600,
                        }}>
                          STEM Tutoring
                        </span>
                      </div>

                      {/* Authentic Streak Pill (Honey Amber) */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '3px 10px',
                        background: '#FEF5E7',
                        border: '1px solid rgba(248, 153, 29, 0.35)',
                      }}>
                        <span style={{ fontSize: '0.85rem' }}>🔥</span>
                        <span style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          color: '#9C5B07',
                        }}>
                          12-Day Streak
                        </span>
                        <span style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.65rem',
                          padding: '1px 5px',
                          background: '#FFFFFF',
                          border: '1px solid #E7E5E0',
                          color: '#1C1917',
                          fontWeight: 700,
                        }}>
                          1,420 XP
                        </span>
                      </div>
                    </div>

                    {/* Role Navigation Switcher (Overview, Learner Hub, Tutor Terminal, Sponsor Suite, Admin) */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(5, 1fr)',
                      background: '#F3F0E9',
                      borderBottom: '1px solid #E7E5E0',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                    }}>
                      <div style={{ padding: '6px 4px', textAlign: 'center', color: '#78716C' }}>
                        00 Overview
                      </div>
                      <div style={{
                        padding: '6px 4px',
                        textAlign: 'center',
                        background: '#FFFFFF',
                        color: '#F8991D',
                        fontWeight: 700,
                        borderBottom: '2px solid #F8991D',
                      }}>
                        01 Learner
                      </div>
                      <div style={{ padding: '6px 4px', textAlign: 'center', color: '#78716C' }}>
                        02 Tutor
                      </div>
                      <div style={{ padding: '6px 4px', textAlign: 'center', color: '#78716C' }}>
                        03 Sponsor
                      </div>
                      <div style={{ padding: '6px 4px', textAlign: 'center', color: '#78716C' }}>
                        04 Admin
                      </div>
                    </div>

                    {/* Real Learner Hub Card Area */}
                    <div style={{ padding: '12px 14px' }}>
                      {/* Active Upcoming Lesson Card */}
                      <div style={{
                        background: '#FFFFFF',
                        border: '1px solid #E7E5E0',
                        padding: '12px 14px',
                        boxShadow: '0 1px 3px 0 rgba(28, 25, 23, 0.04)',
                        marginBottom: '8px',
                      }}>
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          marginBottom: '8px',
                        }}>
                          <div>
                            <span style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.6rem',
                              padding: '2px 6px',
                              background: '#FEF5E7',
                              color: '#9C5B07',
                              fontWeight: 700,
                              textTransform: 'uppercase',
                              letterSpacing: '0.04em',
                            }}>
                              Next Scheduled Session
                            </span>
                            <h4 style={{
                              fontFamily: 'var(--font-sans)',
                              fontSize: '0.92rem',
                              fontWeight: 700,
                              color: '#1C1917',
                              marginTop: '4px',
                            }}>
                              Pure Mathematics: Calculus II
                            </h4>
                          </div>

                          <span style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.64rem',
                            padding: '2px 8px',
                            background: '#ECFDF5',
                            color: '#065F46',
                            border: '1px solid #A7F3D0',
                            fontWeight: 700,
                          }}>
                            Confirmed
                          </span>
                        </div>

                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          borderTop: '1px solid #F3F0E9',
                          paddingTop: '8px',
                          marginTop: '8px',
                        }}>
                          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#44403C' }}>
                            <span>Today • 16:30 - 17:30</span>
                            <span style={{ color: '#A8A29E', margin: '0 6px' }}>•</span>
                            <span style={{ color: '#78716C' }}>Mr. M. Khumalo</span>
                          </div>

                          {/* Authentic Honey Amber Button linking to live platform */}
                          <a
                            href={project.directLinkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              padding: '5px 12px',
                              background: '#F8991D',
                              color: '#FFFFFF',
                              fontFamily: 'var(--font-sans)',
                              fontSize: '0.72rem',
                              fontWeight: 700,
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              textDecoration: 'none',
                              boxShadow: '0 2px 4px rgba(248, 153, 29, 0.25)',
                            }}
                          >
                            <span>Launch Room</span>
                            <span>→</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Status bar */}
                    <div style={{
                      background: '#FFFFFF',
                      padding: '8px 14px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderTop: '1px solid #E7E5E0',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ width: '6px', height: '6px', background: '#10B981', display: 'inline-block' }} />
                        <span style={{ color: '#44403C' }}>Live on Vercel • Next.js 19</span>
                      </div>
                      <a
                        href={project.directLinkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: '#9C5B07',
                          fontWeight: 700,
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                      >
                        <span>Open Platform</span>
                        <span>↗</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Progress bar along the bottom of the card */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'rgba(0, 0, 0, 0.06)',
          }}>
            <div style={{
              height: '100%',
              width: `${((idx + 1) / projects.length) * 100}%`,
              background: project.accent,
            }} />
          </div>
        </article>
      ))}

      {/* Case Study Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 300,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
              background: 'rgba(10, 10, 12, 0.55)',
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
                maxWidth: '740px',
                maxHeight: '85vh',
                overflowY: 'auto',
                padding: '40px',
                background: '#ffffff',
                border: 'var(--border-dark)',
                boxShadow: 'var(--shadow-elevated)',
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '20px',
                borderBottom: 'var(--border-style)',
                paddingBottom: '18px',
              }}>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: selectedProject.accent,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '4px',
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
                fontSize: '1.02rem',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                marginBottom: '24px',
              }}>
                {selectedProject.description}
              </p>

              {/* Action buttons inside Modal */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '28px' }}>
                {selectedProject.hasLivePreview && (
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      setActivePreviewUrl(selectedProject.previewUrl);
                    }}
                    className="cb-btn"
                    style={{
                      padding: '10px 20px',
                      fontSize: '0.82rem',
                    }}
                  >
                    <span>Launch Interactive Site Preview</span>
                    <span aria-hidden="true">↗</span>
                  </button>
                )}

                {selectedProject.hasDirectLink && (
                  <a
                    href={selectedProject.directLinkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cb-btn"
                    style={{
                      padding: '10px 20px',
                      fontSize: '0.82rem',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <span>Visit Direct Website</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                )}

                {selectedProject.isProposed && (
                  <div
                    style={{
                      padding: '10px 16px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      border: '1px dashed var(--border-dark)',
                      background: 'var(--bg-canvas)',
                      color: 'var(--text-secondary)',
                      textTransform: 'uppercase',
                    }}
                  >
                    Proposed LMS Specification • Direct Link To Be Added Soon
                  </div>
                )}
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h4 style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--text-primary)',
                  marginBottom: '16px',
                }}>
                  Key Features & Technical Architecture
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {selectedProject.deliverables.map((item, idx) => (
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
                        {item.detail}
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
                  className="cb-btn-secondary"
                  style={{
                    padding: '10px 24px',
                    fontSize: '0.82rem',
                  }}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FULL INTERACTIVE PREVIEW MODAL (for Semadi Properties & Live Prototypes) */}
      <AnimatePresence>
        {activePreviewUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 400,
              display: 'flex',
              flexDirection: 'column',
              background: 'rgba(10, 10, 12, 0.85)',
              backdropFilter: 'blur(24px)',
            }}
          >
            {/* Modal Control Bar */}
            <div style={{
              height: '60px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
              background: '#0B192C',
              color: '#ffffff',
              padding: '0 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  color: '#C5A880',
                  textTransform: 'uppercase',
                }}>
                  Semadi Properties // Live Platform Prototype
                </span>

                {/* Viewport switch: Desktop vs Mobile */}
                <div style={{ display: 'flex', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  <button
                    onClick={() => setPreviewDevice('desktop')}
                    style={{
                      padding: '4px 12px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      background: previewDevice === 'desktop' ? '#C5A880' : 'transparent',
                      color: previewDevice === 'desktop' ? '#0B192C' : '#ffffff',
                      border: 'none',
                      cursor: 'pointer',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                    }}
                  >
                    Desktop
                  </button>
                  <button
                    onClick={() => setPreviewDevice('mobile')}
                    style={{
                      padding: '4px 12px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      background: previewDevice === 'mobile' ? '#C5A880' : 'transparent',
                      color: previewDevice === 'mobile' ? '#0B192C' : '#ffffff',
                      border: 'none',
                      cursor: 'pointer',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                    }}
                  >
                    Mobile (390px)
                  </button>
                </div>

                {/* Switch between Preview and Dashboard */}
                <div style={{ display: 'flex', gap: '6px' }}>
                  <button
                    onClick={() => setActivePreviewUrl('/semadi-preview.html')}
                    style={{
                      padding: '4px 10px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      background: activePreviewUrl === '/semadi-preview.html' ? 'rgba(255, 255, 255, 0.18)' : 'transparent',
                      color: '#ffffff',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      cursor: 'pointer',
                    }}
                  >
                    Site & Architecture
                  </button>
                  <button
                    onClick={() => setActivePreviewUrl('/semadi-dashboard.html')}
                    style={{
                      padding: '4px 10px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      background: activePreviewUrl === '/semadi-dashboard.html' ? 'rgba(255, 255, 255, 0.18)' : 'transparent',
                      color: '#ffffff',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      cursor: 'pointer',
                    }}
                  >
                    Executive Dashboard
                  </button>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <a
                  href={activePreviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '6px 14px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span>Open in Full Tab</span>
                  <span>↗</span>
                </a>

                <button
                  onClick={() => setActivePreviewUrl(null)}
                  style={{
                    padding: '6px 14px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    background: '#dc2626',
                    color: '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 700,
                  }}
                >
                  Close Preview ✕
                </button>
              </div>
            </div>

            {/* Iframe Viewport Container */}
            <div style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: previewDevice === 'mobile' ? '24px' : '0',
              overflow: 'hidden',
              background: '#070f1a',
            }}>
              <iframe
                src={activePreviewUrl}
                title="Semadi Properties Live Preview"
                style={{
                  width: previewDevice === 'mobile' ? '390px' : '100%',
                  height: previewDevice === 'mobile' ? '844px' : '100%',
                  maxHeight: previewDevice === 'mobile' ? 'calc(100vh - 120px)' : '100%',
                  border: previewDevice === 'mobile' ? '2px solid rgba(255, 255, 255, 0.3)' : 'none',
                  boxShadow: previewDevice === 'mobile' ? '0 25px 50px -12px rgba(0, 0, 0, 0.7)' : 'none',
                  background: '#ffffff',
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
