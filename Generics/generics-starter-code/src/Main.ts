import { Cat } from "./entity/Cat";
import { Dog } from "./entity/Dog";

console.log();
let catList = [
  new Cat("Calvin", 10, true, false),
  new Cat("Jordan", 3, false, false),
  new Cat("Clara", 9, true, true),
];

console.log(Cat.getCatsSummary(catList));

console.log("\n");
let dogList = [
  new Dog("Clifford", 2, true, false),
  new Dog("Lily", 7, false, false),
  new Dog("Corinne", 3, true, true),
];

console.log(Dog.getDogsSummary(dogList));
