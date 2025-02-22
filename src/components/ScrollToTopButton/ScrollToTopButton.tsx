import { useEffect, useState } from "react";
import "./ScrollTopButton.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

    return (
    <button className={`scrollTopButton ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}>
      ↑
            </button>
  );
};

export default ScrollToTopButton;
