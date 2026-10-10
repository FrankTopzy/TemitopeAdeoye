import { useRef } from "react";
import ServiceCard from "../../components/ServiceCard"
import Title from "../../components/Title"
import { services } from "../../data/services"
import { motion, MotionConfig, useInView } from 'framer-motion'
import NextPage from "../../components/NextPage";
import Styles from './about.module.css';

function AboutMeSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div 
      className={`${isInView ? 'opacity-100' : 'opacity-0'} ${Styles.aboutSection} text-[var(--text-color)] flex justify-center w-full transition-colors duration-300`}
      id='about'
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <section className="relative pt-[50px] w-[100%] sm:w-[95%] md:w-[90%] xl:w-[65%] pb-36">
        <div className="px-5 sm:px-0 w-full">
          <MotionConfig transition={{ duration: 0.6, ease: "easeOut" }}>
            <div>
              <Title title="About Me" align="left"/>

              <div>
                <p className="text-justify sm:text-left text-sm sm:text-base font-normal leading-relaxed opacity-90 mt-2">
                  I graduated from the department of Computer Science, Federal University of Agriculture, Abeokuta with over a year experience as a Frontend Web Developer. I blend technical expertise with security knowledge to craft well-rounded web applications. 
                  I am looking to join a company that values innovation, collaboration, and continuous learning and I'm confident that my enthusiasm and drive will help me succeed in any role that leverages my passion for technology. Outside of coding, 
                  I am a Melomaniac and a Forex Trader. I continuously seek to enhance my skills and stay updated with the latest industry technologies.
                  <span className="block mt-4 font-semibold text-[var(--text-color-2)]">Here are some of the technologies I specialize in:</span>
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 sm:gap-6 lg:gap-8 w-full">
              {services.map((service, index) => (
                <ServiceCard src={service.imageSrc} progLang={service.langName} key={index} id={index}/>
              ))}
            </div>
          </MotionConfig>
        </div>

        <NextPage location="experience"/>
      </section>
    </motion.div>
  )
}

export default AboutMeSection;
