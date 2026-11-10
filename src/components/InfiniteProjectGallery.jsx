import React, { useRef, useEffect, useState } from 'react';

export default function InfiniteProjectGallery({ onSelectProject }) {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartTranslate = useRef(0);
  const translateRef = useRef(0);
  const animFrameId = useRef(null);
  const lastTimeRef = useRef(null);

  // Gallery items highlighting Kwane's real projects & deep dives
  const galleryItems = [
    {
      id: 'semadi-dashboard',
      projectId: 'semadi-properties',
      number: '01',
      title: 'Semadi Properties — Executive Dashboard',
      category: 'Commercial Real Estate',
      year: '2026',
      accent: '#C5A880',
      tag: 'Analytics & Occupancy',
      excerpt: 'Multi-view commercial real estate portal for monitoring asset revenue, lease occupancy, and tenant maintenance workflows.',
    },
    {
      id: 'ni-experience',
      projectId: 'ni',
      number: '02',
      title: 'Ni — High-Fashion Motion Platform',
      category: 'Creative Frontend',
      year: '2026',
      accent: '#0033a0',
      tag: 'React 19 × Motion',
      excerpt: 'Interactive editorial experience featuring liquid glassmorphism, optical pill navigation, and custom shader mesh depth.',
    },
    {
      id: 'buddy-lms',
      projectId: 'buddy-learning',
      number: '03',
      title: 'Buddy Learning LMS — Operations Engine',
      category: 'EdTech LMS Platform',
      year: '2026',
      accent: '#F8991D',
      tag: 'FastAPI × Next.js 19',
      excerpt: 'Automated tutoring ecosystem unifying student streaks, drag-and-drop tutor scheduling, and automated billing engines.',
    },
    {
      id: 'semadi-playbook',
      projectId: 'semadi-properties',
      number: '04',
      title: 'Semadi Properties — Commercial Playbooks',
      category: 'Commercial Systems',
      year: '2026',
      accent: '#C5A880',
      tag: 'System Architecture',
      excerpt: 'Standardized institutional developer playbooks and commercial leasing proposal generators for prospective tenants.',
    },
    {
      id: 'ni-bento',
      projectId: 'ni',
      number: '05',
      title: 'Ni — Interactive Gift Vault & Bento',
      category: 'Micro-Interactions',
      year: '2026',
      accent: '#0033a0',
      tag: 'Framer Motion v12',
      excerpt: 'Chronos countdown timer gate with interactive sealed archive letters and responsive tactile state switches.',
    },
    {
      id: 'buddy-billing',
      projectId: 'buddy-learning',
      number: '06',
      title: 'Buddy Learning — Dynamic Billing & AI Recaps',
      category: 'Automation & AI',
      year: '2026',
      accent: '#F8991D',
      tag: 'POPIA Compliant',
      excerpt: 'FastAPI asynchronous billing engine managing automated recurring client invoices, lesson hour verification, and LLM recaps.',
    },
  ];

  // Double the items for seamless infinite wrapping
  const allItems = [...galleryItems, ...galleryItems];

  const renderLiveCaseVisual = (item) => {
    switch (item.id) {
      case 'semadi-dashboard':
        return (
          <div style={{
            height: '100%',
            width: '100%',
            background: '#F8FAFC',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '10px 12px',
            boxSizing: 'border-box',
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid #E2E8F0',
              paddingBottom: '5px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{
                  width: '18px',
                  height: '18px',
                  background: '#0B192C',
                  border: '1px solid #C5A880',
                  color: '#C5A880',
                  fontFamily: 'Georgia, serif',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  S
                </div>
                <span style={{ fontFamily: 'Georgia, serif', fontSize: '0.72rem', fontWeight: 700, color: '#0B192C', letterSpacing: '0.04em' }}>
                  SEMADI // KPI
                </span>
              </div>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.58rem',
                background: 'rgba(197, 168, 128, 0.15)',
                color: '#9E7F55',
                padding: '1px 6px',
                fontWeight: 700,
              }}>
                TELEMETRY
              </span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '6px',
              margin: '4px 0',
            }}>
              <div style={{ background: '#FFFFFF', padding: '5px 7px', border: '1px solid #E2E8F0', borderLeft: '2px solid #C5A880' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.52rem', color: '#64748B', textTransform: 'uppercase' }}>Monthly Yield</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.92rem', fontWeight: 700, color: '#0B192C', lineHeight: 1.1 }}>R1.84M</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.52rem', color: '#059669', fontWeight: 600 }}>↑ +14.2% YoY</div>
              </div>
              <div style={{ background: '#FFFFFF', padding: '5px 7px', border: '1px solid #E2E8F0', borderLeft: '2px solid #0B192C' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.52rem', color: '#64748B', textTransform: 'uppercase' }}>Occupancy</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.92rem', fontWeight: 700, color: '#0B192C', lineHeight: 1.1 }}>94.2%</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.52rem', color: '#64748B' }}>42 Units Active</div>
              </div>
            </div>

            <div style={{
              background: '#0B192C',
              color: '#FFFFFF',
              padding: '4px 8px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.58rem',
              fontFamily: 'var(--font-mono)',
            }}>
              <span style={{ color: '#E2E8F0' }}>Parktown Commercial Centre</span>
              <span style={{ color: '#C5A880', fontWeight: 700 }}>100% Leased</span>
            </div>
          </div>
        );

      case 'ni-experience':
        return (
          <div style={{
            height: '100%',
            width: '100%',
            background: 'radial-gradient(circle at 50% 30%, #1e1b2e 0%, #080709 90%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '10px 12px',
            boxSizing: 'border-box',
            color: '#FFFFFF',
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              paddingBottom: '5px',
            }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: '#d4af37', letterSpacing: '0.12em' }}>
                NI // CHAPTER 01
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: '5px', height: '5px', background: '#d4af37', display: 'inline-block' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.56rem', color: '#a1a1aa' }}>60 FPS Spring</span>
              </div>
            </div>

            <div style={{ textAlign: 'center', margin: '2px 0' }}>
              <div style={{
                fontFamily: 'var(--font-display, Georgia, serif)',
                fontSize: '2.1rem',
                lineHeight: 1,
                color: '#f5f0e6',
                letterSpacing: '0.06em',
                textShadow: '0 0 20px rgba(212, 175, 55, 0.45)',
              }}>
                Ni
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.55rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#d4af37',
                marginTop: '2px',
              }}>
                Liquid Glassmorphism & Mesh
              </div>
            </div>

            <div style={{ display: 'flex', gap: '5px', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.53rem', padding: '2px 6px', background: 'rgba(255, 255, 255, 0.08)', color: '#f4f4f5', border: '1px solid rgba(255, 255, 255, 0.14)' }}>
                Optical Glass Pill
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.53rem', padding: '2px 6px', background: 'rgba(255, 255, 255, 0.08)', color: '#f4f4f5', border: '1px solid rgba(255, 255, 255, 0.14)' }}>
                Shader Depth
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.53rem', padding: '2px 6px', background: 'rgba(212, 175, 55, 0.15)', color: '#d4af37', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
                React 19
              </span>
            </div>
          </div>
        );

      case 'buddy-lms':
        return (
          <div style={{
            height: '100%',
            width: '100%',
            background: '#FAF8F5',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '10px 12px',
            boxSizing: 'border-box',
            color: '#1C1917',
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid #E7E5E0',
              paddingBottom: '5px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <img
                  src="/buddy-learning-logo-transparent.png"
                  alt="Buddy Learning"
                  style={{ height: '16px', width: 'auto', display: 'block' }}
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 800, color: '#1C1917' }}>
                  BUDDY<span style={{ color: '#F8991D' }}>.</span>
                </span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '2px 6px',
                background: '#FEF5E7',
                border: '1px solid rgba(248, 153, 29, 0.35)',
              }}>
                <span style={{ fontSize: '0.65rem' }}>🔥</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.62rem', fontWeight: 700, color: '#9C5B07' }}>
                  12-Day Streak
                </span>
              </div>
            </div>

            <div style={{
              background: '#FFFFFF',
              border: '1px solid #E7E5E0',
              padding: '6px 8px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 700, color: '#1C1917' }}>
                  Advanced Calculus II
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.54rem', color: '#78716C' }}>
                  Dr. Aris V. • Live In 14m
                </div>
              </div>
              <span style={{
                background: '#F8991D',
                color: '#FFFFFF',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.6rem',
                fontWeight: 700,
                padding: '3px 8px',
              }}>
                Launch Room
              </span>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.56rem',
              fontFamily: 'var(--font-mono)',
              color: '#78716C',
            }}>
              <span>Next.js 19 × FastAPI</span>
              <span style={{ color: '#9C5B07', fontWeight: 700 }}>1,420 XP Active</span>
            </div>
          </div>
        );

      case 'semadi-playbook':
        return (
          <div style={{
            height: '100%',
            width: '100%',
            background: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '10px 12px',
            boxSizing: 'border-box',
            color: '#0B192C',
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid #E2E8F0',
              paddingBottom: '5px',
            }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', fontWeight: 700, color: '#0B192C', letterSpacing: '0.04em' }}>
                SEMADI // SPEC-04
              </span>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.56rem',
                color: '#059669',
                background: '#ECFDF5',
                border: '1px solid #A7F3D0',
                padding: '1px 6px',
                fontWeight: 700,
              }}>
                VERIFIED TERMS
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', margin: '3px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.58rem', fontFamily: 'var(--font-mono)', color: '#334155' }}>
                <span style={{ color: '#C5A880', fontWeight: 700 }}>✓</span>
                <span>Triple-Net (NNN) Master Agreement</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.58rem', fontFamily: 'var(--font-mono)', color: '#334155' }}>
                <span style={{ color: '#C5A880', fontWeight: 700 }}>✓</span>
                <span>ZAR Rent Escalation (8.5% Index)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.58rem', fontFamily: 'var(--font-mono)', color: '#334155' }}>
                <span style={{ color: '#C5A880', fontWeight: 700 }}>✓</span>
                <span>Fit-Out Capital Allowance Matrix</span>
              </div>
            </div>

            <div style={{
              background: '#0B192C',
              color: '#C5A880',
              padding: '4px 8px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.56rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
            }}>
              <span>INSTITUTIONAL TENANT PORTAL</span>
              <span>v2.4 SPEC</span>
            </div>
          </div>
        );

      case 'ni-bento':
        return (
          <div style={{
            height: '100%',
            width: '100%',
            background: '#080709',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '10px 12px',
            boxSizing: 'border-box',
            color: '#FFFFFF',
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              paddingBottom: '5px',
            }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: '#d4af37', letterSpacing: '0.08em' }}>
                NI // BENTO VAULT
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.56rem', color: '#a1a1aa' }}>
                Framer Motion v12
              </span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '6px',
              margin: '3px 0',
            }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                padding: '5px 7px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.52rem', color: '#d4af37', textTransform: 'uppercase' }}>
                  Chronos Lock
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', fontWeight: 700, color: '#f5f0e6', margin: '2px 0' }}>
                  04:18:22
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.48rem', color: '#a1a1aa' }}>
                  Time-Gate Active
                </div>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                padding: '5px 7px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.52rem', color: '#a1a1aa', textTransform: 'uppercase' }}>
                  Archive 02
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.66rem', fontWeight: 600, color: '#f5f0e6', margin: '2px 0' }}>
                  Sealed Letter
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.48rem', color: '#d4af37' }}>
                  Tactile Spring
                </div>
              </div>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.54rem',
              fontFamily: 'var(--font-mono)',
              color: '#a1a1aa',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              paddingTop: '3px',
            }}>
              <span>Micro-Interactions</span>
              <span style={{ color: '#d4af37' }}>120Hz Responsive</span>
            </div>
          </div>
        );

      case 'buddy-billing':
        return (
          <div style={{
            height: '100%',
            width: '100%',
            background: '#FAF8F5',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '10px 12px',
            boxSizing: 'border-box',
            color: '#1C1917',
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid #E7E5E0',
              paddingBottom: '5px',
            }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', fontWeight: 700, color: '#9C5B07', letterSpacing: '0.04em' }}>
                BUDDY // FASTAPI CRON
              </span>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.54rem',
                color: '#15803D',
                background: '#DCFCE7',
                border: '1px solid #86EFAC',
                padding: '1px 5px',
                fontWeight: 700,
              }}>
                POPIA SECURE
              </span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '6px',
              margin: '3px 0',
            }}>
              <div style={{ background: '#FFFFFF', padding: '5px 7px', border: '1px solid #E7E5E0' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.52rem', color: '#78716C', textTransform: 'uppercase' }}>Invoices Sent</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 700, color: '#1C1917' }}>128 Settled</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', color: '#15803D', fontWeight: 600 }}>0% Failed Retries</div>
              </div>
              <div style={{ background: '#FFFFFF', padding: '5px 7px', border: '1px solid #E7E5E0' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.52rem', color: '#78716C', textTransform: 'uppercase' }}>Volume Processed</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 700, color: '#F8991D' }}>R48,600</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', color: '#78716C' }}>SAST Recurrence</div>
              </div>
            </div>

            <div style={{
              background: '#FFFFFF',
              border: '1px solid #E7E5E0',
              padding: '3px 6px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.54rem',
              fontFamily: 'var(--font-mono)',
            }}>
              <span style={{ color: '#78716C' }}>Lesson Audio LLM Recaps:</span>
              <span style={{ color: '#9C5B07', fontWeight: 700 }}>100% Automated</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  useEffect(() => {
    const pixelsPerSecond = 35; // Gertix scroll speed

    const animate = (timestamp) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const elapsed = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      if (!isPaused && !isDragging && scrollRef.current) {
        translateRef.current -= (pixelsPerSecond * elapsed) / 1000;
        
        // Measure half-width for seamless modulo wrapping
        const totalWidth = scrollRef.current.scrollWidth;
        const halfWidth = totalWidth / 2;

        if (Math.abs(translateRef.current) >= halfWidth) {
          translateRef.current += halfWidth;
        }

        scrollRef.current.style.transform = `translate3d(${translateRef.current}px, 0, 0)`;
      }

      animFrameId.current = requestAnimationFrame(animate);
    };

    animFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [isPaused, isDragging]);

  // Mouse & Touch Drag Scrubbing handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragStartTranslate.current = translateRef.current;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartX.current;
    translateRef.current = dragStartTranslate.current + deltaX;

    if (scrollRef.current) {
      scrollRef.current.style.transform = `translate3d(${translateRef.current}px, 0, 0)`;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section 
      style={{
        position: 'relative',
        padding: '100px 0 110px',
        borderBottom: 'var(--border-style)',
        backgroundColor: 'rgba(255, 255, 255, 0.45)',
        backdropFilter: 'blur(20px)',
        overflow: 'hidden',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        setIsDragging(false);
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="container" style={{ marginBottom: '40px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px',
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--accent-primary)',
              }}>
                Project Gallery
              </span>
              <span style={{
                width: '40px',
                height: '1px',
                background: 'var(--border-dark)',
              }} />
            </div>

            <h2 style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              textTransform: 'lowercase',
            }}>
              project archive ribbon.
            </h2>
          </div>

          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}>
            [ Drag to inspect • Pauses on hover ]
          </div>
        </div>
      </div>

      {/* Gertix Studio Endless Swiper Ribbon */}
      <div 
        style={{
          width: '100%',
          overflow: 'hidden',
          cursor: isDragging ? 'grabbing' : 'grab',
          userSelect: 'none',
        }}
      >
        <div 
          ref={scrollRef}
          style={{
            display: 'inline-flex',
            willChange: 'transform',
          }}
        >
          {allItems.map((item, idx) => (
            <article
              key={`${item.id}-${idx}`}
              onClick={() => {
                if (!isDragging) {
                  const target = document.getElementById('portfolio');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                  onSelectProject?.(item.projectId);
                }
              }}
              style={{
                width: '380px',
                flexShrink: 0,
                border: '1px dashed rgba(0, 0, 0, 0.2)',
                borderRight: 'none',
                background: 'var(--bg-surface)',
                backdropFilter: 'blur(20px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '36px 32px',
                minHeight: '480px',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg-surface)';
              }}
            >
              {/* Header: Title & Year */}
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px',
                  borderBottom: 'var(--border-style)',
                  paddingBottom: '14px',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: item.accent,
                  }}>
                    #{item.number}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--text-muted)',
                  }}>
                    {item.year}
                  </span>
                </div>

                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--text-muted)',
                  marginBottom: '8px',
                }}>
                  {item.category}
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                  color: 'var(--text-primary)',
                  marginBottom: '20px',
                }}>
                  {item.title}
                </h3>

                {/* Architectural Graphic / Visual Frame */}
                <div style={{
                  height: '155px',
                  border: 'var(--border-style)',
                  marginBottom: '24px',
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'var(--bg-primary)',
                }}>
                  {renderLiveCaseVisual(item)}
                </div>

                <p style={{
                  fontSize: '0.92rem',
                  lineHeight: 1.55,
                  color: 'var(--text-secondary)',
                }}>
                  {item.excerpt}
                </p>
              </div>

              {/* Bottom Action: Gertix read-more */}
              <div style={{
                borderTop: 'var(--border-style)',
                paddingTop: '20px',
                marginTop: '28px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--text-primary)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}>
                  <span>Inspect Case</span>
                  <span style={{ color: item.accent }}>→</span>
                </span>
                
                <span style={{
                  width: '8px',
                  height: '8px',
                  background: item.accent,
                  display: 'inline-block',
                }} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
