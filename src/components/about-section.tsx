import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState<any>(["0 1", "1.6 3.5"]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setOffset(["0 1", "1.6 4.7"]); // Adjust the offset for mobile screens
      } else {
        setOffset(["0 1", "1.6 3.5"]);
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
    offset,
  });
  return (
    <motion.main
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
      ref={ref}
      className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-300 via-stone-300 to-gray-100 py-5"
    >
      <section
        id={"about"}
        className="grid p-4 sm:p-auto md:grid-cols-2 px-10 gap-10"
      >
        <img
          src={"/shop.jpg"}
          className=" border rounded-lg"
          alt="loading..."
        />
        <div className="flex flex-col justify-center gap-y-2">
          <h3 className="font-bold text-3xl">About us</h3>
          <h1 className="font-medium text-3xl">We help Your Health</h1>
          <p className=" text-lg text-justify  text-neutral-800 max-w-[600px]">
            Joy Homeo Clinic in Perambur, Chennai is a top player in the
            category Homeopathic Clinics in the Chennai. This well-known
            establishment acts as a one-stop destination servicing customers
            both local and from other parts of Chennai. Over the course of its
            journey, this business has established a firm foothold in it’s
            industry. The belief that customer satisfaction is as important as
            their products and services, have helped this establishment garner a
            vast base of customers, which continues to grow by the day. This
            business employs individuals that are dedicated towards their
            respective roles and put in a lot of effort to achieve the common
            vision and larger goals of the company. In the near future, this
            business aims to expand its line of products and services and cater
            to a larger client base. In Chennai, this establishment occupies a
            prominent location in Perambur. It is an effortless task in
            commuting to this establishment as there are various modes of
            transport readily available. It is at Bundar Garden 2nd Street ,
            Near Subiksha Nursing Home, which makes it easy for first-time
            visitors in locating this establishment.
          </p>
          {/* <CustomButton className="max-w-fit mt-4 bg-primary text-white font-medium rounded-md cursor-pointer hover:bg-primary/80 px-6 py-2 text-sm">
          More About us
        </CustomButton> */}
        </div>
      </section>
      <section
        id={"about"}
        className="grid p-4 sm:p-auto md:grid-cols-2 px-10 my-16 gap-10"
      >
        <div className="flex flex-col justify-center gap-y-2">
          <h3 className="font-bold text-3xl">From the Desk of Chief Doctor</h3>
          <p className=" text-lg text-justify  text-neutral-800 max-w-[600px]">
            At our clinic, we believe in harnessing the power of nature to
            ignite your body's innate healing abilities. Our approach is rooted
            in the fundamental principle of "like cures like." This means that a
            substance which can induce specific symptoms in a healthy individual
            may be employed to address similar symptoms in someone who is
            unwell. <br />
          </p>
          <div className="mb-3  max-w-[600px]">
            <p className="font-semibold text-lg">
              {" "}
              Discover the Remarkable Benefits:
            </p>
            <p>
              {" "}
              - Our Homeopathic remedies have shown exceptional efficacy in
              managing conditions such as diabetes, cholesterol issues, and
              obesity.
            </p>
            <p>
              {" "}
              - No matter where you are, our services extend to every corner of
              the world. Experience the convenience of international courier
              services, ensuring you receive the support you need, no matter the
              distance.
            </p>
          </div>

          {/* <CustomButton className="max-w-fit mt-4 bg-primary text-white font-medium rounded-md cursor-pointer hover:bg-primary/80 px-6 py-2 text-sm">
          More About us
        </CustomButton> */}
        </div>
        <div className="flex flex-col">
          <img
            alt="loading..."
            src={"/doctor1.jpg"}
            className=" border rounded-lg"
          />
          <div className="relative bottom-12 p-3 backdrop-blur-lg opacity-80 bg-slate-600">
            <p className="font-bold text-white" style={{ zIndex: 1 }}>
              {" "}
              Dr Oswin Delphina Mariam
            </p>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default AboutSection;
