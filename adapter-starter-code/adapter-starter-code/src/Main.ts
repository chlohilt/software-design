import { Table } from "./table/Table";
import { ContactManager } from "./contact/ContactManager";
import { TableData } from "./table/TableData";
import {Contact} from "./entity/Contact";
import {ContactManagerAdapter} from "./adapter/ContactManagerAdapter";

function Main() {
  const contactManager: ContactManager = new ContactManager();

  for (let i = 0; i < 5; ++i) {
    contactManager.addContact(new Contact(`first${i}`, `last${i}`, '1234', `${i}.email.com`))
  }


  const contactsTable: TableData = new ContactManagerAdapter(contactManager)
  const table = new Table(contactsTable, (value: any) => process.stdout.write(value));

  table.display();
}

Main();
