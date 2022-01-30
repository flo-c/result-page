import { AnyAction, createReducer, PayloadAction, Reducer } from '@reduxjs/toolkit';
import { SearchResult } from '../model/request-result.model';
import { Trip, TripDetails } from '../model/trip.model';
import { retrieveTripDetailsAction, searchTripsAction, tripDetailsRetrievedAction, tripDetailsRetrievedErrorAction, tripsSearchedAction } from './action-creators';
import { getTripsWithId, getTripsWithLoadingTrip, getTripsWithTripDetails } from './trip.builder';

/**
 * State of the Main reducer
 */
export interface MainState {
  isSearchLoading: boolean;
  trips: Trip[];
  nextCursor: string | null;
  error: string | null;
}

/**
 * The initial state of the reducer
 */
export const initialState: MainState = {
  isSearchLoading: false,
  trips: [],
  nextCursor: null,
  error: null
};

/**
 * Main reducer of the application
 * As the application is quite small, only 1 reducer
 * is necessary
 */
export const mainReducer: Reducer<MainState, AnyAction> = createReducer(initialState, {
  [searchTripsAction.type]: (state: MainState) => ({
    ...state,
    isSearchLoading: true
  }),
  [tripsSearchedAction.type]: (state: MainState, action: PayloadAction<SearchResult>) => {
    const res: MainState = Object.assign({}, state);
    res.isSearchLoading = false;
    res.trips = res.trips.concat(getTripsWithId(action.payload.trips));
    res.nextCursor = action.payload.next_cursor || null;
    return res;
  },
  [retrieveTripDetailsAction.type]: (state: MainState, action: PayloadAction<string>) => {
    const res: MainState = Object.assign({}, state);
    res.trips = getTripsWithLoadingTrip(res.trips, action.payload, true);
    return res;
  },
  [tripDetailsRetrievedAction.type]: (state: MainState, action: PayloadAction<TripDetails>) => {
    const res: MainState = Object.assign({}, state);
    res.trips = getTripsWithTripDetails(res.trips, action.payload);
    return res;
  },
  [tripDetailsRetrievedErrorAction.type]: (state: MainState) => {
    const res: MainState = Object.assign({}, state);
    res.trips = res.trips.map((trip: Trip) => ({
      ...trip,
      isLoading: false
    }));
    res.error = 'Cannot retrieve the details of the trip.';
    return res;
  }
});
