import { useScroll, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Subscribe = () => {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState<any>(["0 1", "1.6 3.5"]);
  const [selectedDisease, setSelectedDisease] = useState(null);
  const [contentVisible, setContentVisible] = useState(false);
  const treatments: Array<{ name: string; description: string }> = [
    {
      name: "Arthritis",
      description:
        "Homeopathy eases arthritis with natural remedies like Arnica and Rhus tox, reducing pain and inflammation. It supports the body's innate healing for lasting relief.",
    },
    {
      name: "Migraine",
      description:
        "Homeopathy offers relief from migraines through remedies like Belladonna and Iris versicolor. It targets triggers and reduces the frequency and intensity of migraine attacks.",
    },
    {
      name: "Dandruff",
      description:
        "Homeopathy effectively treats dandruff with remedies like Sulphur and Kali sulphuricum. It targets the root causes, promoting a healthy scalp and preventing recurrence.",
    },
    {
      name: "Insomnia",
      description:
        "Homeopathy offers natural solutions for insomnia. Remedies like Coffea cruda and Passiflora incarnata help calm the mind, promoting restful sleep without side effects.",
    },
    {
      name: "Hair Loss",
      description:
        "Homeopathy addresses hair loss by targeting underlying causes and stimulating hair growth. Remedies like Silicea and Lycopodium aid in strengthening hair follicles and reducing hair fall.",
    },
    {
      name: "Thyroid",
      description:
        "Homeopathy supports thyroid function with remedies like Thyroidinum and Iodium. It helps regulate hormonal imbalances, providing relief from symptoms associated with thyroid disorders.",
    },
  ];
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setOffset(["0 1", "1 1.3"]);
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

  const handleClick = (disease) => {
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
            className="treatmentsbox flex flex-col items-center justify-center px-2 text-sm md:text-lg font-medium border-2 border-gray-100 bg-slate-100 rounded-2xl gap-4 shadow-lg shadow-gray-200 cursor-pointer min-h-[120px] md:min-h-[230px]"
            onClick={() => handleClick(treatment.name)}
          >
            <p className=" mt-4 md:hover:bg-slate-300 md:rounded-lg md:p-2">
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
                className="p-2 rounded-md max-w-xs text-sm font-light text-center my-6 md:my-2"
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
