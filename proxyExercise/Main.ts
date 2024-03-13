import {Proxy} from "./src/Proxy";

function main() {
    const myProxy = new Proxy("my-array-file")
    myProxy.set(3, 4, 5)
    console.log(myProxy.get(3,4))

}

main()
