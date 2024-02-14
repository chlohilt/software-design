import {Drawer} from "./drawer";

type Socks = { style: string; color: string }
export type Shirt = { style: string; size: string; }
export type Pants = { waist: number; length: number; }

export class Dresser<T1, T2, T3> {
    private top: Drawer<T1>
    private middle: Drawer<T2>
    private bottom: Drawer<T3>

    public constructor(top: Drawer<T1>, middle: Drawer<T2>, bottom: Drawer<T3>) {
        this.top = top
        this.middle = middle
        this.bottom = bottom
    }
}

function main() {
    let socks: Socks = { style: "crew", color: "orange" }
    let socksList: Socks[] = []
    socksList.push(socks)

    let drawer1: Drawer<Socks> = new Drawer(socksList)
    drawer1.addItem({ style: "long", color: "blue"})
    console.log(drawer1.isEmpty())
    drawer1.removeItem()
    drawer1.removeAll()

    let shirts: Shirt = { style: "crew", size: "L" }
    let shirtsList: Shirt[] = []
    shirtsList.push(shirts)

    let drawer2: Drawer<Shirt> = new Drawer(shirtsList)

    let pants: Pants = { waist: 8, length: 900 }
    let pantsList: Pants[] = []
    pantsList.push(pants)

    let drawer3: Drawer<Pants> = new Drawer(pantsList)

    let myDresser: Dresser<Socks, Shirt, Pants> = new Dresser(drawer1, drawer2, drawer3)

}

main()