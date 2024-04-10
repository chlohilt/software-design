import { ISequence } from "../sequence/ISequence";

export interface IDocument {
  /**
   * Inserts a character sequence into the document
   * @param pos Position at which the character sequence should be inserted
   * @param s Character sequence to be inserted
   */
  insert(pos: number, s: string): void;

  /**
   * Deletes a character sequence from the document
   * @param pos Starting position of the sequence that is being deleted
   * @param count Number of characters to be deleted
   * @return The deleted string
   */
  delete(pos: number, count: number): string;

  /**
   * Returns whether or not a file exists.
   * @param filename
   */
  fileExists(filename: string): boolean;

  /**
   * Deletes a specified file.
   * @param filename
   */
  deleteFile(filename: string): void;

  /**
   * Returns the current contents of the document
   */
  getContents(): string;

  /**
   * Saves the document to an existing file
   * @param fileName Name of the file to which the document will be saved
   */
  save(fileName: string): void;

  /**
   * Opens a document from an existing file
   * @param fileName Name of the file to be opened
   */
  open(fileName: string): void;

  /**
   * Deletes the entire contents of the document and resets it to an empty state
   */
  clear(): void;

  /**
   * Get the current sequence of the document
   * @return The current sequence
   */
  get sequence(): ISequence;
}
