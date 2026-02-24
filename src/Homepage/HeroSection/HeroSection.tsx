import { Link } from 'react-router-dom'
import frank from '../../assets/frank.jpg'
import Styles from './hero.module.css'
//import xLogo from '../../assets/icons8-x-color/icons8-x-48.png'
import gitHub from '../../assets/icons8-github-48.png'
import instaLogo from '../../assets/insta-logo/icons8-instagram-48.png'
import linkedIn from '../../assets/icons8-linkedin-color/icons8-linkedin-48.png'
import { FaArrowDown, FaXTwitter } from 'react-icons/fa6';
import TypedJs from '../../components/TypedJs'
import { motion } from 'framer-motion'
import resumePDF from '../../assets/Temitope_Resume.pdf'



function HeroSection() {
  return (
    <div className="bg-black text-white flex justify-center pt-27 lg:pt-34" id='home'>
      <section className='pb-20 relative'>
        <div className='flex sm md:gap-[100px] lg:gap-[130px] pt-0 pb-4 lg:py-[80px] flex-col md:flex-row-reverse'>
          <motion.div className='flex flex-col items-center gap-9 justify-center'
                      initial={{
                        scale: 0,
                        opacity: 0}}
                      animate={{
                        scale: 1,
                        opacity: 1}}
                      transition={{
                        duration: 2,
                        ease: "easeIn"
                      }}>
            <img src={frank} alt="" className={`${Styles.blobImg} w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] object-cover`}/>
            <p className='py-2 px-10 rounded-4xl bg-green-600/20 hover:bg-grern-500/20 text-green-600 hover:text-green-500 transition-all'>Open to Work</p>
          </motion.div>

          <motion.div className={`${Styles.heroText}`}>
            <div className='text-center mt-10'>
              <h1 className='flex flex-col text-sm md:text-lg'>
                Hey It's me 
                <span className={`${Styles.webkitText} text-3xl lg:text-6xl font-extrabold`}>Temitope Adeoye</span>
                a.k.a Frank Topzy
              </h1>

              <h2 className='mt-2'><span><TypedJs/></span></h2>
            </div>

            <div className='flex flex-col'>
              <div className="flex items-center justify-center mt-4 gap-3">
                <Link to={'www.linkedin.com/in/temitope-adeoye-adeshina'} className='hover:scale-110 hover:translate-y-[-5px] transition-all' target='blank'><img src={linkedIn} alt="" className='rounded-full max-sm:w-[40px] transition-all'/></Link>
                <Link to={'https://x.com/frank_topzy?s=09'} target='blank' className='bg-white p-1 rounded-full border-4 border-black hover:scale-110 hover:translate-y-[-5px] transition-all'><FaXTwitter className='text-black text-2xl md:text-3xl'/></Link>
                <Link to={'http://github.com/FrankTopzy'} target='blank'><img src={gitHub} alt="" className='rounded-full max-sm:w-[40px] hover:scale-110 hover:translate-y-[-5px] transition-all'/></Link>
                <Link to={'https://www.instagram.com/frank_topzy'} target='blank'><img src={instaLogo} alt="" className='rounded-full hover:scale-110 hover:translate-y-[-5px] transition-all max-sm:w-[40px]'/></Link>
              </div>
              
              <a href={resumePDF} download target='blank' className="flex gap-3 group items-center px-5 py-2 rounded-4xl text-white bg-[#25291C] mt-7 self-center border-2 border-[#E6E49F] hover:card-shadow transition-all">Download Resume <FaArrowDown className=' transition-all animate-bounce'/></a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-4 w-full flex justify-center items-center">
          <a href="#about" className=''>
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-white mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}

export default HeroSection
