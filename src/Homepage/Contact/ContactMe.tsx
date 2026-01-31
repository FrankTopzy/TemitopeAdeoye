import { useState } from 'react'
import Title from '../../components/Title'
// npm install react-hook-form @web3forms/react
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { FaCheck } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';

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
    <div className="bg-black text-white flex min-h-[70vh] pt-[100px] pb-[40px] justify-center" id="contact">
      <section className='max-w-[900px] mx-5 lg:mx-0 flex-1'>
        <Title title="Contact Me"/>

        <form onSubmit={handleSubmit(onSubmit)} className='flex gap-3 flex-col'>
          <input type="hidden" name="access_key" value="74fbda5c-ec04-4c4c-954a-029a2d682f90"></input>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-col gap-3 md:flex-row md:gap-0 justify-between'>
              <input type="text" {...register("first_name", { required: true })} placeholder='Enter Your First Name...' className='md:w-[49%] w-full px-3 py-2.5 bg-amber-300' required/>
              <input type="text" {...register("last_name", { required: true })} placeholder='Enter Your Last Name...' className='px-3 py-2.5 md:w-[49%] w-full bg-green-600' required/>
            </div>

            <div className='flex flex-col gap-3 md:flex-row md:gap-0 justify-between'>
              <input type="text" {...register("number", { required: true })} placeholder='Enter Your Mobile/Whatsapp Number....' className='md:w-[49%] w-full px-3 py-2.5 bg-amber-200' required/>
              <input type="email" {...register("email", { required: true })} placeholder='Enter Your Email Address...' className='px-3 py-2.5 md:w-[49%] w-full bg-amber-950' required/>
            </div>
          </div>

          <div className=''>
            <textarea {...register("text", { required: true })} id="" placeholder='Your Message...' className='px-3 pt-2.5 h-[300px] w-full bg-amber-950'></textarea>
          </div>

          <button className='bg-[var(--navbar-bg)] self-center px-7 py-2 rounded-xl hover:bg-[var(--color-2)] hover:text-black transition-all cursor-pointer'>Send Message</button>

          {isSuccess && (<div className={`popup w-[90%] sm:w-[45%] md:w-[35%] relative ${popup ? 'show' : ''} z-50`}>
            <p>Email {!isSuccess && 'not'} sent successfully! <span className='hidden'>{result}</span></p>
            <p className=' rounded-full bg-[var(--navbar-bg)] p-2.5'><FaCheck className='text-green-500 text-2xl'/></p>

            <FaTimes className='absolute top-2 right-2' onClick={() => setPopup(false)}/>
          </div>)}
        </form>
      </section>
    </div>
  )
}

export default ContactMe
