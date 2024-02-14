
export class Drawer<T> {
    private clothing: T[]
    public constructor(clothing: T[]) {
        this.clothing = clothing

    }

    public isEmpty() {
        return this.clothing == undefined;
    }

    public addItem(pieceOfClothing: T) {
        this.clothing.push(pieceOfClothing)
    }

    public removeItem() {
        return this.clothing.pop()
    }

    public removeAll() {
        let arrayToReturn = this.clothing
        this.clothing = []
        return arrayToReturn
    }

}
