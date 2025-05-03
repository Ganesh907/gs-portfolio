// import React, { useEffect, useState } from 'react';
// import { motion as Motion, useMotionValue, useSpring } from 'framer-motion';

// const Cursor = () => {
//   const [isHovering, setIsHovering] = useState(false);

//   // Mouse position values
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   // Springs for smoother animations
//   const springX = useSpring(mouseX, { stiffness: 300, damping: 25 });
//   const springY = useSpring(mouseY, { stiffness: 300, damping: 25 });

//   const trail1X = useSpring(mouseX, { stiffness: 200, damping: 30 });
//   const trail1Y = useSpring(mouseY, { stiffness: 200, damping: 30 });
//   const trail2X = useSpring(mouseX, { stiffness: 140, damping: 28 });
//   const trail2Y = useSpring(mouseY, { stiffness: 140, damping: 28 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       mouseX.set(e.clientX - 15);
//       mouseY.set(e.clientY - 15);
//     };

//     const handleMouseOver = (e) => {
//       const hovering = !!e.target.closest('a, button, input, textarea, select, label');
//       // Slight delay to let motion position settle
//       setTimeout(() => setIsHovering(hovering), 10);
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('mouseover', handleMouseOver);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('mouseover', handleMouseOver);
//     };
//   }, [mouseX, mouseY]);

//   return (
//     <>
//       {/* Trail Cursors */}
//       <Motion.div
//         className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9997]"
//         style={{
//           x: trail2X,
//           y: trail2Y,
//           background: 'radial-gradient(circle, rgba(0,184,219,0.15) 0%, transparent 70%)',
//         }}
//       />
//       <Motion.div
//         className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9998]"
//         style={{
//           x: trail1X,
//           y: trail1Y,
//           background: 'radial-gradient(circle, rgba(0,184,219,0.25) 0%, transparent 70%)',
//         }}
//       />

//       {/* Main Custom Cursor */}
//       <Motion.div
//         drag
//         dragConstraints={{ top: 0, left: 0, right: window.innerWidth, bottom: window.innerHeight }}
//         className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
//         style={{
//           x: springX,
//           y: springY,
//           width: isHovering ? 50 : 30,
//           height: isHovering ? 50 : 30,
//           background: 'radial-gradient(circle at 30% 30%, #00f0ff, #00b8db)',
//           boxShadow: `
//             0 0 10px rgba(0,255,255,0.3),
//             0 0 20px rgba(0,184,219,0.4),
//             0 0 40px rgba(0,184,219,0.3)
//           `,
//           border: '1px solid rgba(255,255,255,0.2)',
//           mixBlendMode: 'screen',
//           transition: 'width 0.15s ease, height 0.15s ease',
//         }}
//       />
//     </>
//   );
// };

// export default Cursor;

import React, { createContext, useEffect, useState } from 'react';
import { motion as Motion, useMotionValue, useSpring } from 'framer-motion';

// Create a Context to share `isHovering` state
const HoverContext = createContext();

// export const useHover = () => useContext(HoverContext);

const Cursor = () => {
  const [isHovering, setIsHovering] = useState(false);

  // Mouse position values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for smoother animations
  const springX = useSpring(mouseX, { stiffness: 300, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 25 });

  const trail1X = useSpring(mouseX, { stiffness: 200, damping: 30 });
  const trail1Y = useSpring(mouseY, { stiffness: 200, damping: 30 });
  const trail2X = useSpring(mouseX, { stiffness: 140, damping: 28 });
  const trail2Y = useSpring(mouseY, { stiffness: 140, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 15);
      mouseY.set(e.clientY - 15);
    };

    const handleMouseOver = (e) => {
      const hovering = !!e.target.closest('a, button, input, textarea, select, label');
      setTimeout(() => setIsHovering(hovering), 10);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <HoverContext.Provider value={{ isHovering }}>
      {/* Trail Cursors */}
      <Motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9997]"
        style={{
          x: trail2X,
          y: trail2Y,
          background: 'radial-gradient(circle, rgba(0,184,219,0.15) 0%, transparent 70%)',
        }}
      />
      <Motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9998]"
        style={{
          x: trail1X,
          y: trail1Y,
          background: 'radial-gradient(circle, rgba(0,184,219,0.25) 0%, transparent 70%)',
        }}
      />

      {/* Main Custom Cursor */}
      <Motion.div
        drag
        dragConstraints={{ top: 0, left: 0, right: window.innerWidth, bottom: window.innerHeight }}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{
          x: springX,
          y: springY,
          width: isHovering ? 50 : 30,
          height: isHovering ? 50 : 30,
          background: isHovering?'black':'radial-gradient(circle at 30% 30%, #00f0ff, #00b8db)',
          boxShadow: `
            0 0 10px rgba(0,255,255,0.3),
            0 0 20px rgba(0,184,219,0.4),
            0 0 40px rgba(0,184,219,0.3)
          `,
          border: '1px solid rgba(255,255,255,0.2)',
          mixBlendMode: 'screen',
          transition: 'width 0.15s ease, height 0.15s ease',
        }}
      />
    </HoverContext.Provider>
  );
};

export default Cursor;
