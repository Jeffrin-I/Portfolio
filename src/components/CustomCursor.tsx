import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [hoverType, setHoverType] = useState<string | null>(null);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const dotX = useSpring(cursorX, { damping: 30, stiffness: 500 });
  const dotY = useSpring(cursorY, { damping: 30, stiffness: 500 });
  const outlineX = useSpring(cursorX, springConfig);
  const outlineY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = ['A', 'BUTTON', 'INPUT', 'TEXTAREA'].includes(target.tagName) ||
                           target.closest('.interactive') ||
                           target.classList.contains('cursor-pointer');
      
      if (isInteractive) {
        setIsHovering(true);
        if (target.tagName === 'A' || target.closest('a')) {
          setHoverType('link');
        } else {
          setHoverType('button');
        }
      } else {
        setIsHovering(false);
        setHoverType(null);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Small central dot */}
      <motion.div
        className="cursor-dot fixed pointer-events-none z-[10000]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      
      {/* Outer refined circle */}
      <motion.div
        className="cursor-outline fixed pointer-events-none z-[9999] flex items-center justify-center"
        style={{
          x: outlineX,
          y: outlineY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovering ? 80 : 40,
          height: isHovering ? 80 : 40,
          backgroundColor: isHovering ? 'rgba(26, 26, 26, 0.03)' : 'transparent',
          borderWidth: isHovering ? '0.5px' : '1px',
          opacity: 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      >
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: isHovering && hoverType === 'link' ? 1 : 0,
            scale: isHovering && hoverType === 'link' ? 1 : 0.5 
          }}
          className="text-[8px] uppercase tracking-[0.2em] font-bold text-premium-black"
        >
          View
        </motion.span>
      </motion.div>
    </>
  );
}
