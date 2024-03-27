import {HolidayDecorationsFactory} from "../factory/HolidayDecorationsFactory";

export class DecorationPlacer {
  private readonly tableclothPattern: string
  private readonly wallHanging: string
  private readonly yardOrnament: string
  constructor(holidayFactory: HolidayDecorationsFactory) {
    this.tableclothPattern = holidayFactory.getTablecloth()
    this.yardOrnament = holidayFactory.getOrnament()
    this.wallHanging = holidayFactory.getHanging()
  }

  placeDecorations(): string {
    return (
      "Everything was ready for the party. The " +
      this.yardOrnament +
      " was in front of the house, the " +
      this.wallHanging +
      " was hanging on the wall, and the tablecloth with " +
      this.tableclothPattern +
      " was spread over the table."
    );
  }
}
