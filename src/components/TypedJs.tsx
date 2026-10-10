import { ReactTyped } from "react-typed";

const TypedJs = () => (
  <div className="flex justify-center items-center py-1">
    <ReactTyped
      strings={[
        "I'm a FRONTEND DEVELOPER.",
        "With over 13 completed projects.",
      ]}
      typeSpeed={40}
      backSpeed={50}
      loop
      className="text-lg sm:text-2xl font-extrabold tracking-wide text(--typed-color) text-center drop-shadow-sm min-h-[32px] inline-block"
    />
  </div>
);

export default TypedJs;
