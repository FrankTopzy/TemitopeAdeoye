import Title from "../../components/Title"
import VerticalTimelin from "../../components/VerticalTimelin"
import { motion } from 'framer-motion'
import { technologies } from "../../data/constants"
import Tilt from 'react-parallax-tilt'
import { itemVariant, sectionVariant, viewport } from "../../utils/motion";
import Styles from "./experience.module.css";
import NextPage from "../../components/NextPage"


function Experience() {
  return (
    <motion.div
      className={`${Styles.experience} bg-(--background-color) text-(--text-color) flex flex-col items-center`}
      id="experience"
      variants={sectionVariant as any}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      <section className="relative pt-[85px] pb-40 w-[100%] sm:w-[95%] md:w-[90%] xl:w-[65%]">
        <div className="">
          <Title title="Work Experience" align="center"/>
        </div>

        <VerticalTimelin/>

        <motion.div className="w-full mt-20" variants={itemVariant as any}>
          <h2 className="text-3xl text-center">Tech Stack</h2>
          <motion.div
            className="w-full flex flex-wrap justify-center gap-4 mt-5"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            {technologies.map((lang, index) => (
              <Tilt key={lang.id}>
                <motion.div
                className="border group flex flex-col items-center gap-3 p-4 w-[130px] hover:bg-[#E6E49F] hover:text-black hover:transition-all"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.45, delay: index * 0.03 },
                  },
                }}
                whileHover={{ y: -4 }}>
                  <img src={lang.imgSrc} alt={lang.name} width={40} className="group-hover:translate-y-[-2px] transition-all"/>
                  <p className=" max-sm:text-[12px]">{lang.name}</p>
                </motion.div>
              </Tilt>
            ))}
          </motion.div>
        </motion.div>

        <NextPage location="projects"/>
      </section>
    </motion.div>
  )
}

export default Experience