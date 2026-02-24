//import React from 'react'
import { FaGithub, FaLink } from 'react-icons/fa6';
import Tilt from 'react-parallax-tilt'
//import image from '../assets/projects/cart.png'
import type { TechStack } from '../data/types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


type Project = {
  id: number;
  projectTitle: string;
  projectImg: string;
  projectInfo: string;
  techStacks: TechStack[];
  projectLink: string;
  githubLink: string;
}
function ProjectCard({id, projectTitle, projectInfo, techStacks, projectLink, githubLink, projectImg}: Project) {
  return (
    <Tilt className='md:w-[47%] sm:w-full'>
      <motion.div className='flex flex-col p-3 border-2 border-gray-600 bg-black/60 rounded-3xl h-[500px]'
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1,
                    delay: id * 0.5,
                    ease: 'easeInOut',
                  }}
      >
        <div className='rounded-xl flex flex-1 justify-center overflow-hidden'>
          <img src={projectImg} alt="hotelmang" className='rounded-xl flex-1 hover:scale-104 transition-all object-center object-cover'/>
        </div>

        <div className='mt-[15px] text-white text-[12px]'>
          <h1 className='text-xl text-gray-400 font-bold'>{projectTitle}</h1>
          <p className='pt-[10px] text-[##25291C]'>{projectInfo}</p>
          <div className='flex flex-wrap gap-2 text-[#E6E49F] justify-center'>
            {techStacks.map((stack, index) => (<p key={index} className={`flex gap-1 items-center mt-[10px] ${(index % 2) == 0 ? 'bg-amber-400/50' : 'bg-blue-700/30'}   px-3 rounded-2xl py-1`}>
            <img src={stack.imgSrc} width={15} alt="img"/>
            {stack.stack}</p>))}
          </div>

          <div className='flex gap-2 mt-[15px] item-center justify-center'>
            <Link to={projectLink} target='blank' className='flex items-center gap-1 transition-all py-1 hover:text-gray-300 px-3 bg-green-600/50 rounded-2xl cursor-pointer'><FaLink/> Live Link</Link>
            <Link to={githubLink} target='blank' className='bg-green-600/50 hover:text-gray-300 transition-all cursor-pointer py-1 px-3 rounded-2xl flex items-center gap-1'><FaGithub/> Github Link</Link>
          </div>
        </div>
      </motion.div>
    </Tilt>
   
  )
}

export default ProjectCard
