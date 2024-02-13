import { Flight } from "./entity/Flight";
import { FlightStates } from "./entity/FlightStates";
import { Subject } from './entity/Subject'

export class FlightFeed extends Subject {
  // private OPEN_SKY_BASE_URL = "https://opensky-network.org/api/states/all";
  private OPEN_SKY_BASE_URL = "https://students.cs.byu.edu/~cs340ta/observer/index.php"

  // Flight property
  _flight: Flight | null = null;

  async start(): Promise<void> {
    let allFlights: FlightStates | null = await this.getFirstFlights();

    if (allFlights != null && allFlights.states.length > 0) {
      // Monitor the first flight returned by Open Sky
      this.setFlight(allFlights.states[0]);

      while (true) {
        let UPDATE_DELAY_SEC = 60; // 60 seconds
        await new Promise((f) => setTimeout(f, 1000 * UPDATE_DELAY_SEC));

        // Get latest flight info
        let newFlight: Flight | null =
          this._flight == null
            ? null
            : await this.getSingleFlight(this._flight);

        if (newFlight == null) {
          console.log('Flight over');
          break;
        } else {
          if (JSON.stringify(this._flight) !== JSON.stringify(newFlight)) {
            // Flight info changed
            this.setFlight(newFlight);
          } 
        } 
      }
    }
  }

  private setFlight(value: Flight | null): void {
    if (value != null) this.notify(value)
    this._flight = value;
  }

  private async getFirstFlights(): Promise<FlightStates | null> {
    let url = this.OPEN_SKY_BASE_URL;

    return this.callOpenSky(url);
  }

  private async getSingleFlight(flight: Flight): Promise<Flight | null> {
    let url = this.OPEN_SKY_BASE_URL + "?icao24=" + flight.icao24;

    let flights: FlightStates | null = await this.callOpenSky(url);

    if (flights != null) {
      if (flights.states != null && flights.states.length > 0) {
        return flights.states[0];
      }
    }

    return null;
  }

  private async callOpenSky(url: string): Promise<FlightStates | null> {
    let jsonData = await this.doGet(url);

    // Check that the value is not null nor an empty object.
    if (jsonData != null && Object.keys(jsonData).length > 0) {
      return this.parseFirstFlight(jsonData);
    } else {
      return null;
    }
  }

  private parseFirstFlight(jsonData: string): FlightStates {
    let flights: FlightStates = new FlightStates();
    let json = JSON.parse(jsonData);
    let statesElem: JSON[] = json["states"];
    flights.time = json["time"];
    if (statesElem != null) {
      let jsonFlight: JSON[] = statesElem[0] as unknown as JSON[];
      let flight: Flight;
      try {
        flight = this.parseFlight(jsonFlight);
        flights.states.push(flight);
      } catch (err) {
        console.log(
          "Parse flight failed with flight json: " + JSON.stringify(jsonFlight)
        );
      }
    } else console.log(jsonData);

    return flights;
  }

  private parseFlight(jsonArr: JSON[]): Flight {
    let flight: Flight = new Flight();

    flight.icao24 = this.parseString(jsonArr[0]);
    flight.callsign = this.parseString(jsonArr[1]);
    flight.origin_country = this.parseString(jsonArr[2]);
    flight.time_position = this.parseNumber(jsonArr[3]);
    flight.last_contact = this.parseNumber(jsonArr[4]);
    flight.longitude = this.parseNumber(jsonArr[5]);
    flight.latitude = this.parseNumber(jsonArr[6]);
    flight.baro_altitude = this.parseNumber(jsonArr[7]);
    flight.on_ground = this.parseBoolean(jsonArr[8]);
    flight.velocity = this.parseNumber(jsonArr[9]);
    flight.true_track = this.parseNumber(jsonArr[0]);
    flight.vertical_rate = this.parseNumber(jsonArr[11]);
    flight.sensors = this.parseIntArray(jsonArr[12]);
    flight.geo_altitude = this.parseNumber(jsonArr[13]);
    flight.squawk = this.parseString(jsonArr[14]);
    flight.spi = this.parseBoolean(jsonArr[15]);
    flight.position_source = this.parseNumber(jsonArr[16]);

    return flight;
  }

  private parseNumber(jsonElem: JSON): number {
    return jsonElem as unknown as number;
  }

  private parseBoolean(jsonElem: JSON): boolean {
    return jsonElem as unknown as boolean;
  }

  private parseString(jsonElem: JSON): string {
    return jsonElem as unknown as string;
  }

  private parseIntArray(jsonElem: JSON): number[] {
    return jsonElem as unknown as number[];
  }

  private async doGet(urlStr: string): Promise<string | undefined> {
    const resp = await fetch(urlStr);
    if (resp.ok) {
      let json = await resp.json();

      return JSON.stringify(json);
    } else {
      console.log(
        "Fetch from url " +
        urlStr +
        " failed with resp: " +
        JSON.stringify(resp)
      );
      return "";
    }
  }
}
