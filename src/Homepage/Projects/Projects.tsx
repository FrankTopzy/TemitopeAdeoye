import { motion } from 'framer-motion'
import Title from '../../components/Title'
import ProjectCard from '../../components/ProjectCard'
import { projects } from '../../data/constants'
import Styles from './project.module.css'

function Projects() {
  return (
    <div className="bg-[var(--navbar-bg)] text-white flex flex-col items-center w-full" id="projects">
      <section className='pt-[100px] pb-[40px] w-[100%] sm:w-[95%] md:w-[90%] xl:w-[65%] flex flex-col gap-5'>
        <div className='px-5 sm:px-0 flex flex-col gap-3'>
          <Title title='My Projects' align='left'/>
          <p className='max-sm:text-[12px] sm:text-left text-center'>Following projects showcase my skills and experience through examples of my work. Each project is briefly described with links to code repositories in it.</p>

          <div className={`${Styles.res} my-[30px] sm:my-[50px] px-0 sm:px-5 md:px-0 w-full items-center gap-6 flex flex-wrap`}>
            {projects.map((project) => (
              <ProjectCard key={project.id} projectTitle={project.title} projectInfo={project.projectInfo} techStacks={project.techStack} projectLink={project.liveLink} githubLink={project.sourceCode} projectImg={project.imgSrc}/>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center">
          <a href="#contact" className=''>
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

export default Projects
