"use client";

import React, { useRef, useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { contactCards } from "@/lib/data";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);
  const [pending, setPending] = useState(false);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 text-center w-full"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading title="GET in touch" sub_title="contact me" />
      <div className="flex flex-wrap w-full justify-between gap-4 mb-5">
        {contactCards.map((card) => (
          <div
            key={card?.title}
            className="flex flex-col p-4 shadow border flex-1 rounded-lg"
          >
            <p className="text-center flex items-center justify-center text-xl">
              {card?.icon}
            </p>
            <p className="mt-2">{card?.title}</p>
            <p className="text-gray-500 dark:text-gray-300 mb-4">
              {card?.describe}
            </p>
          </div>
        ))}
      </div>
      <form
        ref={formRef}
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          e.stopPropagation();
          setPending(true);
          const formData = new FormData(e.currentTarget);
          sendEmail(formData).then(({ data, error }) => {
            if (error) {
              toast.error(error);
            } else {
              toast.success("Email sent successfully!");
              formRef.current?.reset();
            }
            setPending(false);
          });
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn pending={pending} />
      </form>
    </motion.section>
  );
}
