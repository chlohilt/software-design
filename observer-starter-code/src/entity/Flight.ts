export class Flight {
  icao24: string = "";
  callsign: string = "";
  origin_country: string = "";
  time_position = 0;
  last_contact = 0;
  longitude = 0.0;
  latitude = 0.0;
  baro_altitude = 0.0;
  on_ground = false;
  velocity = 0.0;
  true_track = 0.0;
  vertical_rate = 0.0;
  sensors: number[] = [];
  geo_altitude = 0.0;
  squawk: string | null = null;
  spi = false;
  position_source = 0;
}
