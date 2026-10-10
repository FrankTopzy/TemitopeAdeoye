import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

type ServiceCardPropsType = {
  id: number;
  src: string;
  progLang: string;
}

function ServiceCard({id, src, progLang} : ServiceCardPropsType) {
  return (
    <Tilt className="flex-1 min-w-[260px] max-w-[100%]">
      <motion.div 
        className="w-full bg-[var(--card-bg)] text-[var(--text-color)] border border-[var(--border-color)] hover:border-[#E6E49F]/60 p-6 rounded-2xl shadow-xl transition-all"
        initial={{
          y: 40,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: id * 0.1
        }}
      >
        <div className='flex justify-center items-center flex-col gap-4 py-3'>
          <img src={src} width={64} height={64} alt={progLang} className="hover:scale-110 transition-all" />
          <h3 className='font-bold text-lg text-[var(--text-color)]'>{progLang}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

export default ServiceCard;