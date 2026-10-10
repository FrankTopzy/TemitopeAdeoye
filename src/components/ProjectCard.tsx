import { FaGithub, FaLink } from 'react-icons/fa6';
import Tilt from 'react-parallax-tilt'
import type { TechStack } from '../data/types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { viewport } from '../../motion';

type Project = {
  projectTitle: string;
  projectImg: string;
  projectInfo: string;
  techStacks: TechStack[];
  projectLink: string;
  githubLink: string;
}

function ProjectCard({projectTitle, projectInfo, techStacks, projectLink, githubLink, projectImg}: Project) {
  return (
    <Tilt className='flex-1 min-w-[280px] max-w-[100%]'>
      <motion.div 
        className='flex flex-col p-4 border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-color)] rounded-3xl shadow-xl hover:border-[#E6E49F]/40 transition-all min-h-[480px] justify-between'
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -6 }}
        viewport={viewport}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <div className='rounded-2xl overflow-hidden h-[200px] border border-[var(--border-color)]'>
          <img 
            src={projectImg} 
            alt={projectTitle} 
            className='w-full h-full object-cover object-top hover:scale-105 transition-all duration-300'
          />
        </div>

        <div className='mt-4 flex flex-col flex-1 justify-between gap-3 text-sm'>
          <div>
            <h3 className='text-xl font-bold text-[var(--text-color)] text-center sm:text-left'>{projectTitle}</h3>
            <p className='pt-2 text-xs sm:text-sm text-[var(--text-color)] opacity-80 text-center sm:text-left leading-relaxed'>{projectInfo}</p>
          </div>

          <div>
            <div className='flex flex-wrap gap-1.5 justify-center sm:justify-start'>
              {techStacks.map((stack, index) => (
                <span 
                  key={index} 
                  className='flex gap-1.5 items-center text-xs px-2.5 py-1 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] font-medium text-[var(--text-color)]'
                >
                  <img src={stack.imgSrc} width={14} height={14} alt={stack.stack} className="inline-block" />
                  {stack.stack}
                </span>
              ))}
            </div>

            <div className='flex gap-3 mt-4 items-center justify-center sm:justify-start pt-2 border-t border-[var(--border-color)]'>
              <Link 
                to={projectLink} 
                target='_blank' 
                className='flex items-center gap-1.5 text-xs font-semibold py-1.5 px-4 bg-[#E6E49F] text-[#111118] hover:bg-[#d8d68d] rounded-full transition-all shadow-sm'
              >
                <FaLink /> Live Link
              </Link>
              <Link 
                to={githubLink} 
                target='_blank' 
                className='flex items-center gap-1.5 text-xs font-semibold py-1.5 px-4 bg-[var(--card-bg)] text-[var(--text-color)] border border-[var(--border-color)] hover:border-[#E6E49F] rounded-full transition-all shadow-sm'
              >
                <FaGithub /> GitHub
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </Tilt>
  )
}

export default ProjectCard;