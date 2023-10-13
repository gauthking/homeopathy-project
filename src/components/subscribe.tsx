import { useScroll, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Subscribe = () => {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState<any>(["0 1", "1.6 3.5"]);
  const [selectedDisease, setSelectedDisease] = useState(null);
  const [contentVisible, setContentVisible] = useState(false);
  const treatments: Array<{ name: string; description: string }> = [
    {
      name: "Metabolic Health",
      description:
        "Homeopathy offers remedies that are believed to support the body's natural processes, potentially aiding in the dissolution of kidney and gall stones. Additionally, it aims to regulate blood sugar levels in diabetes and stabilize blood pressure.",
    },
    {
      name: "Mental Health",
      description:
        "Homeopathy is thought to provide treatments for various psychiatric ailments. By considering the individual's specific symptoms and constitution, homeopathic remedies aim to restore mental balance and well-being.",
    },
    {
      name: "Pain Management",
      description:
        "Homeopathy targets different types of pain including headaches, as well as pain in the shoulders, back, arms, legs, and joints. It seeks to understand the underlying causes and offers remedies that may alleviate discomfort and promote healing.",
    },
    {
      name: "Dermatological Conditions",
      description:
        "Homeopathy addresses skin ailments, dermatitis, and insect bites by considering the unique symptoms and reactions of each individual. Remedies are selected to potentially soothe irritation, promote healing, and reduce inflammation.",
    },
    {
      name: "General Well-being",
      description:
        "Homeopathy seeks to enhance overall well-being by focusing on immunity and weight control. Remedies are chosen to potentially strengthen the body's defenses and support healthy metabolic processes.",
    },
    {
      name: "Metabolism & Arthritis",
      description:
        "Homeopathy may offer treatments to support metabolic functions and provide relief for arthritis. Remedies are selected based on the specific symptoms and constitution of each individual, potentially alleviating pain and inflammation associated with these conditions.",
    },
  ];
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setOffset(["0 1", "1 1.6"]);
      } else {
        setOffset(["0 1", "1.4 1.5"]);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset,
  });

  const handleClick = (disease: any) => {
    setSelectedDisease(disease);
    setContentVisible(!contentVisible);
  };

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
        {treatments.map((treatment) => (
          <div
            className="treatmentsbox flex flex-col items-center justify-center px-2 text-sm md:text-lg font-medium border-2 border-gray-200 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-300 via-gray-300 to-slate-300 rounded-2xl gap-2 shadow-lg shadow-gray-200 cursor-pointer min-h-[120px] md:min-h-[230px]"
            onClick={() => handleClick(treatment.name)}
          >
            <p className="mt-2 md:hover:bg-slate-300 md:rounded-lg md:p-2">
              {treatment.name}
            </p>
            {selectedDisease === treatment.name && contentVisible && (
              <motion.p
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.5,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 0.2,
                    },
                  },
                }}
                className="p-4 rounded-md max-w-xs text-sm font-light text-center"
              >
                {treatment.description}
              </motion.p>
            )}
          </div>
        ))}
      </div>
    </motion.main>
  );
};

export default Subscribe;
