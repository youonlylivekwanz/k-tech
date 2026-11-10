import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import StatementBlock from './components/StatementBlock';
import RollingStackedProjects from './components/RollingStackedProjects';
import Capabilities from './components/Capabilities';
import InfiniteProjectGallery from './components/InfiniteProjectGallery';
import ContactColophon from './components/ContactColophon';

export default function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'clip' }}>
      {/* Site Header */}
      <Navigation />

      {/* Main Flow */}
      <main>
        <Hero />
        <StatementBlock />
        
        {/* Gertix Studio Rolling Stacked Panels */}
        <RollingStackedProjects />

        <Capabilities />
        
        {/* Infinite Project Ribbon */}
        <InfiniteProjectGallery />
      </main>

      {/* Contact & Footer */}
      <ContactColophon />
    </div>
  );
}
