/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef } from "react";
import CustomButton from "./common/custom-btn";
import CustomInput from "./common/custom-input";
import CustomTextArea from "./common/custom-text-area";
import PageContainer from "./page-container";
import { Link } from "react-router-dom";

/**
 * @interface FooterSectionProps - Props for the FooterSection component.
 */
interface FooterSectionProps {}

/**
 * FooterSection Component
 * @props {FooterSectionProps} props - The component props.
 */
const FooterSection: React.FC<FooterSectionProps> = (
  _props: FooterSectionProps
) => {
  // Create a reference for the form element
  const formRef = useRef<HTMLFormElement>(null);

  /**
   * Handles form submission
   * @param {React.FormEvent<HTMLFormElement>} event - The form submission event.
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Create a FormData object to capture form data
    const formData = new FormData(formRef.current as HTMLFormElement);
    const name = formData.get("name")?.toString();
    const subject = formData.get("subject")?.toString();
    const email = formData.get("email")?.toString();
    const message = formData.get("message")?.toString();
  };

  return (
    // Footer section with form submission
    <footer id="footer" onSubmit={handleSubmit} className="bg-zinc-100 py-20">
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
              <div className="w-full bg-neutral-200 my-4 h-[1px]"></div>
              <div className="grid grid-cols-2 py-4 h-full ">
                {/* Navigation links */}
                <ul>
                  <li>
                    <Link
                      className="text-sm relative after:absolute after:bottom-0
                      after:left-0 hover:after:w-full after:transition-all after:content-[''] after:bg-black after:h-[.2px] after:w-0"
                      to={"/#"}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm relative after:absolute after:bottom-0
                      after:left-0 hover:after:w-full after:transition-all after:content-[''] after:bg-black after:h-[.2px] after:w-0"
                      to={"/#"}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link
                      className="text-sm relative after:absolute after:bottom-0
                      after:left-0 hover:after:w-full after:transition-all after:content-[''] after:bg-black after:h-[.2px] after:w-0"
                      to={"/#"}
                    >
                      Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm relative after:absolute after:bottom-0
                      after:left-0 hover:after:w-full after:transition-all after:content-[''] after:bg-black after:h-[.2px] after:w-0"
                      to={"/#"}
                    >
                      About us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Address information */}
            <p className="max-w-[400px] text-xs font-light text-justify text-neutral-400">
              Address No.47, 2nd street, Bunder garden, Perambur, Chennai 600
              011 Opposite Perambur Lourdes shrine church and Sen hospital
            </p>
          </div>
          {/* Vertical separator */}
          <div className="lg:h-full w-full h-[.4px] mt-10 lg:mt-auto bg-neutral-200 lg:w-[.4px]"></div>
        </div>

        {/* Right column containing contact form */}
        <div className="flex flex-col space-y-6 justify-center px-4 items-center">
          {/* Contact Us title */}
          <h1 className="text-start w-full text-5xl font-extralight">
            Contact Us
          </h1>

          {/* Form with custom input fields */}
          <form ref={formRef} className="flex w-full flex-col gap-y-2">
            {/* Custom input for name */}
            <CustomInput
              required
              label="name"
              type="text"
              name="name"
              placeholder="Your Name"
              minLength={2}
              maxLength={50}
              pattern="[A-Za-z\s]+"
              title="Please enter a valid name"
              // ARIA attributes for accessibility
              aria-label="Your Name"
              aria-required={true}
            />
            <CustomInput
              required
              label="Subject"
              type="text"
              name="subject"
              placeholder="Subject..."
              minLength={2}
              maxLength={100}
              title="Please enter a valid Subject"
              // ARIA attributes for accessibility
              aria-label="Subject"
              aria-required={true}
            />
            {/* Custom input for email */}
            <CustomInput
              required
              label="email"
              type="email"
              name="email"
              placeholder="Your Email"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
              title="Please enter a valid email address"
              // ARIA attributes for accessibility
              aria-label="Your Email"
              aria-required={true}
            />
            {/* Custom text area for message */}
            <CustomTextArea
              required
              label="message"
              minLength={10}
              maxLength={500}
              name="message"
              title="Please enter a message between 10 and 500 characters"
              // ARIA attributes for accessibility
              aria-label="Message"
              aria-required={true}
            />
            {/* Custom button for form submission */}
            <CustomButton className="border w-full mt-2 cursor-pointer bg-primary text-white rounded text-xs font-medium hover:bg-primary/80 py-1.5 px-2">
              Send Message
            </CustomButton>
          </form>
        </div>
      </PageContainer>
    </footer>
  );
};

export default FooterSection;
