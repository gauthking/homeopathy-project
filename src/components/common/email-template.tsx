/* eslint-disable react-refresh/only-export-components */
import { Tailwind } from "@react-email/tailwind";
import { Heading } from "@react-email/heading";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";

interface IEmailTemplate {
  name: string;
  subject: string;
  body: string;
}

const EmailTemplate = ({ name, subject, body }: IEmailTemplate) => {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              primary: "#4200FF",
              border: "4200FF",
              destructive: "#f43f5e",
            },
          },
        },
      }}
    >
      <Section className="container">
        <Section className="border h-screen">
          <Heading
            as="h1"
            className="flex text-xl gap-1 font-semibold whitespace-nowrap capitalize"
          >
            Joy <Text className="text-primary">Homeo</Text>
          </Heading>
          <Section className="border-neutral-500/40 border-t-[0.1px] w-[90%] mx-auto my-4"></Section>

          <Section className="flex flex-col gap-y-10 p-8">
            <Heading as="h1">Subject : {subject}</Heading>
            Hi, I am {name}
            <Text>{body}</Text>
          </Section>
        </Section>
      </Section>
    </Tailwind>
  );
};

export default EmailTemplate;
