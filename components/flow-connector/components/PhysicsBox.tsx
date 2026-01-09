import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  useVelocity,
} from "framer-motion";
import { useWindowSize } from "../utils";

interface PhysicsBoxProps {
  children: React.ReactNode;
  initialX: number;
  initialY: number;
  mass?: number;
  rotation?: number;
  isMobile?: boolean; // New Prop to disable physics on mobile
  className?: string;
}

const PhysicsBox: React.FC<PhysicsBoxProps> = ({
  children,
  initialX,
  initialY,
  mass = 1,
  rotation = 0,
  isMobile = false,
  className,
}) => {
  const [windowWidth, windowHeight] = useWindowSize();
  const boxRef = useRef<HTMLDivElement>(null);

  // Motion Values
  const x = useMotionValue(initialX);
  const y = useMotionValue(initialY);
  const rotate = useMotionValue(rotation);

  // Velocities
  const xVelocity = useVelocity(x);
  const yVelocity = useVelocity(y);

  // State
  const isDragging = useRef(false);
  const [zIndex, setZIndex] = useState(10);

  // Physics Constants
  const friction = 0.92; // INCREASED FRICTION (Lower number = faster slowdown)
  const bounceFactor = -0.6; // Less bouncy for realism
  const minVelocity = 0.2;

  // Floating Animation State (for when idle)
  const time = useRef(Math.random() * 100);

  // Internal velocity tracker
  const vx = useRef(0);
  const vy = useRef(0);
  const vr = useRef(0);

  // --- INTERACTION HANDLERS ---
  const handleTap = () => {
    if (isMobile) return; // Disable tap physics on mobile
    // Spin impulse: Random direction, strong force
    const spinForce =
      (Math.random() > 0.5 ? 1 : -1) * (30 + Math.random() * 20);
    vr.current += spinForce;

    // Jump impulse: Slight pop upwards
    vy.current -= 5;
  };

  // --- THE PHYSICS LOOP ---
  useAnimationFrame((t, delta) => {
    // If mobile, skip physics calculations entirely
    if (isMobile || !boxRef.current || !windowWidth || !windowHeight) return;

    if (isDragging.current) {
      vx.current = xVelocity.get();
      vy.current = yVelocity.get();
      vr.current = vx.current * 0.1;
      return;
    }

    // Apply Friction
    vx.current *= friction;
    vy.current *= friction;
    vr.current *= friction;

    const speed = Math.sqrt(vx.current ** 2 + vy.current ** 2);

    // Continue applying rotational physics even if linear speed is slow,
    // unless rotation is also very slow
    if (speed < minVelocity && Math.abs(vr.current) < 0.5) {
      // --- FLOATING MODE ---
      time.current += delta * 0.001;
      const floatX = Math.sin(time.current) * 0.3;
      const floatY = Math.cos(time.current * 0.8) * 0.3;

      x.set(x.get() + floatX);
      y.set(y.get() + floatY);

      // Slowly return to mostly upright only if NOT spinning fast
      rotate.set(rotate.get() * 0.98);
    } else {
      // --- DYNAMIC MODE ---
      let nextX = x.get() + vx.current * (delta / 16);
      let nextY = y.get() + vy.current * (delta / 16);

      const width = boxRef.current.offsetWidth;
      // const height = boxRef.current.offsetHeight; // Unused for now

      // Wall Collisions
      if (nextX + width / 2 > windowWidth) {
        nextX = windowWidth - width / 2;
        vx.current *= bounceFactor;
        vr.current += (Math.random() - 0.5) * 5;
      } else if (nextX - width / 2 < 0) {
        nextX = width / 2;
        vx.current *= bounceFactor;
        vr.current += (Math.random() - 0.5) * 5;
      }

      // Soft Floor / Ceiling (Allow some overflow)
      if (nextY > windowHeight + 200) {
        nextY = -200; // Loop back top
        vy.current = Math.abs(vy.current) * 0.5;
      } else if (nextY < -400) {
        nextY = -400;
        vy.current *= bounceFactor;
      }

      x.set(nextX);
      y.set(nextY);
      rotate.set(rotate.get() + vr.current * (delta / 16));
    }
  });

  // Mobile specific styles vs Desktop physics styles
  if (isMobile) {
    return (
      <div
        className={`absolute ${className || ""}`}
        style={{
          left: initialX,
          top: initialY,
          transform: `rotate(${rotation}deg)`,
          zIndex: 10,
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={boxRef}
      style={{ x, y, rotate, zIndex }}
      className={`absolute cursor-grab active:cursor-grabbing touch-none ${
        className || ""
      }`}
      drag
      dragMomentum={false}
      onDragStart={() => {
        isDragging.current = true;
        setZIndex(50);
      }}
      onDragEnd={() => {
        isDragging.current = false;
        setZIndex(10);
      }}
      onTap={handleTap} // Added Click-to-Spin Interaction
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
};

export default PhysicsBox;
