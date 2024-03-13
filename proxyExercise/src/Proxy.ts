import {Array2D, ArrayClass} from "./Array2D";

export class Proxy implements Array2D {
    private readonly myArray: ArrayClass | undefined = undefined

    get(row: number, col: number): number | undefined {
        if (this.myArray != undefined) {
            return this.myArray.get(row, col)
        }
        return undefined;
    }

    set(row: number, col: number, value: number): void {
        if (this.myArray != undefined) {
            return this.myArray.set(row, col, value)
        }
    }

    public constructor(fileName: string) {
        if (this.myArray == undefined) {
            this.myArray = new ArrayClass(undefined, undefined, fileName)
        }
    }

}