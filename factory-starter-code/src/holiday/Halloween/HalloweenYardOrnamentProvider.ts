import {YardOrnamentProvider} from "../../decoration/DecorationPlacer";

export class HalloweenYardOrnamentProvider implements YardOrnamentProvider {

    getOrnament(): string {
        return "jack-o-lantern";
    }
}
