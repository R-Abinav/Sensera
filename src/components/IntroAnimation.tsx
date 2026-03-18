import { useState, useEffect } from "react";

interface IntroAnimationProps {
  onComplete: () => void;
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const text = "SENSERA";
  const [displayedText, setDisplayedText] = useState("");
  const [textOpacity, setTextOpacity] = useState(1);
  const [overlayOpacity, setOverlayOpacity] = useState(1);

  useEffect(() => {
    let timeoutIds: ReturnType<typeof setTimeout>[] = [];

    // Phase 1: wait 500ms, then type text
    const startTyping = setTimeout(() => {
      text.split("").forEach((char, index) => {
        const id = setTimeout(() => {
          setDisplayedText((prev) => prev + char);
        }, index * 400); // Increased from 150ms to 400ms per letter
        timeoutIds.push(id);
      });
      
      // Time when word finishes typing: 7 * 400 = 2800ms
      // Pause for 800ms: 2800 + 800 = 3600ms
      const startTextFadeOut = setTimeout(() => {
        setTextOpacity(0); // fades out over 600ms
      }, text.length * 400 + 800);
      timeoutIds.push(startTextFadeOut);

      // Time when text finishes fading: 3600 + 600 = 4200ms
      // We will now fade out the overlay itself as well over 500ms to be perfectly compliant
      const startOverlayFadeOut = setTimeout(() => {
        setOverlayOpacity(0);
      }, text.length * 400 + 800 + 600);
      timeoutIds.push(startOverlayFadeOut);

      // Finish intro completely after overlay fades out
      const finishIntro = setTimeout(() => {
        onComplete();
      }, text.length * 400 + 800 + 600 + 500);
      timeoutIds.push(finishIntro);

    }, 500);
    timeoutIds.push(startTyping);

    return () => {
      timeoutIds.forEach(clearTimeout);
    };
  }, [onComplete]);

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-transparent flex flex-col items-center justify-center pointer-events-none transition-opacity duration-500 ease-in-out"
      style={{ opacity: overlayOpacity }}
    >
      <h1 
        className="font-['Cormorant_Garamond'] font-light text-[15vw] md:text-[12vw] tracking-[0.3em] text-black uppercase transition-opacity duration-[600ms] ease-in-out ml-[0.3em]"
        style={{ opacity: textOpacity }}
      >
        {displayedText}
      </h1>
    </div>
  );
}
