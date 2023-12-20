import { useEffect, useRef } from "react";
export default function Sound() {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.play();
    ref.loop = "loop";
    const audio = (e) => {
      if (e.deltaY > 0) {
        ref.current.playback = ref.current.playback + 0.5;
        ref.current.volume = ref.current.volume + 0.5;
      } else {
        ref.current.playback = ref.current.playback - 0.5;
        ref.current.volume = ref.current.volume - 0.5;
      }
    };
    window.addEventListener("wheel", (e) => audio);
    return () => {
      window.removeEventListener("wheel", (e) => audio);
    };
  });
  return (
    <>
      <audio
        ref={ref}
        src="/milkywaysound.mp3"
        loop="loop"
        autoplay="autoplay"
      />
    </>
  );
}
