import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  senderName: string;
  senderEmail: string;
  subject: string;
  message: string;
};

export default function ContactFormEmail({
  senderName,
  senderEmail,
  subject,
  message,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>
        {subject ? subject : "New message from your portfolio site"}
      </Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white my-10 px-10 py-6 rounded-md shadow-sm">
              <Heading className="text-2xl text-gray-900">
                New message from {senderName}
              </Heading>
              {subject && (
                <Text className="text-sm font-semibold text-gray-900">
                  Subject: <span className="font-normal">{subject}</span>
                </Text>
              )}
              <Text className="text-base text-gray-700">{message}</Text>
              <Hr />
              <Text className="text-sm text-gray-500">
                Reply to: {senderName} - {senderEmail}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
