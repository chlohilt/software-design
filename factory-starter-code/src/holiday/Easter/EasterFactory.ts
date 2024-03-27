import {HolidayDecorationsFactory} from "../../factory/HolidayDecorationsFactory";

export class EasterFactory implements HolidayDecorationsFactory {

    getTablecloth(): string {
        return "bunnies and easter eggs";
    }

    getHanging(): string {
        return "streamers";
    }

    getOrnament(): string {
        return "baby chick";
    }
}