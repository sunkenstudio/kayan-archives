'use server';
import { Resend } from 'resend';
import { SubscriberEmailTemplate } from './_components/EmailTemplate';

type Payload = Record<string, string>;
export const sendSubscriberEmail = async (formData: Payload) => {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const sender = process.env.RESEND_SENDER_EMAIL;
    const receiver = process.env.RESEND_RECEIVER_EMAIL;
    if (sender && receiver) {
      await resend.emails.send({
        from: sender,
        to: receiver,
        subject: 'New Subscriber',
        react: SubscriberEmailTemplate(formData),
      });
    }
    return {
      error: null,
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      error: (error as Error).message,
      success: false,
    };
  }
};
