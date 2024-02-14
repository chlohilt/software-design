export abstract class Animal {
  name: string;
  trainingPriority: number;

  constructor(name: string, trainingPriority: number) {
    this.trainingPriority = trainingPriority;
    this.name = name;
  }

  protected static getAnimalsSorted<T extends Animal>(list: T[]): T[] {
    return list.sort((animal1, animal2) =>
        animal1.trainingPriority < animal2.trainingPriority ? -1 : 1
    );
  }

  protected static getAnimalsTrainingPriorityList<T extends Animal>(animalList: T[]): string {
    return animalList
        .map(
            (animal) =>
                animal.name + "'s training priority: " + animal.trainingPriority + "\n"
        )
        .join("");
  }

}
