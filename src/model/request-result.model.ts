import { Trip, TripDetails } from "./trip.model";

/**
 * Information related to the search
 */
export interface SearchInfo {
  count: number;
  full_trip_count: number;
}

/**
 * Result of a search trips request to Blablacar API
 */
export interface SearchResult {
  link: string;
  search_info: SearchInfo;
  trips: Trip[];
  next_cursor: string;
}
