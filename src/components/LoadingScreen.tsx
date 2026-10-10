import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LOADING_DURATION = 3200;

function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const totalDuration = LOADING_DURATION - 500;

    let rafId: number;
    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / totalDuration) * 100));
      setProgress(pct);
      if (pct < 100) {
        rafId = requestAnimationFrame(tick);
      } else {
        setExiting(true);
        setTimeout(onComplete, 500);
      }
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="loader"
          className="loader-overlay"
          exit={{ opacity: 0, scale: 1.06 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Floating particles */}
          <div className="loader-particles" aria-hidden>
            {Array.from({ length: 18 }).map((_, i) => (
              <span
                key={i}
                className="loader-particle"
                style={{ "--idx": i } as React.CSSProperties}
              />
            ))}
          </div>

          {/* Orbiting rings */}
          <div className="loader-rings" aria-hidden>
            <div className="loader-ring loader-ring--1" />
            <div className="loader-ring loader-ring--2" />
            <div className="loader-ring loader-ring--3" />
          </div>

          {/* Center logo */}
          <motion.div
            className="loader-logo"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <span className="loader-logo-text">TA</span>
            <div className="loader-logo-glow" />
          </motion.div>

          {/* Progress info */}
          <motion.div
            className="loader-bottom"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <p className="loader-label">Crafting your experience…</p>
            <div className="loader-bar-track">
              <div className="loader-bar-fill" style={{ width: `${progress}%` }} />
            </div>
            <span className="loader-percent">{progress}%</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;
