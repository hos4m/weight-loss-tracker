import React, { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const FadingWrapper: FC = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
