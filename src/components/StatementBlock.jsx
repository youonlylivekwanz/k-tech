import React from 'react';
import { motion } from 'framer-motion';

export default function StatementBlock() {
  const kpis = [
    { number: '03', label: 'Flagship Architectural Case Studies' },
    { number: '100%', label: 'Relational & Technical Integrity' },
    { number: '60 FPS', label: 'High-Motion Visual Performance' },
    { number: 'BSc', label: 'Computing & Systems Architecture' },
  ];

  return (
    <section 
      style={{
        borderBottom: 'var(--border-style)',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(16px)',
      }}
    >
      <div className="container" style={{ padding: '80px 32px' }}>
        {/* Large Statement Text with Bold Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: '1020px',
            marginBottom: '64px',
          }}
        >
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            fontWeight: 600,
            color: 'var(--accent-primary)',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            marginBottom: '20px',
          }}>
            Statement & Engineering Philosophy
          </div>

          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1.5rem, 3.2vw, 2.7rem)',
            fontWeight: 400,
            lineHeight: 1.3,
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
          }}>
            I combine rigorous <strong>computer science foundations</strong> with <strong>full-stack engineering</strong>, <strong>C++/Python systems</strong>, and <strong>interactive UI/UX design</strong>. Bridging high-level <strong>system architecture</strong> with polished, responsive digital interfaces tailored for commercial scale.
          </p>
        </motion.div>

        {/* Gertix Architectural KPI Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          border: 'var(--border-style)',
          background: 'var(--bg-surface)',
          backdropFilter: 'blur(20px)',
        }}>
          {kpis.map((kpi, idx) => (
            <div 
              key={idx}
              style={{
                padding: '32px 28px',
                borderRight: idx < kpis.length - 1 ? 'var(--border-style)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(2.4rem, 4vw, 3.4rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                lineHeight: 1,
                letterSpacing: '-0.03em',
                marginBottom: '12px',
              }}>
                {kpi.number}
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                lineHeight: 1.4,
              }}>
                {kpi.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
