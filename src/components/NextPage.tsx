import { motion } from 'framer-motion'

function NextPage({location}: {location: string}) {

  return (
    <div className="absolute bottom-8 w-full flex justify-center items-center text-(--text-color)">
      <a href={`#${location}`} className=''>
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
            className="w-3 h-3 rounded-full bg-(--text-color) mb-1"
          />
        </div>
      </a>
    </div>  
  )
}

export default NextPage