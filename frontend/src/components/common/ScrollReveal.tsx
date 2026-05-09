'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, Variant } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const ScrollReveal = ({ 
  children, 
  width = "100%", 
  className, 
  delay = 0.2,
  direction = 'up'
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
    },
  };

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "visible" }} className={className}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};
