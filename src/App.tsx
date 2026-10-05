import { useContext, useEffect, useState } from "react"
import FollowCursor from "./components/Cursor"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar/Navbar"
import Home from "./Homepage/Home"
import { FaArrowUp } from "react-icons/fa6"
import { PortfolioContext } from "./components/Context"
import { motion } from "framer-motion"
import Loading from "./components/Loading"

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const {isTop} = useContext(PortfolioContext) ?? {}; 

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  const handleScroll = () => {
     window.scrollTo(0, 0)
  }

  useEffect(() => {
    if(!isLoading) return

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading])

  

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {isLoading && (<Loading/>)}
      <Navbar setIsOpen={setIsOpen} isOpen={isOpen}/>
      <Home/>
      <Footer/>
      <FollowCursor/>

      {!isTop && (
        <motion.div
          className={`.card-shadow fixed bg-(--text-color) text-(--background-color) bottom-2 right-2 p-2 rounded-full border-3 border-(--background-color) cursor-pointer`}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ y: -4, scale: 1.04 }}
          whileTap={{ scale: 0.94 }}
          transition={{ duration: 0.3 }}
        >
          <FaArrowUp onClick={() => scrollTo(0, 0)}/>
        </motion.div>
      )}
    </motion.div>
  )
}

export default App
