import {Flight} from "./Flight";

export interface Observer {
    update(flight: Flight);
}