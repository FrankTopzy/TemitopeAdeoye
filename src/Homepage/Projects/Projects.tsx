import { motion } from 'framer-motion'
import Title from '../../components/Title'
import ProjectCard from '../../components/ProjectCard'
import { projects } from '../../data/constants'
import Styles from './project.module.css'
import { itemVariant, sectionVariant, viewport } from '../../utils/motion'
import NextPage from '../../components/NextPage'

function Projects() {
  return (
    <motion.div
      className={`${Styles.projects} bg-[var(--navbar-bg)] text-[var(--text-color)] flex flex-col items-center`}
      id="projects"
      variants={sectionVariant as any}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >

      <section className='relative pt-[85px] w-[100%] sm:w-[95%] md:w-[90%] xl:w-[65%] pb-40 flex flex-col gap-5'>
        <div className='px-5 sm:px-0 flex flex-col gap-3'>
          <Title title='My Projects' align='left'/>
          <motion.p className='max-sm:text-[12px] sm:text-left text-center' variants={itemVariant as any}>Following projects showcase my skills and experience through examples of my work. Each project is briefly described with links to code repositories in it.</motion.p>

          <motion.div
            className={`${Styles.res} my-[30px] sm:my-[50px] px-0 sm:px-5 md:px-0 w-full items-center gap-6 flex flex-wrap`}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} projectTitle={project.title} projectInfo={project.projectInfo} techStacks={project.techStack} projectLink={project.liveLink} githubLink={project.sourceCode} projectImg={project.imgSrc}/>
            ))}
          </motion.div>
        </div>

        <NextPage location="contact"/>
      </section>
    </motion.div>
  )
}

export default Projects
