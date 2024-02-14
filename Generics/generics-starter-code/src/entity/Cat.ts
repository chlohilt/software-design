import { Animal } from "./abstract/Animal";
// import { AnimalEntity } from "./abstract/AnimalEntity";

export class Cat extends Animal {
  purrs: boolean;
  climbsFurniture: boolean;

  constructor(
    name: string,
    trainingPriority: number,
    purrs: boolean,
    climbsFurniture: boolean
  ) {
    super(name, trainingPriority);
    this.purrs = purrs;
    this.climbsFurniture = climbsFurniture;
  }

  static getCatsSummary(catListNotSorted: Cat[]): string {
    let catList = Cat.getAnimalsSorted(catListNotSorted);
    let easiestCat = catList[0];
    let mostDifficultCat = catList[catList.length - 1];
    let easiestCatString =
      easiestCat.name +
      " needs the least training" +
      (easiestCat.purrs
        ? ", and purrs a lot."
        : ", although it rarely purrs.") +
      (easiestCat.climbsFurniture
        ? " It unfortunately climbs furniture a lot, leaving scratches."
        : " It fortunately does not climb furniture.");

    let mostDifficultCatString =
      mostDifficultCat.name +
      " needs the most training." +
      (easiestCat.purrs
        ? "It is friendly and purrs a lot"
        : " It is grumpy and rarely purrs.") +
      (easiestCat.climbsFurniture
        ? " It unfortunately climbs furniture a lot, leaving scratches."
        : " It fortunately does not climb furniture.");
    let catTrainingPriorities = this.getAnimalsTrainingPriorityList(catList);
    return (
      catTrainingPriorities +
      "\n" +
      easiestCatString +
      "\n" +
      mostDifficultCatString
    );
  }
}
