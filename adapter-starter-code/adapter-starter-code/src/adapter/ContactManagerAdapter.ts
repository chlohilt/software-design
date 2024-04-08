import {TableData} from "../table/TableData";
import {Justification} from "../entity/Justification";
import {ContactManager} from "../contact/ContactManager";

export class ContactManagerAdapter implements TableData {
    private contactManager: ContactManager
    constructor(contactManager: ContactManager) {
        this.contactManager = contactManager
    }

    getCellValue(row: number, col: number): string {
        if (col == 0) return this.contactManager.getContact(row).firstName
        else if (col == 1) return this.contactManager.getContact(row).lastName
        else if (col == 2) return this.contactManager.getContact(row).phone
        else if (col == 3) return this.contactManager.getContact(row).email
        else return 'wrong col num'
    }

    getColumnCount(): number {
        return this.contactManager.getContactCount()
    }

    getColumnHeader(col: number): string {
        if (col == 0) return 'firstName'
        else if (col == 1) return 'lastName'
        else if (col == 2) return 'phone'
        else if (col == 3) return 'email'
        else return 'wrong col num'

    }

    getColumnJustification(col: number): Justification {
        return Justification.Center;
    }

    getColumnSpacing(): number {
        return 10;
    }

    getColumnWidth(col: number): number {
        return 3;
    }

    getHeaderUnderline(): string {
        return "";
    }

    getRowCount(): number {
        return this.contactManager.getContactCount();
    }

    getRowSpacing(): number {
        return 1;
    }

}