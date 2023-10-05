import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Services() {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState<any>(["0 1", "1.6 3.5"]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setOffset(["0 1", "1.6 1.2"]); // Adjust the offset for mobile screens
      } else {
        setOffset(["0 1", "1.22 1"]);
      }
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset,
  });
  return (
    <motion.main
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
      ref={ref}
      className="relative overflow-hidden p-10"
    >
      <h1 className="text-3xl font-bold text-center"> Services </h1>
      <div className="flex flex-col items-center my-10 gap-4">
        <motion.p className="text-3xl font-semibold bg-slate-200 p-5 w-full text-center">
          ✈️ International Couriers
          <p className="text-xl font-light">Contact for more information</p>
        </motion.p>
        <motion.p className="text-3xl font-semibold bg-slate-200 p-5 w-full text-center">
          🧑‍💻 Online Consulation
          <p className="text-xl font-light">WhatsApp - 97890 12442</p>
        </motion.p>
      </div>
    </motion.main>
  );
}

export default Services;
