import React from "react";
import { motion } from "framer-motion";

export function Heading1({ text }) {
  return (
    <motion.h1
      className="capitalize text-4xl md:text-6xl font-bold text-white mb-8"
      style={{ fontFamily: "Blueberry, sans-serif" }}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {text}
    </motion.h1>
  );
}

export function Heading2({ text }) {
  return (
    <motion.h3
      className="capitalize text-3xl font-semibold text-black"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      {text}
    </motion.h3>
  );
}

export function ParagraphText({ text , className }) {
    return (

  <motion.p
    className={`capitalize text-md  text-black ${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
  >
    {text}
  </motion.p>
    )
}
