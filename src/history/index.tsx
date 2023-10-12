import { motion } from "framer-motion";
const History = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.7,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.3,
          },
        },
      }}
      className="flex flex-col items-center justify-center p-10 gap-10 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-stone-400 via-slate-200 to-sky-100"
    >
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
        <div className="flex flex-col md:flex-row md:items-center gap-10">
          <img
            src={"/med.png"}
            className=" border rounded-lg w-80"
            alt="loading..."
          />
          <img
            src={"/flower1.png"}
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

      <div className="text-center">
        <h3 className="font-semibold text-3xl">Depression - Flower Medicine</h3>
      </div>

      <p className="text-lg md:text-xl text-justify text-neutral-800">
        Depression is a mood disorder where a person has the persistent feeling
        of sadness or low mood. It can happen due to a variety of reasons. But
        people in depression slowly lose interest in everything and find
        everything meaningless. Some of the symptoms of depression are angry
        outbursts, feeling of sadness, sleep disturbances and loss of interest.
        Speaking of gentle ways of healing depression, Dr.Edward Bach says,
        "Brightening someone's day with a heartfelt compliment, challenging
        depression with opposite actions, collecting moments that make your
        heart smile, embracing lifelong learning, and crafting a feel-good
        playlist. These steps are my gentle push through depression – a reminder
        that small actions can lead to big healing. Discovering your path to
        mental wellness is an unique journey.
      </p>

      <div className="flex flex-col md:flex-row md:justify-evenly gap-10">
        <img
          src={"/flower.png"}
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
        <b>Flower Medicines</b> With so much going on around us, it’s easy to
        feel overwhelmed from time to time. By using Dr.Edward Bach's Original
        Flower Remedies, you can balance your emotions and fulfill your
        potential in a natural, time-tested way.* The flower remedies were
        developed so that the key to overall health was to care for the mind as
        well as the body. It helps to promote emotional wellbeing. It was
        designed to help you gain an understanding of your own emotions, and
        support you as you find emotional balance through an individual,
        personalized approach.
      </p>

      <p className="text-lg md:text-xl text-justify text-neutral-800">
        <b>Flower Medicine</b> in homeopathy are prepared from the flowers of
        wild bushes, plants and trees, also known as <b>Flower Essences</b>.
        Flowers are the crowning experience of a plant’s growth and thus they
        have the highest concentration of life force within them.{" "}
        <b>Flower Medicine</b> have gentle,yet profound healing powers, the
        energy or vibration taken from the flowers gently affects our body and
        mind on subtle levels.
      </p>

      <div className="flex flex-col md:flex-row md:justify-evenly">
        <img
          src={"/flowe2.jpg"}
          className=" border rounded-lg w-80"
          alt="loading..."
        />
      </div>

      <p className="text-lg md:text-xl text-justify text-neutral-800">
        <b>Flower Medicine</b> heals the mind,body and spirit. When peace and
        harmony return to the mind,health and strength automatically return to
        the body. <b>Flower Medicine</b> can never produce an unpleasant
        reaction under any condition. They are safe to use and enables a person
        to get healed mentally. They can be taken with any other kind of
        medicine with absolute safety. None of them is harmful or habit forming.
        They’re prescribed according to the patient’s state of mind, according
        to their moods of -
        <div className="flex flex-col my-2">
          <li>Fear</li>
          <li>Anger</li>
          <li>Stress</li>
          <li>Suicidal Thoughts</li>
          <li>Discouragement</li>
        </div>
      </p>

      <div className="p-4 border-2 border-gray-300 bg-slate-200 rounded-2xl shadow-md m-5 flex-col">
        <p className="font-normal text-lg md:text-xl">
          <span className="font-extrabold text-2xl mx-1 mb-2">"</span>I had
          suicidal thoughts and depression. After taking flower medicines
          prescribed by the doctor, I'm feeling much better. I'm calm and
          peaceful. I feel happy and confident. I can handle things easily now.
          There's so much of relief from stress. I am able to concentrate in my
          studies and I got good marks in the last examination. I'm active and
          healthy. I'm sleeping well. Thank You Doctor!{" "}
          <span className="font-extrabold text-2xl mx-1">"</span>
        </p>
        <i className="float-right m-3 text-xs md:text-sm">
          -Testimony by a Class 12 Student in Chennai after taking Flower
          Medicine for Suicidal Tendencies
        </i>
      </div>
    </motion.section>
  );
};

export default History;
