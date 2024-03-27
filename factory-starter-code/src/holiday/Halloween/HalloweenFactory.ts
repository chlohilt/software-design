import {HolidayDecorationsFactory} from "../../factory/HolidayDecorationsFactory";

export class HalloweenFactory implements HolidayDecorationsFactory {

    getTablecloth(): string {
        return "ghosts and skeletons";
    }

    getHanging(): string {
        return "spider-web";
    }

    getOrnament(): string {
        return "jack-o-lantern";
    }
}