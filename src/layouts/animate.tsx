"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimateProps {
  children: ReactNode;
}

const Animate: React.FC<AnimateProps> = ({ children }) => {
  return (
    // <motion.div
    //   initial={{ opacity: 0, scale: 0.5 }}
    //   animate={{ opacity: 1, scale: 1 }}
    //   transition={{ duration: 0.2 }}
    // >
    <motion.div
      // initial={{ opacity: 0, scale: 0.5 }}
      // animate={{ opacity: 1, scale: 1 }}
      // transition={{ duration: 0.5 }}
      initial={{ y: -20, opacity: 0, scale: 0.99, rotate: "0.25deg" }}
      animate={{ y: 0, opacity: 1, scale: 1, rotate: "0deg" }}
      transition={{ duration: 0.25, delay: 0.1 }}
      // transitionTimingFunction="cubic-bezier(.4,0,.2,1)"
      // transformOrigin="0 0"
      exit={{ y: 0 }}
      // mb={mb}
    >
      {children}
    </motion.div>
  );
};

export default Animate;
