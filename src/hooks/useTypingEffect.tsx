import { useState, useEffect, useRef } from "react";

export function useTypingEffect(
  text: string,
  speed: number = 50,
  delay: number = 0
) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    setDisplayedText("");
    setIsComplete(false);

    let interval: ReturnType<typeof setInterval> | undefined;
    
    const timeout = setTimeout(() => {
      let index = 0;
      interval = setInterval(() => {
        if (!isMountedRef.current) {
          clearInterval(interval);
          return;
        }
        
        if (index <= text.length) {
          setDisplayedText(text.slice(0, index));
          index++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, speed);
    }, delay);

    return () => {
      isMountedRef.current = false;
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, delay]);

  return { displayedText, isComplete };
}
