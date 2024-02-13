import { Observer } from './Observer'
import {Flight} from "./Flight";

export abstract class Subject {
    private observers: Observer[] = []
    attach(observer: Observer) {
        this.observers.push(observer)
    }

    protected notify(flight: Flight) {
        this.observers.forEach((observer) => {
            observer.update(flight)
        })
    }

}