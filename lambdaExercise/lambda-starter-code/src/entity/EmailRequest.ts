export class EmailRequest {
  to: string;
  from: string;
  subject: string;
  textBody: string;
  htmlBody: string;

  constructor(
    to: string,
    from: string,
    subject: string,
    textBody: string,
    htmlBody: string
  ) {
    this.to = to;
    this.from = from;
    this.subject = subject;
    this.textBody = textBody;
    this.htmlBody = htmlBody;
  }
}
