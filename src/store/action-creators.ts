import { createAction } from '@reduxjs/toolkit';
import { SearchResult } from '../model/request-result.model';
import { TripDetails } from '../model/trip.model';

/** Action for searching for trips */
export const searchTripsAction = createAction<void>('SEARCH_TRIPS');
/** Action when trips have been searched */
export const tripsSearchedAction = createAction<SearchResult>('TRIPS_SEARCHED');
/** Action for retrieving trip details */
export const retrieveTripDetailsAction = createAction<string | null>('RETRIEVE_TRIP_DETAILS');
/** Action when trip details have been retrieved */
export const tripDetailsRetrievedAction = createAction<TripDetails>('TRIP_DETAILS_RETRIEVED');
/** Action when trip details retrieval failed */
export const tripDetailsRetrievedErrorAction = createAction<void>('TRIP_DETAILS_RETRIEVED_ERROR');
