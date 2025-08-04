import { useState, useEffect, useRef } from "react";

export default function useTypewriter(text, speed = 100, repeat = false) {
  const [displayed, setDisplayed] = useState("");
  const timeoutRef = useRef();

  useEffect(() => {
    let i = 0;

    function type() {
      setDisplayed(text.slice(0, i + 1));
      if (i < text.length - 1) {
        i++;
        timeoutRef.current = setTimeout(type, speed);
      } else if (repeat) {
        timeoutRef.current = setTimeout(() => {
          i = 0;
          setDisplayed("");
          timeoutRef.current = setTimeout(type, speed);
        }, 1000);
      }
    }

    type();

    return () => clearTimeout(timeoutRef.current);
  }, [text, speed, repeat]);

  return displayed;
}