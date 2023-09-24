const AboutSection = () => {
  return (
    <main className="">
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
            visitors in locating this establishment. It is known to provide top
            service in the following categories: Clinics, Homeopathic Clinics,
            Piles Doctors.
          </p>
          {/* <CustomButton className="max-w-fit mt-4 bg-primary text-white font-medium rounded-md cursor-pointer hover:bg-primary/80 px-6 py-2 text-sm">
          More About us
        </CustomButton> */}
        </div>
      </section>
      <section
        id={"about"}
        className="grid p-4 sm:p-auto md:grid-cols-2 px-10 my-16"
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
        <img
          src={"/doctor1.jpg"}
          className=" border rounded-lg"
          alt="loading..."
        />
      </section>
    </main>
  );
};

export default AboutSection;
