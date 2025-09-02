"use client";
import { useEffect, useRef, useState, PropsWithChildren } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'fade';

interface AnimatedSectionProps {
  direction?: Direction;
  delayMs?: number;
  className?: string;
  repeat?: boolean; // if true, animate in/out on every enter/leave
}

export default function AnimatedSection({
  children,
  direction = 'fade',
  delayMs = 0,
  className = '',
  repeat = true
}: PropsWithChildren<AnimatedSectionProps>) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (!repeat) observer.unobserve(entry.target);
          } else if (repeat) {
            setVisible(false);
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [repeat]);

  const initialTransform = (() => {
    switch (direction) {
      case 'up':
        return 'translate-y-6';
      case 'down':
        return '-translate-y-6';
      case 'left':
        return 'translate-x-6';
      case 'right':
        return '-translate-x-6';
      case 'fade':
      default:
        return '';
    }
  })();

  const activeTransform = 'translate-x-0 translate-y-0';

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={[
        'transition-all duration-700 ease-out will-change-transform',
        visible ? 'opacity-100 ' + activeTransform : 'opacity-0 ' + initialTransform,
        className
      ].join(' ')}
    >
      {children}
    </div>
  );
}
