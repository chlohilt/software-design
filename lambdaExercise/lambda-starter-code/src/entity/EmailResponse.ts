export class EmailResponse {
  message: string;
  timestamp: string;

  constructor(message: string, timestamp: string) {
    this.message = message;
    this.timestamp = timestamp;
  }
}
