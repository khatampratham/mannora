import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const InteractiveParticles = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false }, // keep it false to stay inside parent
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            resize: true,
          },
          modes: { repulse: { distance: 120, duration: 0.4 } },
        },
        particles: {
          color: { value: ['#3b82f6', '#60a5fa', '#93c5fd'] },
          links: { enable: true, distance: 120, color: '#3b82f6', opacity: 0.3, width: 1 },
          collisions: { enable: false },
          move: { enable: true, speed: 1.5, direction: 'none', random: true, outModes: 'out' },
          number: { value: 80, density: { enable: true, area: 1200 } },
          opacity: { value: 0.6 },
          shape: { type: 'circle' },
          size: { value: { min: 2, max: 5 } },
        },
        detectRetina: true,
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    />
  );
};

export default InteractiveParticles;
