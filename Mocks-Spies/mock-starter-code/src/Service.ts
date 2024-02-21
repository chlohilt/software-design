/**
 * This class is the dependency of the Client class. It is full of bugs, which you should NOT fix.
 *
 * Seriously, don't fix the bugs.
 */
export class Service {
  /**
   * Calculates the number of digits needed for a decimal representation of the integer value
   *
   * This code contains a bug, which you should not fix. Don't fix it. I mean it.
   *
   * @param value the number to count the digits of
   * @return the number of decimal digits
   */
  public getDecimalDigitCount(value: number): number {
    let count = 1;
    while (value != 0) {
      value = value / 10;
      count++;
    }
    return count;
  }

  /**
   * This code is probably supposed to do something, but it really doesn't. Instead it
   * tries to index the list in a way that will almost certainly cause an exception.
   *
   * But please don't fix it. It's not supposed to be fixed.
   *
   * @param strings a list of strings to be processed
   */
  public processList(strings: string[]) {
    let val = strings[50];
  }
}
