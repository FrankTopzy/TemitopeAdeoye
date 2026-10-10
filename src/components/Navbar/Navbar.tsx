import Styles from './navbar.module.css';
import { BiCode, BiCodeAlt } from 'react-icons/bi';
import { Link } from 'react-scroll';
import { useContext, useEffect, useRef, useState } from 'react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { navLinks } from '../../data/constants';
import type { NavbarType } from '../../data/types';
import { PortfolioContext, type ThemeMode } from '../Context';
import { motion, AnimatePresence } from 'framer-motion';
import { MdSunny, MdDarkMode, MdMonitor } from 'react-icons/md';

const THEMES: { mode: ThemeMode; icon: React.ReactNode; label: string }[] = [
  { mode: 'light',  icon: <MdSunny    className="text-lg" />, label: 'Light'  },
  { mode: 'system', icon: <MdMonitor  className="text-lg" />, label: 'System' },
  { mode: 'dark',   icon: <MdDarkMode className="text-lg" />, label: 'Dark'   },
];

function Navbar({ isOpen, setIsOpen }: NavbarType) {
  const [scrollUp, setScrollUp]       = useState<boolean>(false);
  const [showThemeMenu, setShowTheme] = useState(false);
  const navRef   = useRef<HTMLElement | null>(null);
  const menuRef  = useRef<HTMLDivElement | null>(null);
  const themeRef = useRef<HTMLDivElement | null>(null);

  const ctx      = useContext(PortfolioContext);
  const { setIsTop } = ctx ?? {};
  const theme    = ctx?.theme    ?? 'dark';
  const setTheme = ctx?.setTheme ?? (() => {});

  useEffect(() => {
    function handleScroll(): void {
      window.scrollY > 10 ? setScrollUp(true)  : setScrollUp(false);
      window.scrollY < 5  ? setIsTop && setIsTop(true) : setIsTop && setIsTop(false);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setIsTop]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (themeRef.current && !themeRef.current.contains(e.target as Node)) {
        setShowTheme(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activeTheme = THEMES.find(t => t.mode === theme) ?? THEMES[2];

  return (
    <div className="flex justify-center w-full fixed z-[23]">
      <motion.header
        className={`${Styles.header} flex items-center w-[100%] sm:w-[95%] md:w-[90%] xl:w-[65%] justify-between relative top-5 bg-[var(--navbar-color)] backdrop-blur-md text-[var(--text-color)] border border-[var(--border-color)] shadow-lg shadow-[var(--shadow-color)] py-1.5 xl:py-3 px-3 xl:px-8 rounded-2xl hover:scale-[1.01] transition-all z-20`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0,    opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* Logo */}
        <div className="flex items-center font-[Lobster] font-bold gap-1 cursor-pointer">
          <BiCode className="text-2xl font-bold text-[#E6E49F]" />
          <motion.span
            className={`${scrollUp ? 'text-3xl sm:text-4xl' : 'text-4xl sm:text-5xl'} text-[var(--text-color)] max-md:text-3xl transition-all`}
            initial={{ rotate: '0deg' }}
            animate={{ rotate: '360deg' }}
          >
            TA
          </motion.span>
          <BiCodeAlt className="text-2xl font-bold text-[#E6E49F]" />
        </div>

        {/* Right side */}
        <div className="flex relative items-center gap-3">
          {/* Desktop nav */}
          <nav className={Styles.navbar}>
            <ul className="hidden flex-col md:flex md:flex-row gap-6 xl:gap-8 text-[13px] md:text-[15px] font-medium">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.id}
                  spy
                  smooth
                  duration={300}
                  offset={-80}
                  className="flex items-center gap-1.5 justify-center cursor-pointer whitespace-nowrap text-[var(--text-color)] hover:text-[#E6E49F] hover:translate-y-[-2px] transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor">
                    <path d={link.svgPath} />
                  </svg>
                  {link.title}
                </Link>
              ))}
            </ul>
          </nav>

          {/* Theme toggle */}
          <div className="relative" ref={themeRef}>
            <motion.button
              id="theme-toggle-btn"
              onClick={() => setShowTheme(v => !v)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] hover:border-[#E6E49F] text-[var(--text-color)] transition-all text-sm cursor-pointer shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Change theme"
              aria-label="Change theme"
            >
              {activeTheme.icon}
              <span className="hidden sm:inline text-xs font-semibold">{activeTheme.label}</span>
            </motion.button>

            <AnimatePresence>
              {showThemeMenu && (
                <motion.div
                  className="absolute right-0 top-12 w-36 rounded-xl overflow-hidden shadow-2xl border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-color)] z-30"
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.18 }}
                >
                  {THEMES.map(({ mode, icon, label }) => (
                    <button
                      key={mode}
                      id={`theme-${mode}-btn`}
                      onClick={() => { setTheme(mode); setShowTheme(false); }}
                      className={[
                        'w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-all cursor-pointer hover:bg-[#E6E49F]/20',
                        theme === mode ? 'text-[#E6E49F] font-bold bg-[#E6E49F]/10' : 'text-[var(--text-color)]'
                      ].join(' ')}
                    >
                      {icon} {label}
                      {theme === mode && (
                        <span className="ml-auto w-2 h-2 rounded-full bg-[#E6E49F]" />
                      )}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile hamburger */}
          <div
            className={`${Styles.navMenu} block md:hidden cursor-pointer p-1 rounded-lg border border-[var(--border-color)]`}
            onClick={() => setIsOpen(!isOpen)}
            ref={menuRef}
          >
            <HiOutlineMenuAlt2 className="text-2xl text-[var(--text-color)]" />
          </div>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <nav
            className={`${Styles.rNav} absolute bg-[var(--card-bg)] border border-[var(--border-color)] shadow-2xl top-16 left-0 w-full rounded-2xl p-2 z-30`}
            ref={navRef}
          >
            <ul className="flex flex-col items-start w-full">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.id}
                  spy
                  smooth
                  duration={300}
                  offset={-80}
                  className="flex items-center gap-2 w-full px-5 py-3 rounded-xl cursor-pointer whitespace-nowrap text-[var(--text-color)] hover:bg-[#E6E49F]/15 hover:text-[#E6E49F] transition-all font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="currentColor">
                    <path d={link.svgPath} />
                  </svg>
                  {link.title}
                </Link>
              ))}
            </ul>
          </nav>
        )}
      </motion.header>
    </div>
  );
}

export default Navbar;
