import {StringSource} from "./StringSource";

export class PlanetStringSource implements StringSource {
    planets = ['pluto', 'saturn', 'jupiter', 'uranus', 'mars']
    next(): string {
        return this.planets[getRandomInt(4)];
    }

}

export function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}