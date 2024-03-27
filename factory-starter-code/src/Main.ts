import { DecorationPlacer } from "./decoration/DecorationPlacer";
import {HalloweenFactory} from "./holiday/Halloween/HalloweenFactory";
import {EasterFactory} from "./holiday/Easter/EasterFactory";

main();

function main(): void {
  let decorationPlacer = new DecorationPlacer(new HalloweenFactory());

  console.log(decorationPlacer.placeDecorations());

  let decorationPlacer2 = new DecorationPlacer(new EasterFactory());

  console.log(decorationPlacer2.placeDecorations());
}
