"use server";

import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import { renderAsync } from "@react-email/components";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const SENDER_EMAIL = process.env.SENDER_EMAIL || "hello@yourdomain.com";
const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL || "sabbirchowdhury40854@gmail.com";

export const sendEmail = async (formData: FormData) => {
  const senderName = formData.get("senderName");
  const senderEmail = formData.get("senderEmail");
  const subject = formData.get("subject");
  const message = formData.get("message");

  if (!validateString(senderName, 500)) {
    return {
      error: "Invalid sender name",
    };
  }
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(subject, 500)) {
    return {
      error: "Invalid subject",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let emailHtml;
  try {
    emailHtml = await renderAsync(
      ContactFormEmail({
        senderName: senderName as string,
        senderEmail: senderEmail as string,
        subject: subject as string,
        message: message as string,
      })
    );
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: SENDER_EMAIL,
      to: RECEIVER_EMAIL,
      subject: subject ? `Portfolio: ${subject}` : "Message from contact form",
      html: emailHtml,
      reply_to: senderEmail as string,
    });

    if (error) {
      throw new Error(error.message);
    }

    return {
      data,
    };
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
