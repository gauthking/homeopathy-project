import { useScroll, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Subscribe = () => {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(["0 1", "1.6 3.5"]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setOffset(["0 1", "1 1.4"]); // Adjust the offset for mobile screens
      } else {
        setOffset(["0 1", "1.4 1.1"]);
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
      <h1 className="text-3xl font-bold text-center">
        Our Treatments in Chennai{" "}
      </h1>
      <div className="grid grid-cols-1 my-10 md:grid-cols-3 gap-6 py-10">
        <div className="treatmentsbox flex flex-col items-center justify-center p-8 text-sm md:text-lg   font-medium border-2 border-gray-100 bg-slate-100 rounded-2xl gap-4 shadow-sm shadow-gray-200">
          <p>Arthritis</p>
          <p>Allergic</p>
          <p>Anxiety Disorder</p>
          <p>Backpain</p>
          <p>Allergic Conjctivities</p>
        </div>

        <div className="treatmentsbox flex flex-col items-center justify-center p-8 text-sm md:text-lg   font-medium border-2 border-gray-100 bg-slate-100 rounded-2xl gap-4 shadow-sm shadow-gray-200">
          <p>Hair Loss</p>
          <p>Infertility</p>
          <p>Goitre</p>
          <p>Insomnia</p>
          <p>Migraine</p>
        </div>

        <div className="treatmentsbox flex flex-col items-center justify-center p-8 text-sm md:text-lg   font-medium border-2 border-gray-100 bg-slate-100 rounded-2xl gap-4 shadow-sm shadow-gray-200">
          <p>Thyroid</p>
          <p>Tonsillitis</p>
          <p>Tennis Elbow</p>
          <p>Uterine Fibroids</p>
          <p>Dandruff </p>
        </div>
      </div>
    </motion.main>
  );
};

export default Subscribe;
