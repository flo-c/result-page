import { SearchResult } from "../model/request-result.model";
import { TripDetails } from "../model/trip.model";

const API_KEY = 'YzbiA8L6DcqxTvSna1lOFQQU66FosDVs';
const SEARCH_TRIP_URL_BASE = 'https://public-api.blablacar.com/api/v3/trips';
const GET_TRIP_URL_BASE = 'https://public-api.blablacar.com/api/v2/trips/';

const CURRENCY = 'GBP';


/**
 * Service to call the Blablacar API
 */
export class BlablacarApiService {

  /**
   * API call to search for trips
   * @param cursor the cursor page
   * @returns a promise
   */
  async searchTrips(cursor: string | null): Promise<SearchResult> {
    const placeTimeParams = 'from_coordinate=48.8566%2C2.3522&to_coordinate=45.764043%2C4.835659&from_country=FR&to_country=FR&locale=en-GB&start_date_local=2022-01-31T14:00:00';
    const cursorParam = (cursor !== null) ? `&from_cursor=${cursor}` : '';
    return fetch(`${SEARCH_TRIP_URL_BASE}?key=${API_KEY}&${placeTimeParams}&currency=${CURRENCY}${cursorParam}`).then(
      (res: Response) => res.json() as Promise<SearchResult>
    );
  }

  /**
   * API call to get trip details
   * @param id the id of the trip
   * @returns a promise
   */
  async getTripDetails(id: string | null): Promise<TripDetails> {
    if (id !== null) {
      return fetch(`${GET_TRIP_URL_BASE}${id}?key=${API_KEY}`).then(
        (res: Response) => res.json() as Promise<TripDetails>
      );
    }
    return Promise.reject();
  }

}
