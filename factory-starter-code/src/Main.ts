import { DecorationPlacer } from "./decoration/DecorationPlacer";
import {HalloweenTableclothPatternProvider} from "./holiday/Halloween/HalloweenTableclothPatternProvider";
import {HalloweenWallHangingProvider} from "./holiday/Halloween/HalloweenWallHangingProvider";
import {HalloweenYardOrnamentProvider} from "./holiday/Halloween/HalloweenYardOrnamentProvider";

main();

function main(): void {
  let decorationPlacer = new DecorationPlacer(new HalloweenTableclothPatternProvider(), new HalloweenWallHangingProvider(), new HalloweenYardOrnamentProvider());

  console.log(decorationPlacer.placeDecorations());
}
