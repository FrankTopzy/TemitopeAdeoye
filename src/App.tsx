import { useContext, useEffect, useState } from "react"
import FollowCursor from "./components/Cursor"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar/Navbar"
import Home from "./Homepage/Home"
import { FaArrowUp } from "react-icons/fa6"
import { PortfolioContext } from "./components/Context"


function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {isTop} = useContext(PortfolioContext) ?? {}; 

  setTimeout(() => {
    setIsLoading(false)
  }, 5000)

  const handleScroll = () => {
     window.scrollTo(0, 0)
  }

  useEffect(() => {
    if(!isLoading) return

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading])

  

  return (
    <>
      {isLoading && (
        <div className="fixed flex justify-center items-center w-full h-[100%] bg-[#25291C] z-[10000]">
          <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full border-4 border-[#E6E49F] animate-ping">
            <div className="w-[20px] h-[20px] rounded-full border-4 border-[#E6E49F] animate-ping">
              
            </div>
          </div>
        </div>
      )}
      <Navbar setIsOpen={setIsOpen} isOpen={isOpen}/>
      <Home/>
      <Footer/>
      <FollowCursor/>

      {!isTop && (
        <div className={`.card-shadow fixed bg-[var(--color-2)] text-white bottom-2 right-2 p-2 rounded-full border-3 border-[var(--navbar-bg)] cursor-pointer`}>
          <FaArrowUp color='black' onClick={() => scrollTo(0, 0)}/>
        </div>
      )}
    </>
  )
}

export default App
