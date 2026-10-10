export const textVariant = (delay) => ({
  hidden: { y: -30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.7,
      delay,
    },
  },
});

export const fadeIn = (direction, type, delay, duration) => {
  const x = direction === "left" ? 60 : direction === "right" ? -60 : 0;
  const y = direction === "up" ? 60 : direction === "down" ? -60 : 0;

  return {
    hidden: { x, y, opacity: 0 },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration: duration * 0.65,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay, duration) => ({
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration: duration * 0.65,
      ease: "easeOut",
    },
  },
});

export const slideIn = (direction, type, delay, duration) => {
  const x = direction === "left" ? "-100%" : direction === "right" ? "100%" : 0;
  const y = direction === "up" ? "100%" : direction === "down" ? "100%" : 0;

  return {
    hidden: { x, y },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration: duration * 0.65,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren: delayChildren || 0,
    },
  },
});

export const viewport = {
  once: true,
  amount: 0.15,
};

export const sectionVariant = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.46, 0.45, 0.94],
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

export const itemVariant = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};
