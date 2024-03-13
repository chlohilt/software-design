import * as fs from 'fs'
export interface Array2D {
    set(row: number, col: number, value: number): void
    get(row: number, col: number): number | undefined
}

export class ArrayClass implements Array2D {
    private myArray: number[][] | undefined = undefined;

    get(row: number, col: number): number | undefined {
        if (this.myArray != undefined) {
            return this.myArray[row][col]
        }
        return undefined
    }

    set(row: number, col: number, value: number): void {
        if (this.myArray != undefined) {
            this.myArray[row][col] = value
        }
    }

    public constructor(row?: number, column?: number, fileName?: string) {
        if (row != undefined && column != undefined) {
            this.myArray = new Array(row).fill(0).map(() => new Array(column).fill(0));
        }

        if (fileName != undefined) {
            this.myArray = this.load(fileName)
        }
    }

    private save(fileName: string) {
        fs.writeFileSync(fileName, JSON.stringify(this.myArray))
    }

    private load(fileName: string) {
        const fileContents = fs.readFileSync(fileName, 'utf8')
        return JSON.parse(fileContents)
    }
}




// response: success 200, client error 400, server error 500