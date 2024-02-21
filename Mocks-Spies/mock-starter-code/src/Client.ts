import { Service } from "./Service";

/**
 * This class has code that is correct. (No really, we checked, it is correct.)
 *
 * Unfortunately, this code has a hard coded dependency to a class that has a lot of bugs.
 *
 * If we run unit tests on this class, we should be able to check that its code is correct
 * without running into the bugs in its dependency. To do that, we will need to use mocks.
 */
export class Client {
  /**
   * Creates a string representation of the passed-in value times the number of decimal digits it has
   * @param value the value used for calculation
   * @return a string representation of the value times the number of decimal digits
   */
  convertValue(value: number): string {
    const service = this.getService()
    const num_digits = service.getDecimalDigitCount(value);
    const product = value * num_digits;
    return product.toString();
  }

  /**
   * Converts a string with multiple words into a list of single words that are in all-caps
   * @param sentence the string containing the sentence
   */
  public createFormattedStrings(sentence: string) {
    const strings: string[] = sentence.split(/\s+/);
    const capStrings: string[] = [];
    for (let s of strings) {
      capStrings.push(s.toUpperCase());
    }

    const service = this.getService()
    service.processList(capStrings);
  }

  public getService() {
    return new Service()
  }

}
