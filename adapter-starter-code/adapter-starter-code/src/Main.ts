import { Table } from "./table/Table";
import { ContactManager } from "./contact/ContactManager";
import { TableData } from "./table/TableData";

function Main() {
  const contactManager: ContactManager = new ContactManager();

  // TODO: Create and add contacts to the contact manager

  const contactsTable: TableData = //TODO: Instantiate the adapter that implements the TableData interface and adapts/wraps the ContactManager
  const table = new Table(contactsTable, (value: any) => process.stdout.write(value));

  table.display();
}

Main();
