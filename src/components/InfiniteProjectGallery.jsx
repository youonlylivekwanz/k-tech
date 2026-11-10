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
                  height: '140px',
                  border: 'var(--border-style)',
                  background: 'rgba(248, 249, 250, 0.9)',
                  marginBottom: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '20px',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '8px',
                    left: '12px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.66rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--text-muted)',
                  }}>
                    Live Case
                  </div>

                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    padding: '6px 14px',
                    border: 'var(--border-style)',
                    background: '#ffffff',
                    color: item.accent,
                  }}>
                    {item.tag}
                  </span>
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
