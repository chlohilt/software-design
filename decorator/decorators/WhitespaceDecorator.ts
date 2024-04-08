import {StringSource} from "../string-source/StringSource";

export class WhitespaceDecorator implements StringSource{
    stringSource: StringSource

    constructor(stringSource: StringSource) {
        this.stringSource = stringSource
    }

    next(): string {
        let stringToAdd = this.stringSource.next()
        const charactersArray = stringToAdd.split('');

        return charactersArray.join('           ');
    }
}