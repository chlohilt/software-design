import { EmailRequest } from "./entity/EmailRequest";
import { handler } from "./lambda/EmailSender";

sendEmail();

async function sendEmail() {
  console.log(
    await handler(
      new EmailRequest(
        "TODO: Add email.",
        "TODO: Add email.",
        "TODO: Add subject.",
        "TODO: Add textBody.",
        "TODO: Add htmlBody."
      )
    )
  );
}
