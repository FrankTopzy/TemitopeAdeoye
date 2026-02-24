import Title from "../../components/Title"
import VerticalTimelin from "../../components/VerticalTimelin"
import { motion } from 'framer-motion'
import { technologies } from "../../data/constants"
import Tilt from 'react-parallax-tilt'


function Experience() {
  return (
    <div className="bg-black text-white flex flex-col items-center" id="experience">
      <section className="pt-[100px] lg:px-[200px] px-[0px] pb-10 max-w-[1300px]">
        <div className="">
          <Title title="Work Experience" align="center"/>
        </div>

        <VerticalTimelin/>

        <div className="w-full mt-20 mb-7">
          <h2 className="text-3xl text-center">Tech Stack</h2>
          <div className="w-full flex flex-wrap justify-center gap-4 mt-5">
            {technologies.map((lang) => (
              <Tilt key={lang.id}>
                <motion.div className="border group flex flex-col items-center gap-3 p-4 w-[130px] hover:bg-[#E6E49F] hover:text-black hover:transition-all"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{
                  duration: 2,
                  delay: Number(lang.id) / 5
                }}>
                  <img src={lang.imgSrc} alt={lang.name} width={40} className="group-hover:translate-y-[-2px] transition-all"/>
                  <p className=" max-sm:text-[12px]">{lang.name}</p>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center">
          <a href="#projects" className=''>
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

export default Experience
