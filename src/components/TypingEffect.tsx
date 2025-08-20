
import React, { useState, useEffect } from "react";

interface TypingEffectProps {
  strings: string[];
  typingSpeed?: number;
  deleteSpeed?: number;
  delayBetween?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  strings,
  typingSpeed = 100,
  deleteSpeed = 50,
  delayBetween = 1000,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (charIndex < strings[stringIndex].length) {
        // Type the next character
        timeout = setTimeout(() => {
          setDisplayText(strings[stringIndex].substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        // Finished typing, wait before deleting
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, delayBetween);
      }
    } else {
      if (charIndex > 0) {
        // Delete characters one by one
        timeout = setTimeout(() => {
          setDisplayText(strings[stringIndex].substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, deleteSpeed);
      } else {
        // Move to the next string
        setStringIndex((prevIndex) => (prevIndex + 1) % strings.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, delayBetween, deleteSpeed, isTyping, stringIndex, strings, typingSpeed]);

  return (
    <span className="relative">
      {displayText}
      <span className="absolute right-[-4px] top-0 h-full w-1 bg-tech-cyan animate-cursor-blink"></span>
    </span>
  );
};

export default TypingEffect;
