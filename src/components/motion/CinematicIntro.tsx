"use client";

import { motion } from "framer-motion";

const panel = {
  initial: { x: "0%" },
  animate: { x: "100%" },
};

export function CinematicIntro() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[80] overflow-hidden" aria-hidden>
      <motion.div
        className="absolute inset-0 bg-[#050506]"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 0.78, duration: 0.5, ease: "easeOut" }}
      />
      {["#050506", "#0b1114", "#10282e"].map((color, index) => (
        <motion.div
          key={color}
          className="absolute inset-0"
          style={{ backgroundColor: color }}
          variants={panel}
          initial="initial"
          animate="animate"
          transition={{
            delay: 0.12 + index * 0.11,
            duration: 0.82,
            ease: [0.76, 0, 0.24, 1],
          }}
        />
      ))}
    </div>
  );
}
