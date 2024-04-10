import { IDocument } from "../document/IDocument";
import { UserInputReader } from "./UserInputReader";
import * as readline from "readline";
import {InsertCommand} from "../command/InsertCommand";
import {OpenCommand} from "../command/OpenCommand";
import {ReplaceCommand} from "../command/ReplaceCommand";
import {UndoRedoManager} from "../command/UndoRedoManager";
import {DeleteCommand} from "../command/DeleteCommand";

export class TextEditor {
  get document(): IDocument {
    return this._document;
  }

  set document(value: IDocument) {
    this._document = value;
  }
  get consoleReader(): readline.Interface {
    return this._consoleReader;
  }

  set consoleReader(value: readline.Interface) {
    this._consoleReader = value;
  }
  private _document: IDocument;
  private _consoleReader: readline.Interface;
  private undoRedoManager: UndoRedoManager

  constructor(document: IDocument) {
    this._document = document;
    this._consoleReader = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.undoRedoManager = new UndoRedoManager()
  }

  run(): void {
    this._consoleReader.question(this.getOptions(), (input) => {
      const option = UserInputReader.validateNumberInput(input);
      switch (option) {
        case -1:
          console.log(
            "\x1b[36m%s\x1b[0m", //cyan
            "User option returned -1."
          );
          break;
        case 1:
          this.insert();
          break;
        case 2:
          this.delete();
          break;
        case 3:
          this.replace();
          break;
        case 4:
          console.log(this._document.getContents());
          break;
        case 5:
          this.save();
          break;
        case 6:
          this.open();
          break;
        case 7:
          this._document.clear();
          break;
        case 8:
          this.undoRedoManager.undo()
          break;
        case 9:
          this.undoRedoManager.redo()
          break;
        case 10:
          process.exit(1);
      }
      console.log();
      this.run();
    });
  }

  private getOptions(): string {
    return `
SELECT AN OPTION (1 - 10):

1. Insert a string at a specified index in the document
2. Delete a sequence of characters at a specified index
3. Replace a sequence of characters at a specified index with a new string
4. Display the current contents of the document
5. Save the document to a file
6. Open a document from a file
7. Start a new, empty document
8. Undo
9. Redo
10. Quit

Your selection: `;
  }

  private insert(): void {
    const insertionInput = UserInputReader.getUserInput("Start index: ");
    const insertionIndex = UserInputReader.validateNumberInput(insertionInput);
    const sequenceInput = UserInputReader.getUserInput("Sequence to insert: ");
    let insertCommand = new InsertCommand(this, insertionIndex, sequenceInput)
    this.undoRedoManager.execute(insertCommand)
  }

  private delete(): void {
    const deletionIndexInput = UserInputReader.getUserInput("Start index: ");
    const deletionIndex =
      UserInputReader.validateNumberInput(deletionIndexInput);

    const deletionDistanceInput = UserInputReader.getUserInput(
      "Number of characters to delete: "
    );

    const deletionDistance = UserInputReader.validateNumberInput(
      deletionDistanceInput
    );

    let deleteCommand = new DeleteCommand(this, deletionIndex, deletionDistance)
    this.undoRedoManager.execute(deleteCommand)
  }

  private replace(): void {
    const replaceIndexInput = UserInputReader.getUserInput("Start index: ");
    const replaceIndex = UserInputReader.validateNumberInput(replaceIndexInput);

    let replaceDistance: number = 0;
    let replacementString: string = "";

    if (replaceIndex != -1) {
      const replaceDistanceInput = UserInputReader.getUserInput(
        "Number of characters to replace: "
      );
      replaceDistance =
        UserInputReader.validateNumberInput(replaceDistanceInput);

      if (replaceDistance != -1) {
        replacementString = UserInputReader.getUserInput(
          "Replacement string: "
        );
      }

      let replaceCommand = new ReplaceCommand(this, replaceIndex, replaceDistance, replacementString)
      this.undoRedoManager.execute(replaceCommand)
    }
  }

  private save(): void {
    const saveFileName = UserInputReader.getUserInput("Name of file: ");

    if (this._document.fileExists(saveFileName)) {
      console.log("Overwriting existing file.");
    } else {
      console.log("Writing to new file.");
    }

    this._document.save(saveFileName);
  }

  private open(): void {
    const openFileName = UserInputReader.getUserInput("Name of file to open: ");
    let openCommand = new OpenCommand(this, openFileName)
    this.undoRedoManager.execute(openCommand)
  }
}
