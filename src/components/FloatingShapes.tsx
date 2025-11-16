import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const FloatingShapes = () => {
  const shapesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!shapesRef.current) return;

    const shapes = shapesRef.current.querySelectorAll(".float-shape");
    
    shapes.forEach((shape, index) => {
      gsap.to(shape, {
        y: `${(index % 2 === 0 ? 1 : -1) * 30}px`,
        x: `${(index % 3 === 0 ? 1 : -1) * 20}px`,
        rotation: index % 2 === 0 ? 5 : -5,
        duration: 4 + index,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <div ref={shapesRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top left blob */}
      <div className="float-shape absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-full blur-3xl" />
      
      {/* Top right blob */}
      <div className="float-shape absolute -top-32 right-1/4 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-primary/10 rounded-full blur-3xl" />
      
      {/* Middle blob */}
      <div className="float-shape absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-full blur-2xl" />
      
      {/* Bottom blob */}
      <div className="float-shape absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-br from-blue-500/8 to-primary/8 rounded-full blur-3xl" />
    </div>
  );
};
