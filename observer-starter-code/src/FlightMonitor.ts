import { FlightFeed } from "./FlightFeed";
import {StatusObserver} from "./entity/StatusObserver";
import {DeltaObserver} from "./entity/DeltaObserver";

main();

function main() {
  let feed = new FlightFeed();
  feed.attach(new StatusObserver())
  feed.attach(new DeltaObserver())
  feed.start();
}
