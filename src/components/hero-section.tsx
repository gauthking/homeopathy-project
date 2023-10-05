import CustomButton from "./common/custom-btn";
import PageContainer from "./page-container";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section>
      <motion.div
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
              delay: 0.6,
            },
          },
        }}
      >
        <PageContainer className="grid lg:grid-cols-2 h-screen">
          <div className="flex relative after:content-[''] md:after:w-[500px] after:z-[-1] after:blur-[100px] after:w-[300px] after:h-[300px] md:after:h-[500px] after:rounded-full place-items-center  after:bg-blue-500 after:absolute items-center justify-center xl:p-24">
            <div className="flex flex-col space-y-4 mx-10">
              <h1 className="md:text-5xl text-3xl text-center lg:text-start md:leading-10 text-primary font-bold">
                We care
                <br />
                <span className="text-neutral-800 font-medium">
                  {" "}
                  about your health
                </span>
              </h1>
              <p className="md:text-lg text-sm text-center lg:text-start mx-6">
                Nurturing health holistically, embracing mind, body, and
                connections. Discover complete well-being and healing through
                homeopathy
              </p>
              <a
                href={"#footer"}
                className="lg:justify-start flex justify-center"
              >
                <CustomButton className="rounded-lg cursor-pointer text-xs text-white bg-primary hover:bg-primary/80  px-4 py-3 font-medium self-center lg:self-start w-[50%] lg:w-[60%]">
                  Contact us
                </CustomButton>
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <img src={"/hero.svg"} height={"100%"} width={"100%"} />
          </div>
        </PageContainer>
      </motion.div>
    </section>
  );
};

export default HeroSection;
