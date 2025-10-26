import PageContainer from "./page-container";
const FooterSection = () => {
  return (
    // Footer section with form submission
    <footer id="footer" className="bg-zinc-100 py-20 px-10 text-xl">
      {/* PageContainer component with grid layout */}
      <PageContainer className="grid h-full space-y-20 lg:grid-cols-2 border-3">
        {/* Left column containing branding and navigation */}
        <div className="md:px-4 flex-col lg:flex-row px-4 sm:px-auto flex w-full ">
          <div className="h-full flex flex-col w-full justify-between">
            <div>
              {/* Logo and title */}
              <h1 className="flex text-4xl gap-1 font-semibold whitespace-nowrap capitalize">
                Joy <span className="text-primary">Homeo</span>
              </h1>
              <p className="text-xs mx-0.5 mt-1 italic">
                Unleash the Power of Natural Healing with Homeopathy
              </p>
              <div className="w-full bg-neutral-200  h-[1px]"></div>
              <div className="flex items-center justify-center h-full ">
                <div className="mapembed">
                  <h1 className="text-3xl text-center font-semibold my-6">
                    Reach us
                  </h1>
                  <iframe
                    className="w-72 h-72 md:h-[400px] md:w-[400px]"
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3885.8035536311813!2d80.23944867507889!3d13.111627987216838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDA2JzQxLjkiTiA4MMKwMTQnMzEuMyJF!5e0!3m2!1sen!2sin!4v1695201871366!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Address information */}
            {/* <p className="max-w-[400px] text-xs font-light text-justify text-neutral-400">
              Address No.47, 2nd street, Bunder garden, Perambur, Chennai 600
              011 Opposite Perambur Lourdes shrine church and Sen hospital
            </p> */}
          </div>
          {/* Vertical separator */}
          <div className="lg:h-full w-full h-[.4px] mt-10 lg:mt-auto bg-neutral-200 lg:w-[.4px]"></div>
        </div>

        {/* Right column containing contact form */}
        <div className="flex flex-col space-y-10 md:space-x-6 px-4">
          {/* Contact Us title */}
          <h1 className="text-start w-full text-3xl md:text-5xl font-extralight">
            Contact Us
          </h1>
          <p className=" text-lg text-justify text-gray-500">
            Address No.47, 2nd street, Bunder garden, Perambur, Chennai 600011
            Opposite Perambur Lourdes shrine church and Sen hospital <br />
            Ph-No : 97890 12442
          </p>
          <h1 className="text-start w-full text-3xl md:text-5xl font-extralight">
            Timings
          </h1>

          <p className=" text-lg text-justify text-gray-500">
            Monday - Saturday <br /> Morning : 11.30am to 2.30pm <br /> Evening
            : 6pm to 9pm <br /> Sunday evenings only : 6pm to 9pm <br />{" "}
            Consultation on appointment basis. <br /> Please call and fix your
            appointment.
          </p>

          <h1 className="text-start w-full text-3xl md:text-5xl font-extralight">
            Payment Info
          </h1>

          <p className=" text-lg text-justify text-gray-500">
            Account Transfer: <br /> State Bank of India <br />
            Name : OSWIN DELPHINA MARIAM S <br />
            Account No : 31691713934 <br />
            IFSC CODE : SBIN0011715
            <br />
            BANK : STATE BANK OF INDIA
            <br />
            Branch : Kodungaiyur
            <br />
          </p>

          <p className="font-semibold">
            Google Pay Number :{" "}
            <div className="font-light flex items-center  gap-3">
              <p>+91 9789012442</p>
              {/* <a
                href="upi://pay?pa=peter17in@oksbi&amp;pn=Peter&amp;cu=INR"
                className=" bg-primary text-white font-medium rounded-md cursor-pointer hover:bg-primary/80 p-1 text-sm"
              >
                Click Here
              </a> */}
            </div>
          </p>
        </div>
      </PageContainer>
    </footer>
  );
};

export default FooterSection;
