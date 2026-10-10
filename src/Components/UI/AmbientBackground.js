import { useEffect, useRef } from 'react';
import './AmbientBackground.css';

// Fixed page backdrop: film grain plus a soft light that eases toward the cursor.
const AmbientBackground = () => {
  const lightRef = useRef(null);

  useEffect(() => {
    const light = lightRef.current;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !window.matchMedia('(pointer: fine)').matches) return undefined;

    const target = { x: window.innerWidth * 0.7, y: window.innerHeight * 0.3 };
    const current = { ...target };
    let frame = null;

    const tick = () => {
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;
      light.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      const settled = Math.abs(target.x - current.x) < 0.5 && Math.abs(target.y - current.y) < 0.5;
      frame = settled ? null : window.requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!frame) frame = window.requestAnimationFrame(tick);
    };

    light.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="ambient" aria-hidden="true">
      <div ref={lightRef} className="ambient-light" />
      <div className="ambient-grain" />
    </div>
  );
};

export default AmbientBackground;
