import {Observer} from "./Observer";
import {Flight} from "./Flight";

export class StatusObserver implements Observer {
    update(flight: Flight) {
        console.log("\nStatus changes")
        console.log("\nTransponder ID: " + flight.icao24)
        console.log("Call sign: " + flight.callsign)
        console.log("Country of origin: " + flight.origin_country)
        console.log("Longitude: " + flight.longitude)
        console.log("Latitude: " + flight.latitude)
        console.log("Velocity: " + flight.velocity)
        console.log("Altitude: " + flight.geo_altitude)
    }

}