import { TableData } from "./TableData";
import { Justification } from "../entity/Justification";

export class Table {
  private data: TableData;
  private write: (value: any) => void;

  constructor(data: TableData, writeFunction: (value: any) => void) {
    this.data = data;
    this.write = writeFunction;
  }

  display() {
    this.displayHeaders();
    this.displayRows();
  }

  private displayHeaders() {
    const colCount = this.data.getColumnCount();

    for (let i = 0; i < colCount; ++i) {
      // Display header spacing
      if (i > 0) {
        this.displayChar(" ", this.data.getColumnSpacing());
      }

      // Display header
      this.displayValue(
        this.data.getColumnHeader(i),
        this.data.getColumnWidth(i),
        Justification.Center
      );
    }

    this.write("\n");

    const underline = this.data.getHeaderUnderline();
    for (let i = 0; i < colCount; ++i) {
      // Display underline spacing
      if (i > 0) {
        this.displayChar(" ", this.data.getColumnSpacing());
      }

      // Display underline
      this.displayChar(underline, this.data.getColumnWidth(i));
    }

    this.write("\n");
  }

  private displayRows() {
    const colCount = this.data.getColumnCount();
    const rowCount = this.data.getRowCount();

    for (let row = 0; row < rowCount; ++row) {
      // Display row spacing
      this.displayChar("\n", this.data.getRowSpacing());

      // Display row's cell values
      for (let col = 0; col < colCount; ++col) {
        // Display column spacing
        if (col > 0) {
          this.displayChar(" ", this.data.getColumnSpacing());
        }

        // Display cell value
        this.displayValue(
          this.data.getCellValue(row, col),
          this.data.getColumnWidth(col),
          this.data.getColumnJustification(col)
        );
      }

      this.write("\n");
    }
  }

  private displayValue(
    value: string,
    width: number,
    justification: Justification
  ) {
    if (value.length > width) {
      value = value.substring(0, width);
    }

    const padding = Math.trunc(width - value.length);

    switch (justification) {
      case Justification.Left:
        {
          this.write(value);
          this.displayPadding(padding);
        }
        break;
      case Justification.Center:
        {
          let leftPadding = Math.trunc(padding / 2);
          let rightPadding = padding - leftPadding;

          this.displayPadding(leftPadding);
          this.write(value);
          this.displayPadding(rightPadding);
        }
        break;
      case Justification.Right:
        {
          this.displayPadding(padding);
          this.write(value);
        }
        break;
      default:
        throw new Error(
          "function displayValue has invalid justification paraemeter: " +
            justification
        );
    }
  }

  private displayPadding(count: number) {
    this.displayChar(" ", count);
  }

  private displayChar(c: string, count: number) {
    for (let i = 0; i < count; ++i) {
      this.write(c);
    }
  }
}
