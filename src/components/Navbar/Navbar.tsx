import Styles from './navbar.module.css';
import { BiCode } from 'react-icons/bi';
import { BiCodeAlt } from 'react-icons/bi';
import { Link } from 'react-scroll';
import { useContext, useEffect, useRef, useState } from 'react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { navLinks } from '../../data/constants';
import type { NavbarType } from '../../data/types';
import { PortfolioContext } from '../Context';
import { motion } from 'framer-motion'


function Navbar({isOpen, setIsOpen}: NavbarType) {
  const [scrollUp, setScrollUp] = useState<boolean>(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);

  const { setIsTop } = useContext(PortfolioContext) ?? {};

  useEffect(() => {
    function handleScroll():void {
       window.scrollY > 10 ? setScrollUp(true) : setScrollUp(false);
       window.scrollY < 5 ? setIsTop && setIsTop(true) : setIsTop && setIsTop(false);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
    
  }, [])


  //When the target isn't the navMenu, close navMenu
  /*window.addEventListener('click', (e) => {
    if (e.target == navRef.current && e.target == menuRef.current ) {
      console.log('clicked');
      return;
    }

    setIsOpen(false);
    
  })*/

  return (
    <div className="flex justify-center w-full">
      <motion.header className={`${Styles.header} flex items-center justify-between gap-[190px] fixed top-5 bg-[var(--navbar-bg)] text-[#E6E49F] py-1 xl:py-3 px-3 xl:px-10 rounded-xl hover:scale-105 transition-all z-20`}
                     initial={{
                      y: -100,
                      opacity: "0",
                     }}
                     animate={{
                      y: 0,
                      opacity: "1",
                     }}
                     transition={{
                      duration: 1,
                      ease: "backInOut"
                     }}>
        <div className="flex items-center font-[Lobster] font-bold">
          <BiCode className='text-2xl font-bold'/>
          <motion.span 
            className={`${scrollUp ? 'text-4xl text-white' : 'text-5xl text-[#E6E49F]'} max-md:text-3xl lg: xl: transition-all`}
            initial={{
                rotate: "0deg",
              }
            }
            animate={{
              rotate: "360deg"
            }}
          >TA</motion.span>
          <BiCodeAlt className='text-2xl font-bold'/>
        </div>

        <div className='flex relative items-center'>
          <nav className={`${Styles.navbar}`}>
            <ul className="hidden flex-col md:flex md:flex-row gap-7 xl:gap-8 text-[12px] md:text-sm">
              {navLinks.map((link, index) => (
                <Link to={`${link.id}`} spy={true} smooth={true} duration={500} key={index} className='flex items-center gap-1 justify-center cursor-pointer whitespace-nowrap hover:translate-y-[-4px] hover:scale-105 transition-all hover:font-bold'>
                  <svg xmlns="" height="24px" viewBox="0 -960 960 960" width="24px" fill="#E3E7D3"><path d={`${link.svgPath}`}/></svg> 
                  {link.title}
                </Link>
              ))}
            </ul>
          </nav>

          {isOpen && (
            <nav className={`${Styles.rNav} absolute  w-[200px] bg-[var(--navbar-bg)] right-0 top-12 rounded-2xl`} ref={navRef}>
              <ul className="flex flex-col items-start">
                {navLinks.map((link, index) => (
                  <Link to={`${link.id}`} spy={true} smooth={true} duration={500} key={index} className='flex items-center gap-1 justify-center px-5 py-4 cursor-pointer whitespace-nowrap hover:translate-y-[-4px] hover:scale-105 transition-all hover:font-bold' onClick={() => setIsOpen(false)}>
                    <svg xmlns="" height="24px" viewBox="0 -960 960 960" width="24px" fill="#E3E7D3"><path d={`${link.svgPath}`}/></svg> 
                    {link.title}
                  </Link>
                ))}
              </ul>
            </nav>
          )}

          <div className={`${Styles.navMenu} block md:hidden`} onClick={() => setIsOpen(!isOpen)} ref={menuRef}>
            <HiOutlineMenuAlt2 className='text-2xl'/>
          </div>
        </div>
      </motion.header>
    </div>
  )
}

export default Navbar
