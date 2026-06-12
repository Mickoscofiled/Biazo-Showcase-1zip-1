import { useEffect, useRef } from "react";
import heroVideo from "@/assets/hero-video.mp4";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <section 
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Video Only */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ scale: 1.08 }} // Zooms in slightly to help hide edge watermarks
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
    </section>
  );
}
