import { useRef } from "react";

const useScrollToSection = () => {
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return { scrollToSection };
};

export default useScrollToSection;
