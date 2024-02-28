import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { EmailRequest } from "../entity/EmailRequest";
import { EmailResponse } from "../entity/EmailResponse";
import moment from "moment";

const sesClient = new SESClient();

export const handler = async (event: EmailRequest): Promise<EmailResponse> => {
  const sendEmailCommand: SendEmailCommand = createSendEmailCommand(event);

  try {
    await sesClient.send(sendEmailCommand);
    return new EmailResponse("Email sent.", getFormattedDate());
  } catch (e) {
    throw Error("Failed to send email. " + e);
  }
};

function getFormattedDate(): string {
  let date: Date = new Date();
  return moment(date).format("DD-MMM-YYYY HH:mm:ss");
}

const createSendEmailCommand = (event: EmailRequest): SendEmailCommand => {
  return new SendEmailCommand({
    Destination: {
      ToAddresses: [
        event.to,
        /* more To-email addresses */
      ],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: event.htmlBody,
        },
        Text: {
          Charset: "UTF-8",
          Data: event.textBody,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: event.subject,
      },
    },
    Source: event.from,
  });
};
