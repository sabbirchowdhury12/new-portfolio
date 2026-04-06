"use server";

import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import { renderAsync } from "@react-email/components";

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL || "hello@yourdomain.com";
const BREVO_SENDER_NAME = process.env.BREVO_SENDER_NAME || "Portfolio";
const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL || "sabbirchowdhury40854@gmail.com";

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
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
        message: message as string,
        senderEmail: senderEmail as string,
      })
    );
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY!,
      },
      body: JSON.stringify({
        sender: {
          name: BREVO_SENDER_NAME,
          email: BREVO_SENDER_EMAIL,
        },
        to: [
          {
            email: RECEIVER_EMAIL,
          },
        ],
        replyTo: {
          email: senderEmail as string,
        },
        subject: "Message from contact form",
        htmlContent: emailHtml,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to send email");
    }

    return {
      data: await response.json(),
    };
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
