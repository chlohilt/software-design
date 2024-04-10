import {Command} from "./Command";
import {TextEditor} from "../editor/TextEditor";
import {IDocument} from "../document/IDocument";

export class StartCommand implements Command {
    textEditor: TextEditor
    oldDocument: IDocument

    constructor(textEditor: TextEditor) {
        this.textEditor = textEditor
        this.oldDocument = textEditor.document
    }
    execute() {
        this.textEditor.document.clear()
    }

    undo() {
        this.textEditor.document = this.oldDocument
    }

}