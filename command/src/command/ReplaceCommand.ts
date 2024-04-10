import {Command} from "./Command";
import {TextEditor} from "../editor/TextEditor";
import {IDocument} from "../document/IDocument";

export class ReplaceCommand implements Command {
    textEditor: TextEditor
    oldDocument: IDocument
    replaceIndex: number
    replaceDistance: number
    replacementString: string

    constructor(textEditor: TextEditor, replaceIndex: number, replaceDistance: number, replacementString: string) {
        this.textEditor = textEditor
        this.oldDocument = textEditor.document
        this.replaceIndex = replaceIndex
        this.replaceDistance = replaceDistance
        this.replacementString = replacementString
    }
    execute() {
        this.textEditor.document.delete(this.replaceIndex, this.replaceDistance)
        this.textEditor.document.insert(this.replaceIndex, this.replacementString)
    }

    undo() {
        this.textEditor.document.insert(this.replaceIndex, this.replacementString)
        this.textEditor.document.delete(this.replaceIndex, this.replaceDistance)
    }

}