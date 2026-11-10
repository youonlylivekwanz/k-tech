import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const marqueeItems = [
    'Full-Stack Web Engineering',
    'React 19 & Next.js',
    'C++ & Python Software',
    'Interactive 3D & WebGL',
    'Commercial Dashboards',
    'FastAPI Automation',
    'Clean Architecture & OOA/OOD',
    'POPIA & Relational Databases',
  ];

  return (
    <section id="home" style={{ paddingTop: '76px', position: 'relative' }}>
      <div 
        className="container"
        style={{
          paddingTop: '90px',
          paddingBottom: '80px',
          borderBottom: 'var(--border-style)',
        }}
      >
        <div style={{ maxWidth: '1080px' }}>
          {/* Eyebrow / Category */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '28px',
            }}
          >
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--accent-primary)',
            }}>
              01 Software Practice // K Tech
            </span>
            <span style={{
              width: '40px',
              height: '1px',
              background: 'var(--border-dark)',
            }} />
          </motion.div>

          {/* Gertix-Style Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(3rem, 7.5vw, 6.5rem)',
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: '-0.04em',
              color: 'var(--text-primary)',
              textTransform: 'lowercase',
              marginBottom: '36px',
            }}
          >
            engineering robust <br />
            <span style={{ color: 'var(--text-secondary)' }}>digital platforms.</span>
          </motion.h1>

          {/* Intro text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.45rem)',
              lineHeight: 1.5,
              color: 'var(--text-secondary)',
              maxWidth: '820px',
              marginBottom: '44px',
              fontWeight: 400,
            }}
          >
            I am <strong>Kwanele Magutshwa</strong> (K Tech) — a full-stack software engineer (C++ / Python / TypeScript) and UI/UX designer. Combining rigorous computer science foundations with hands-on web engineering, interactive 3D interfaces, and high-concurrency commercial platforms.
          </motion.p>

          {/* Sharp Action Button with Arrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            <a href="#portfolio" className="cb-btn">
              <span>View Case Studies</span>
              <span aria-hidden="true">→</span>
            </a>

            <a href="#contact" className="cb-btn-secondary">
              <span>Get in Touch</span>
              <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Gertix Studio Infinite Marquee Ticker */}
      <div className="marquee-container" aria-hidden="true">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="marquee-item">
              <span>{item}</span>
              <span className="marquee-dot" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
