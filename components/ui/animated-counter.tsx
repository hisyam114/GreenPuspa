"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export function AnimatedCounter({ value, suffix = "", prefix = "", duration = 2 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      if (start === end) return;
      let totalMilSecDur = parseInt(String(duration));
      if (totalMilSecDur === 0) totalMilSecDur = 2;
      const incrementTime = (totalMilSecDur / end) * 1000;

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime > 0 ? incrementTime : 10);
      
      // Fallback for large numbers
      if (end > 100) {
        clearInterval(timer);
        let startTime: number;
        const step = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
          setCount(Math.floor(progress * end));
          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            setCount(end);
          }
        };
        window.requestAnimationFrame(step);
      }
    }
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="font-heading font-bold text-4xl md:text-5xl text-primary">
      {prefix}{count}{suffix}
    </span>
  );
}
