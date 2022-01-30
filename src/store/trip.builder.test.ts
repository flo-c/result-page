import { TRIPS_MOCK, TRIP_DETAILS_MOCK } from '../mock/trip.mock';
import { Trip } from '../model/trip.model';
import { getTripsWithId, getTripsWithLoadingTrip, getTripsWithTripDetails } from './trip.builder';

test('test getTripsWithId', () => {
  const trips: Trip[] = getTripsWithId(TRIPS_MOCK);
  expect(trips.length).toEqual(3);
  expect(trips[0].id).toEqual('2383180608-epinay-sur-orge-villeurbanne');
  expect(trips[1].id).toEqual('2382105883-chambly-lyon');
  expect(trips[2].id).toEqual('2381552813-colombes-dommartin');
});

test('test getTripsWithLoadingTrip', () => {
  const trips: Trip[] = getTripsWithId(TRIPS_MOCK);
  const loadingTrips: Trip[] = getTripsWithLoadingTrip(trips, '2382105883-chambly-lyon', true);
  expect(trips[0].isLoading).toBeFalsy();
  expect(trips[1].isLoading).toBeFalsy();
  expect(trips[2].isLoading).toBeFalsy();
  expect(loadingTrips[0].isLoading).toBeFalsy();
  expect(loadingTrips[1].isLoading).toBeTruthy();
  expect(loadingTrips[2].isLoading).toBeFalsy();
});

test('test getTripsWithTripDetails when finding trip', () => {
  const trips: Trip[] = getTripsWithId(TRIPS_MOCK);
  const detailsTrips = getTripsWithTripDetails(trips, TRIP_DETAILS_MOCK);
  expect(trips[0].details).toBeUndefined();
  expect(trips[1].details).toBeUndefined();
  expect(trips[2].details).toBeUndefined();
  expect(detailsTrips[0].details).toBeUndefined();
  expect(detailsTrips[1].details).toBeUndefined();
  expect(detailsTrips[2].details).toEqual(TRIP_DETAILS_MOCK);
});

test('test getTripsWithTripDetails when not finding trip', () => {
  const detailsTrips = getTripsWithTripDetails(TRIPS_MOCK, TRIP_DETAILS_MOCK);
  expect(TRIPS_MOCK[0].details).toBeUndefined();
  expect(TRIPS_MOCK[1].details).toBeUndefined();
  expect(TRIPS_MOCK[2].details).toBeUndefined();
  expect(detailsTrips[0].details).toBeUndefined();
  expect(detailsTrips[1].details).toBeUndefined();
  expect(detailsTrips[2].details).toBeUndefined();
});
