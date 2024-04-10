import {Command} from "./Command";

export class UndoRedoManager {
    undoStack: Command[]
    redoStack: Command[]

    constructor() {
        this.redoStack = []
        this.undoStack = []
    }
    execute(command: Command) {
        command.execute()
        this.undoStack.push(command)
    }

    undo() {
        if (this.canUndo()) {
            let command = this.undoStack[this.undoStack.length - 1]
            command.undo()
            this.redoStack.push(command)
            this.undoStack.pop()
        }

    }

    redo() {
        if (this.canRedo()) {
            let command = this.redoStack[this.redoStack.length - 1]
            command.execute()
            this.redoStack.pop()
            this.undoStack.push()
        }
    }

    canUndo() {
        return this.undoStack.length !== 0
    }

    canRedo() {
        return this.redoStack.length !== 0
    }

}