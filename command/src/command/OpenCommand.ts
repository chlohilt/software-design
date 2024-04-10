import {Command} from "./Command";
import {TextEditor} from "../editor/TextEditor";
import {IDocument} from "../document/IDocument";

export class OpenCommand implements Command {
    textEditor: TextEditor
    oldDocument: IDocument
    openFileName: string

    constructor(textEditor: TextEditor, openFileName: string) {
        this.textEditor = textEditor
        this.oldDocument = textEditor.document
        this.openFileName = openFileName
    }

    execute() {
        this.textEditor.document.open(this.openFileName)
    }

    undo() {
        this.textEditor.document = this.oldDocument
    }

}