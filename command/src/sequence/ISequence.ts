export interface ISequence {
  /**
   * Custom exception class to handle exceptions specific to sequence interface implementation class
   */

  /**
   * Inserts a string into the sequence
   * @param pos Position in the sequence to insert the string
   * @param s String to be inserted
   */
  insert(pos: number, s: string): void;

  /**
   * Deletes a character sequence from the sequence
   * @param pos Starting position of the sequence that is being deleted
   * @param count Number of characters to be deleted
   */
  delete(pos: number, count: number): string;

  /**
   * Clears the sequence to a clean, empty state
   */
  clear(): void;
}
