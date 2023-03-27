import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function FadeIn({ delay = 0, children }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timeoutId);
  }, [delay]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;
