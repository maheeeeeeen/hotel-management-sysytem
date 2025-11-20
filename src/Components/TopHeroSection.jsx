/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import bg1 from '../assets/bg1.jpg'
export default function TopHeroSection({ children }) {
  return (
   <motion.section
  className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url(${bg1})`,
    }}
  ></div>

  <div className="relative max-w-4xl mx-auto text-center">
    {children}
  </div>
</motion.section>

  );
}
