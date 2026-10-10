import { motion } from 'framer-motion'
import Title from '../../components/Title'
import ProjectCard from '../../components/ProjectCard'
import { projects } from '../../data/constants'
import Styles from './project.module.css'
import { itemVariant, sectionVariant, viewport } from '../../../motion'
import NextPage from '../../components/NextPage'

function Projects() {
  return (
    <motion.div
      className={`${Styles.projects} bg-[var(--background-color)] text-[var(--text-color)] flex flex-col items-center transition-colors duration-300`}
      id="projects"
      variants={sectionVariant as any}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      <section className='relative pt-[50px] w-[100%] sm:w-[95%] md:w-[90%] xl:w-[65%] pb-36 flex flex-col gap-5'>
        <div className='px-5 sm:px-0 flex flex-col gap-3'>
          <Title title='My Projects' align='left'/>
          <motion.p className='text-sm sm:text-base opacity-80 sm:text-left text-center' variants={itemVariant as any}>
            Following projects showcase my skills and experience through examples of my work. Each project is briefly described with links to live demonstrations and source code repositories.
          </motion.p>

          <motion.div
            className={`${Styles.res} my-[24px] sm:my-[40px] px-0 sm:px-5 md:px-0 w-full items-stretch gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            {projects.map((project) => (
              <ProjectCard 
                key={project.id} 
                projectTitle={project.title} 
                projectInfo={project.projectInfo} 
                techStacks={project.techStack} 
                projectLink={project.liveLink} 
                githubLink={project.sourceCode} 
                projectImg={project.imgSrc}
              />
            ))}
          </motion.div>
        </div>

        <NextPage location="contact"/>
      </section>
    </motion.div>
  )
}

export default Projects;
