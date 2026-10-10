import { useState } from 'react'
import Title from '../../components/Title'
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { FaCheck } from 'react-icons/fa6';
import { FaTimes, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion'
import { itemVariant, sectionVariant, viewport } from '../../../motion';

function ContactMe() {
  const [popup, setPopup] = useState(false);
  const { register, reset, handleSubmit } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState('');

  const accessKey = "74fbda5c-ec04-4c4c-954a-029a2d682f90";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Portfolio Website",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg) => {
      setIsSuccess(true);
      setPopup(true);
      setTimeout(() => {
        setPopup(false);
      }, 5000);
      setResult(msg);
      reset();
    },
    onError: (msg) => {
      setIsSuccess(false);
      setPopup(true);
      setResult(msg);
      reset();
    },
  });

  return (
    <motion.div
      className="text-[var(--text-color)] flex pt-[50px] pb-[40px] justify-center"
      id="contact"
      variants={sectionVariant as any}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      <section className='relative w-[100%] sm:w-[95%] md:w-[90%] xl:w-[65%] pb-10'>
        <Title title="Contact Me" align="center" />

        <motion.form 
          onSubmit={handleSubmit(onSubmit)} 
          className='flex gap-4 flex-col pt-8 text-[var(--text-color)] px-4 sm:px-0 max-w-2xl mx-auto' 
          variants={itemVariant as any}
        >
          <input type="hidden" name="access_key" value={accessKey} />

          <motion.div
            className='flex flex-col gap-4'
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
          >
            <motion.div className='flex flex-col sm:flex-row gap-4 justify-between' variants={itemVariant as any}>
              <input 
                type="text" 
                {...register("first_name", { required: true })} 
                placeholder='Enter Your First Name...' 
                className='sm:w-[48%] w-full px-4 py-3 rounded-xl bg-[var(--card-bg)] text-[var(--text-color)] border border-[var(--border-color)] placeholder:text-[var(--text-color)]/40 focus:border-[#E6E49F] transition-all shadow-sm' 
                required
              />
              <input 
                type="text" 
                {...register("last_name", { required: true })} 
                placeholder='Enter Your Last Name...' 
                className='sm:w-[48%] w-full px-4 py-3 rounded-xl bg-[var(--card-bg)] text-[var(--text-color)] border border-[var(--border-color)] placeholder:text-[var(--text-color)]/40 focus:border-[#E6E49F] transition-all shadow-sm' 
                required
              />
            </motion.div>

            <motion.div className='flex flex-col sm:flex-row gap-4 justify-between' variants={itemVariant as any}>
              <input 
                type="text" 
                {...register("number", { required: true })} 
                placeholder='Enter Your Mobile / WhatsApp Number...' 
                className='sm:w-[48%] w-full px-4 py-3 rounded-xl bg-[var(--card-bg)] text-[var(--text-color)] border border-[var(--border-color)] placeholder:text-[var(--text-color)]/40 focus:border-[#E6E49F] transition-all shadow-sm' 
                required
              />
              <input 
                type="email" 
                {...register("email", { required: true })} 
                placeholder='Enter Your Email Address...' 
                className='sm:w-[48%] w-full px-4 py-3 rounded-xl bg-[var(--card-bg)] text-[var(--text-color)] border border-[var(--border-color)] placeholder:text-[var(--text-color)]/40 focus:border-[#E6E49F] transition-all shadow-sm' 
                required
              />
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariant as any}>
            <textarea 
              {...register("text", { required: true })} 
              placeholder='Your Message...' 
              className='px-4 py-3 h-[180px] sm:h-[220px] w-full rounded-xl bg-[var(--card-bg)] text-[var(--text-color)] border border-[var(--border-color)] placeholder:text-[var(--text-color)]/40 focus:border-[#E6E49F] transition-all resize-none shadow-sm'
              required
            />
          </motion.div>

          <motion.button 
            type="submit"
            className='flex items-center justify-center gap-2.5 bg-[#E6E49F] text-[#111118] font-bold px-10 py-3.5 rounded-full hover:bg-[#d8d68d] hover:shadow-[0_0_24px_rgba(230,228,159,0.45)] hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg mt-3 self-center border border-[#E6E49F]'
            whileTap={{ scale: 0.95 }}
          >
            <span>Send Message</span>
            <FaPaperPlane className="text-sm" />
          </motion.button>

          {isSuccess && (
            <div className={`popup w-[90%] sm:w-[420px] bg-[var(--card-bg)] text-[var(--text-color)] border border-[var(--border-color)] rounded-2xl shadow-2xl ${popup ? 'show' : ''} z-50`}>
              <div className='rounded-full bg-emerald-500/20 p-3 mb-2 border border-emerald-500/40'>
                <FaCheck className='text-emerald-500 text-3xl'/>
              </div>
              <p className="font-semibold">Message sent successfully!</p>
              <p className="text-xs opacity-75">{result}</p>
              <button 
                type="button" 
                className='absolute top-3 right-3 text-[var(--text-color)]/60 hover:text-[var(--text-color)] p-1 cursor-pointer'
                onClick={() => setPopup(false)}
              >
                <FaTimes />
              </button>
            </div>
          )}
        </motion.form>
      </section>
    </motion.div>
  )
}

export default ContactMe;