import { useState, useEffect } from "react";
export default function Trail() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const updateMousePosition = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const { x, y } = mousePosition;

  const trail = { x: x / 5, y: y / 5 };

  const angle = -(Math.atan2(trail.y, trail.x) * 180) / Math.PI;

  const trailLineHeight = Math.sqrt(trail.x * trail.x + trail.y * trail.y);

  return (
    <>
      <span
        style={{
          position: "fixed",
          left: `${x + 20}px`,
          top: `${y + 20}px`,
          transition: "0.5s linear",
          zIndex: "999",
          borderBottom: `${trailLineHeight}px solid #2dd4bf`,
          borderRight: `${trailLineHeight}px solid transparent`,
        }}
        className={`anim-fade-out`}
      />
      {/* <div
        style={{
          position: "fixed",
          top: `${y}px`,
          left: `${x}px`,
          width: `${trail.x}`,
          height: `${trail.y}`,
        }}
      >
        <div
          className={`absolute inset-0 hypotenuse bg-[#2dd4bf]`}
          style={{
            transform: `rotate(${angle}deg) translate(${x + 20}px, ${
              y + 20
            }px)`,
            height: trailLineHeight,
            width: "20px",
          }}
        />
        <div
          className={`absolute inset-0 base bg-[#2dd4bf]`}
          style={{
            transform: `translate(${x + trail.x + 20}px, ${y + 20}px)`,
            height: "20px",
            width: trail.x,
          }}
        />
        <div
          className={`absolute inset-0 perp bg-[#2dd4bf]`}
          style={{
            transform: `translate(${x + 20}px, ${y + 20}px)`,
            width: "20px",
            height: trail.y,
          }}
        />
      </div> */}
    </>
  );
}
