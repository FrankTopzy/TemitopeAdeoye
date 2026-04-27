import { ReactTyped } from "react-typed";
import Styles from '../Homepage/HeroSection/hero.module.css'

const TypedJs = () => (
  <ReactTyped
    strings={[
      "I'm a FRONTEND DEVELOPER.",
      "With over 13 completed projects.",
    ]}
    typeSpeed={40}
    backSpeed={50}
    attr="value"
    loop
  >
    <input type="text" className={`${Styles.fancyText} uppercase w-[330px] md:w-[85%] text-[0px] p-1.5 text-center`} readOnly/>
  </ReactTyped>
);

export default TypedJs
