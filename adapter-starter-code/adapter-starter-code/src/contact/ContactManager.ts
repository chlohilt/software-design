import { Contact } from "../entity/Contact";

export class ContactManager {
  private contacts: Contact[] = [];

  getContactCount(): number {
    return this.contacts.length;
  }

  getContact(index: number): Contact {
    return this.contacts[index];
  }

  setContact(index: number, value: Contact): void {
    this.contacts[index] = value;
  }

  addContact(value: Contact): void {
    this.contacts.push(value);
  }
}
