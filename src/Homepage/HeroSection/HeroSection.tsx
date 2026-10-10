import { Link } from 'react-router-dom'
import frank from '../../assets/frank.jpg'
import Styles from './hero.module.css'
import gitHub from '../../assets/icons8-github-48.png'
import instaLogo from '../../assets/insta-logo/icons8-instagram-48.png'
import linkedIn from '../../assets/icons8-linkedin-color/icons8-linkedin-48.png'
import { FaDownload, FaXTwitter } from 'react-icons/fa6';
import TypedJs from '../../components/TypedJs'
import { motion } from 'framer-motion'
import resumePDF from '../../assets/Temitope_Resume.pdf'
import NextPage from '../../components/NextPage'

function HeroSection() {
  return (
    <div className={`${Styles.heroSection} w-full bg-[var(--background-color)] text-[var(--text-color)] flex justify-center pt-28 lg:pt-36 transition-colors duration-300`} id='home'>
      <section className='pb-32 pt-5 relative w-[100%] sm:w-[95%] md:w-[90%] xl:w-[65%]'>
        <div className='flex justify-center sm md:gap-[80px] lg:gap-[120px] pt-0 pb-4 lg:py-[60px] flex-col md:flex-row-reverse items-center'>
          
          {/* Profile Image & Status Badge */}
          <motion.div 
            className='flex flex-col items-center gap-7 justify-center'
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <img src={frank} alt="Temitope Adeoye" className={`${Styles.blobImg} w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] object-cover shadow-2xl`}/>

            <div className='relative'>
              <p className='py-2 px-8 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-500 font-semibold text-sm hover:bg-emerald-500/25 transition-all flex items-center gap-2'>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block"></span>
                Open to Work
              </p>
            </div>
          </motion.div>

          {/* Intro Text */}
          <motion.div className={`${Styles.heroText} flex flex-col items-center md:items-start text-center md:text-left`}>
            <div className='mt-3 flex flex-col gap-1 items-center md:items-start'>
              <h1 className='flex flex-col text-sm md:text-lg font-medium text-[var(--text-color)] opacity-90'>
                Hey, it's me
                <span className={`${Styles.webkitText} text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight mt-1`}>
                  Temitope Adeoye
                </span>
                <span className="text-base sm:text-lg font-medium opacity-80 mt-1">a.k.a Frank Topzy</span>
              </h1>

              <div className='mt-2 w-full'>
                <TypedJs/>
              </div>
            </div>

            {/* Social Icons & Download Resume */}
            <div className='flex flex-col items-center md:items-start w-full mt-4'>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <Link to={'https://www.linkedin.com/in/temitope-adeoye-adeshina'} className='hover:scale-110 hover:-translate-y-1 transition-all' target='_blank'>
                  <img src={linkedIn} alt="LinkedIn" className='w-10 h-10 rounded-full shadow-md'/>
                </Link>
                <Link to={'https://x.com/frank_topzy?s=09'} target='_blank' className='bg-[var(--card-bg)] text-[var(--text-color)] p-2 rounded-full border border-[var(--border-color)] hover:border-[#E6E49F] hover:scale-110 hover:-translate-y-1 transition-all shadow-md'>
                  <FaXTwitter className='text-xl'/>
                </Link>
                <Link to={'http://github.com/FrankTopzy'} target='_blank' className='hover:scale-110 hover:-translate-y-1 transition-all'>
                  <img src={gitHub} alt="GitHub" className='w-10 h-10 rounded-full bg-white shadow-md'/>
                </Link>
                <Link to={'https://www.instagram.com/frank_topzy'} target='_blank' className='hover:scale-110 hover:-translate-y-1 transition-all'>
                  <img src={instaLogo} alt="Instagram" className='w-10 h-10 rounded-full shadow-md'/>
                </Link>
              </div>
              
              <a 
                href={resumePDF} 
                download 
                target='_blank' 
                className="flex gap-3 group items-center px-7 py-3 rounded-full font-bold bg-[#E6E49F] text-[#111118] mt-7 hover:bg-[#d8d68d] hover:shadow-[0_0_24px_rgba(230,228,159,0.5)] hover:scale-105 active:scale-95 transition-all shadow-lg cursor-pointer border border-[#E6E49F]"
              >
                Download Resume <FaDownload className='transition-all group-hover:translate-y-0.5'/>
              </a>
            </div>
          </motion.div>
        </div>

        <NextPage location='about'/>
      </section>
    </div>
  )
}

export default HeroSection
