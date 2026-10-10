import { useCallback, useContext, useState } from "react"
import FollowCursor from "./components/Cursor"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar/Navbar"
import Home from "./Homepage/Home"
import { FaArrowUp } from "react-icons/fa6"
import { PortfolioContext } from "./components/Context"
import { motion } from "framer-motion"
import LoadingScreen from "./components/LoadingScreen"

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { isTop } = useContext(PortfolioContext) ?? {}; 

  const handleLoadComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {/* Loading screen — rendered on top, unmounts after completion */}
      {isLoading && <LoadingScreen onComplete={handleLoadComplete} />}

      {/* Main content — only visible after loading finishes */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="min-h-screen bg-[var(--background-color)] text-[var(--text-color)] transition-colors duration-300"
        >
          <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
          <Home />
          <Footer />
          <FollowCursor />

          {!isTop && (
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bg-[#E6E49F] text-[#111118] bottom-6 right-6 p-3.5 rounded-full shadow-2xl border border-[#E6E49F] cursor-pointer z-40 hover:bg-[#d8d68d] hover:shadow-[0_0_20px_rgba(230,228,159,0.5)] transition-all"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              transition={{ duration: 0.2 }}
              aria-label="Scroll to top"
            >
              <FaArrowUp className="text-base font-bold" />
            </motion.button>
          )}
        </motion.div>
      )}
    </>
  )
}

export default App;
