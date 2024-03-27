import {PatternProvider} from "../../decoration/DecorationPlacer";

export class HalloweenTableclothPatternProvider implements PatternProvider{

    getTablecloth(): string {
        return "ghosts and skeletons";
    }
}
