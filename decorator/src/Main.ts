import {ProgrammingLanguageStringSource} from "../string-source/ProgrammingLanguageStringSource";
import {PlanetStringSource} from "../string-source/PlanetStringSource";
import {PeriodDecorator} from "../decorators/PeriodDecorator";
import {WhitespaceDecorator} from "../decorators/WhitespaceDecorator";
import {ReverseDecorator} from "../decorators/ReverseDecorator";

function Main() {
    let programString: ProgrammingLanguageStringSource = new ProgrammingLanguageStringSource()
    let planetString: PlanetStringSource = new PlanetStringSource()

    let decorator = new WhitespaceDecorator(new PeriodDecorator(planetString))
    let newDecorator = new ReverseDecorator(programString)
    console.log(decorator.next())
    console.log(newDecorator.next())
}

Main()