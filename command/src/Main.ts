import { CustomDocument } from "./document/CustomDocument";
import { TextEditor } from "./editor/TextEditor";
import { ISequence } from "./sequence/ISequence";
import { Sequence } from "./sequence/Sequence";

main();

function main() {
  const sequence: ISequence = new Sequence();
  const document = new CustomDocument(sequence);
  const editor = new TextEditor(document);
  editor.run();
}
