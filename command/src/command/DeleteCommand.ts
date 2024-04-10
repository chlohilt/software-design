import {Command} from "./Command";
import {TextEditor} from "../editor/TextEditor";
import {IDocument} from "../document/IDocument";

export class DeleteCommand implements Command {
    textEditor: TextEditor
    oldDocument: IDocument
    replaceIndex: number
    replaceDistance: number
    stringDeleted: string = ''

    constructor(textEditor: TextEditor, replaceIndex: number, replaceDistance: number) {
        this.textEditor = textEditor
        this.oldDocument = textEditor.document
        this.replaceIndex = replaceIndex
        this.replaceDistance = replaceDistance
    }
    execute() {
        this.stringDeleted = this.textEditor.document.delete(this.replaceIndex, this.replaceDistance)
    }

    undo() {
        this.textEditor.document.insert(this.replaceIndex, this.stringDeleted)
    }

}