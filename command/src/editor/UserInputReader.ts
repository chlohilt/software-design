import promptNotConfigured from "prompt-sync";
const prompt = promptNotConfigured();

export class UserInputReader {
  public static validateNumberInput(input: string): number {
    const selection = parseInt(input);
    if (Number.isNaN(selection)) {
      console.log(
        "\x1b[36m%s\x1b[0m", //cyan
        "\nError, could not parse number from string: " + input + "\n"
      );
      return -1;
    } else {
      return selection;
    }
  }

  public static getUserInput(cue: string): string {
    const input = prompt(cue);
    if (input == null) {
      throw new Error("user input was null");
    } else {
      return input;
    }
  }
}
