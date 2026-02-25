import { FaCopyright } from "react-icons/fa6";
import { motion } from "framer-motion";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <motion.div className="flex flex-col w-full text-[var(--navbar-bg)] px-4 py-4 min-h-[10vh] items-center justify-center font-bold"
    initial={{
      y: 100,
      opacity: 0,
      visibility: "hidden"
    }} 
    whileInView={{
      y: 0,
      opacity: 1,
      visibility: "visible"
    }}
    transition={{
      duration: 1,
      ease: "easeInOut"
    }}>
      <p className="text-center">Built with TypeScript, ReactJs, Vite.js, TailwindCss, Framer Motion, and Vercel.</p>
      <p>Star this project on Github</p>
      <p className="flex items-center gap-2"><FaCopyright/> Frank Topzy {year}</p>
    </motion.div>
  )
}

export default Footer
