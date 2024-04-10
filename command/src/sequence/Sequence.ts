import { ISequence } from "./ISequence";

export class Sequence implements ISequence {
  private _sequence: string[];

  constructor() {
    this._sequence = [];
  }

  insert(pos: number, s: string): void {
    const oneCharStringArray: string[] = s.split("");
    // The second parameter to splice specifies how many items to delete. We want to delete zero items.
    // The ... deconstructs the array into a list of parameters.
    this._sequence.splice(pos, 0, ...oneCharStringArray);
  }

  delete(pos: number, count: number): string {
    try {
      const deletedText = this._sequence.slice(pos, pos + count).join("");
      this._sequence.splice(pos, count);
      return deletedText;
    } catch (err) {
      throw new Error("Sequence could not delete because of error: " + err);
    }
  }

  clear(): void {
    this._sequence = [];
  }

  toString(): string {
    return this._sequence.join("");
  }
}
