import {StringSource} from "../string-source/StringSource";

export class ReverseDecorator implements StringSource{
    stringSource: StringSource

    constructor(stringSource: StringSource) {
        this.stringSource = stringSource
    }

    next(): string {
        let stringToAdd = this.stringSource.next()
        const charactersArray = stringToAdd.split('');
        const reversedArray = charactersArray.reverse();

        // Join the array back into a string
        return reversedArray.join('');
    }
}