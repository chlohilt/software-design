import {HangingProvider} from "../../decoration/DecorationPlacer";

export class HalloweenWallHangingProvider implements HangingProvider {

    getHanging(): string {
        return "spider-web";
    }
}
