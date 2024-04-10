import {Command} from "./Command";
import {TextEditor} from "../editor/TextEditor";
import {UserInputReader} from "../editor/UserInputReader";

export class InsertCommand implements Command {
    textEditor: TextEditor
    insertionIndex: number
    sequenceInput: string
    constructor(textEditor: TextEditor, insertionIndex: number, sequenceInput: string) {
        this.textEditor = textEditor
        this.insertionIndex = insertionIndex
        this.sequenceInput = sequenceInput
    }
    execute() {
        this.textEditor.document.insert(this.insertionIndex, this.sequenceInput)
    }

    undo() {
        if (this.textEditor.document.delete(this.insertionIndex, this.sequenceInput.length) == null) {
            console.log("Deletion unsuccessful");
        }
    }

}