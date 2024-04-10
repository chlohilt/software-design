import { IDocument } from "./IDocument";
import { ISequence } from "../sequence/ISequence";
import * as fs from "fs";
import nReadlines from "n-readlines";

// This class in not named Document since Document can get conflated with html Document.
export class CustomDocument implements IDocument {
  private _sequence: ISequence;
  private _length: number;
  private _cursor: number;

  constructor(sequence: ISequence) {
    this._sequence = sequence;
    this._length = 0;
    this._cursor = 0;
  }

  insert(pos: number, s: string): void {
    this._sequence.insert(pos, s);
    this._length += s.length;
    this._cursor += s.length;
  }

  delete(pos: number, count: number): string {
    this._length -= count;
    this._cursor = pos;
    return this._sequence.delete(pos, count);
  }

  fileExists(filename: string): boolean {
    return fs.existsSync(filename);
  }

  deleteFile(filename: string): void {
    fs.unlinkSync(filename);
  }

  getContents(): string {
    return this._sequence.toString();
  }

  save(fileName: string): void {
    try {
      const fd = fs.openSync(fileName, "w");
      fs.writeSync(fd, this._sequence.toString());
      fs.closeSync(fd);
    } catch (err) {
      throw new Error("Could not perform save operation: " + err);
    }
  }

  open(fileName: string): void {
    try {
      const lines = new nReadlines(fileName);
      this.clear();

      let lineBuffer: false | Buffer;
      while ((lineBuffer = lines.next())) {
        const line = lineBuffer.toString();
        this._sequence.insert(this._cursor, line);
        this._cursor += line.length;
        this._length += line.length;
      }
    } catch (err) {
      console.log(
        "\x1b[36m%s\x1b[0m", //cyan
        "\nFailure opening file: " + err + "\n"
      );
    }
  }

  clear(): void {
    this._sequence.clear();
    this._length = 0;
    this._cursor = 0;
  }

  get sequence(): ISequence {
    return this._sequence;
  }
}
