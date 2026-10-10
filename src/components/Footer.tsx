import { FaCopyright, FaGithub, FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="w-full bg-[var(--card-bg)] text-[var(--text-color)] border-t border-[var(--border-color)] px-4 py-8 flex flex-col items-center justify-center gap-3 transition-colors duration-300">
      <p className="text-center text-sm sm:text-base opacity-90 max-w-xl">
        Built with <span className="font-semibold text-[#E6E49F]">TypeScript, React, Vite, TailwindCSS, Framer Motion</span> and hosted on Vercel.
      </p>
      
      <Link 
        to="https://github.com/FrankTopzy" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full border border-[var(--border-color)] hover:border-[#E6E49F] hover:bg-[#E6E49F]/10 hover:text-[#E6E49F] transition-all"
      >
        <FaGithub className="text-base" /> Star this project on GitHub
      </Link>

      <p className="flex items-center gap-2 text-xs opacity-75 mt-1">
        <FaCopyright /> {year} Temitope Adeoye (Frank Topzy)
      </p>
    </footer>
  );
}

export default Footer;
