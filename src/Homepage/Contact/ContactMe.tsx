import { useState } from 'react'
import Title from '../../components/Title'
// npm install react-hook-form @web3forms/react
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { FaCheck } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion'
import { itemVariant, sectionVariant, viewport } from '../../utils/motion';
//import Styles from './contact.module.css'

function ContactMe() {
  const [popup, setPopup] = useState(false);

  /*useEffect(() => {
    console.log(message);
  }, [message]);*/

  const {register, reset, handleSubmit} = useForm();

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState('');

  const accessKey = "74fbda5c-ec04-4c4c-954a-029a2d682f90";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Portfolio Website",
      subject: "New Contact Message from your Website",
      // ... other settings
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
      className={`text-(--text-color) flex pt-[50px] pb-[20px] justify-center`}
      id="contact"
      variants={sectionVariant as any}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      <section className='relative w-[100%] sm:w-[95%] md:w-[90%] xl:w-[65%] pb-10'>
        <Title title="Contact Me"/>

        <motion.form onSubmit={handleSubmit(onSubmit)} className='flex gap-3 flex-col pt-10 text-(--text-color) px-5 sm:px-0' variants={itemVariant as any}>
          <input type="hidden" name="access_key" value="74fbda5c-ec04-4c4c-954a-029a2d682f90"></input>
          <motion.div
            className='flex flex-col gap-3'
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
          >
            <motion.div className='flex flex-col gap-3 md:flex-row md:gap-0 justify-between' variants={itemVariant as any}>
              <input type="text" {...register("first_name", { required: true })} placeholder='Enter Your First Name...' className='md:w-[49%] w-full px-3 py-2.5' required/>
              <input type="text" {...register("last_name", { required: true })} placeholder='Enter Your Last Name...' className='px-3 py-2.5 md:w-[49%] w-full bg-green-600' required/>
            </motion.div>

            <motion.div className='flex flex-col gap-3 md:flex-row md:gap-0 justify-between' variants={itemVariant as any}>
              <input type="text" {...register("number", { required: true })} placeholder='Enter Your Mobile/Whatsapp Number....' className='md:w-[49%] w-full px-3 py-2.5 bg-green-900' required/>
              <input type="email" {...register("email", { required: true })} placeholder='Enter Your Email Address...' className='px-3 py-2.5 md:w-[49%] w-full bg-amber-950' required/>
            </motion.div>
          </motion.div>

          <motion.div className='' variants={itemVariant as any}>
            <textarea {...register("text", { required: true })} id="" placeholder='Your Message...' className='px-3 pt-2.5 h-[300px] w-full bg-blue-900'></textarea>
          </motion.div>

          <motion.button className='bg-[var(--text-color)] text-white self-center px-7 py-2 rounded-xl hover:bg-(--navbar-color) transition-all cursor-pointer'
                         whileTap={{
                          scale: 0.9,
                          rotate: '2.5deg'                   
                         }}
                         
                         >Send Message</motion.button>

         {isSuccess && (<div className={`popup w-[90%] mt-10 sm:w-[45%] md:w-[35%] relative bg-(--text-color) text-(--background-color) rounded-2xl ${popup ? 'show' : ''} z-50` }>
            <p>Email {!isSuccess && 'not'} sent successfully! <span className='hidden'>{result}</span></p>
            <p className=' rounded-full bg-(--background-color) p-2.5'><FaCheck className='text-green-500 text-2xl'/></p>

            <FaTimes className='absolute top-2 right-2' onClick={() => setPopup(false)}/>
          </div>)}
        </motion.form>
      </section>
    </motion.div>
  )
}

export default ContactMe