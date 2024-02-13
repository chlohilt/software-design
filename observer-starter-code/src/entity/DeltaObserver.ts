import {Flight} from "./Flight";

export class DeltaObserver {
    private latitude = 0
    private longitude = 0
    private velocity = 0
    private altitude = 0

    update(flight: Flight) {
        if (this.latitude != 0 && this.longitude != 0 && this.velocity != 0 && this.altitude != 0) {
            console.log("\nDelta values")
            console.log("\nLatitude delta: " + (flight.latitude - this.latitude))
            console.log("Longitude delta: " + (flight.longitude - this.longitude))
            console.log("Velocity delta: " + (flight.velocity - this.velocity))
            console.log("Altitude delta: " + (flight.geo_altitude - this.altitude) + "\n")
        }

        this.latitude = flight.latitude
        this.longitude = flight.longitude
        this.velocity = flight.velocity
        this.altitude = flight.geo_altitude

    }
}