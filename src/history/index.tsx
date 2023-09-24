import CustomButton from "@/components/common/custom-btn";

const History = () => {
  return (
    <section className="flex flex-col items-center justify-center p-10 gap-10">
      <div className="text-center">
        <h3 className="font-bold text-3xl">History</h3>
        <h1 className="font-medium text-3xl">
          Know About Early Homeopathy & Other Facts
        </h1>
      </div>
      <img
        src={"/hahne.jpg"}
        className=" border rounded-lg w-80"
        alt="loading..."
      />
      <div className="flex flex-col justify-center items-center gap-y-4">
        <p className="text-lg md:text-xl text-justify text-neutral-800 mb-4">
          Homeopathy was founded 200 years ago by Dr. Samuel Hahnemann with his
          famous concept “similia similibus curentur” (‘let like cure
          likes’).The system of Homeopathy is holistic as it considers the
          entire individual’s physical, mental and emotional symptoms and treats
          the sum of the symptoms according to the “rule of similie”.In India,
          the history of Homeopathy is linked with the name of Dr. Honiberger, a
          French man who brought Homeopathy to India in 1829. He was invited to
          treat Maharaja Ranjit Singh of Punjab.The system spread from eastern
          regions to U.P, Delhi, Kerala and Karnataka. Homeopathy is gentle
          without any hazards or harm. It is suitable for adults, children and
          pregnant or breastfeeding women.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-2">
          <img
            src={"/med.png"}
            className=" border rounded-lg w-80"
            alt="loading..."
          />
          <img
            src={"/med1.png"}
            className=" border rounded-lg w-80"
            alt="loading..."
          />
        </div>
        <p className="text-lg md:text-xl text-justify text-neutral-800">
          Homeopathy is an alternative system of medicine that uses highly
          diluted natural substances to stimulate the body’s own healing
          mechanism.Rooted in centuries-old principles, homeopathy is an
          alternative healing approach that goes against the usual methods of
          modern medicine.many people believe in its curative powers Introduced
          in the late 18th century by German physician Samuel Hahnemann,
          homeopathy is a holistic approach of medicine that endures to this
          day. Homeopathy draws upon age-old principles rooted in traditional
          healing practices and ancient beliefs about how the body and nature
          interact. The preparation of homeopathic remedies involves a process
          of dilution and shaking, with the notion that the more diluted a
          substance becomes, the more potent it is within the context of
          homeopathy
        </p>
      </div>
    </section>
  );
};

export default History;
