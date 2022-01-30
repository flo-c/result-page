import { Trip, TripDetails } from '../model/trip.model';

const ID_REGEXP = new RegExp('[?&]id(=([^&#]*)|&|#|$)');

const getTripId = (link: string): string | null => {
  const results: RegExpExecArray | null = ID_REGEXP.exec(link);
  return !results ? null : (!results[2] ? '' : results[2]);
}

/**
 * Get the list of trips with id
 * @param trips 
 * @returns the list of trips with id
 */
export const getTripsWithId = (trips: Trip[]): Trip[] => trips.map((trip: Trip) => {
  return {
    ...trip,
    id: getTripId(trip.link)
  };
});

/**
 * Get the list of trips with one trip which is loading.
 * The trip that is loading is found thanks to its id property
 * @param trips 
 * @param id 
 * @returns the list of trips with one which is loading
 */
export const getTripsWithLoadingTrip = (trips: Trip[], id: string, loading: boolean): Trip[] => trips.map((trip: Trip) => {
  if (trip.id === id) {
    return {
      ...trip,
      isLoading: loading
    };
  }
  return trip;
});

/**
 * Get the list of trips with one trip which has details to be added.
 * The trip that has details to be added is found thanks to its loading property
 * @param trips 
 * @param tripDetails 
 * @returns the list of trips with one which details has been adedd
 */
export const getTripsWithTripDetails = (trips: Trip[], tripDetails: TripDetails): Trip[] => trips.map((trip: Trip) => {
  if (trip.id === tripDetails.permanent_id) {
    return {
      ...trip,
      isLoading: false,
      details: tripDetails
    };
  }
  return trip;
});
