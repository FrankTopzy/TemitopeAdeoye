//import React from 'react'
import { motion } from "framer-motion";
import { itemVariant, viewport } from "../../motion";

function Title({title, align}: {title: string; align?: string;}) {
  return (
    <motion.div
      variants={itemVariant as any}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      <h1 className={`text-center sm:text-${align} text-[32px] uppercase font-bold pb-3 mt-5`}>{title}</h1>
    </motion.div>
  )
}

export default Title