import {StringSource} from "./StringSource";
import {getRandomInt} from "./PlanetStringSource";

export class ProgrammingLanguageStringSource implements StringSource {
    programmingLanguages = ['javascript', 'python', 'rust', 'c#', 'go']
    next(): string {
        return this.programmingLanguages[getRandomInt(4)];
    }

}