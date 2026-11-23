import { useEffect, useRef, useState } from 'react';

const Reveal = ({ children, className = '', delay = 0, as: Tag = 'div', style = {} }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  // Once the entrance finishes, drop the stagger delay so hover effects respond instantly.
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'in-view' : ''} ${className}`}
      style={{ ...style, transitionDelay: inView && !settled ? `${delay}ms` : '0ms' }}
      onTransitionEnd={(e) => {
        if (inView && e.target === ref.current && e.propertyName === 'opacity') setSettled(true);
      }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
