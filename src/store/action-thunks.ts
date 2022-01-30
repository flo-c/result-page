import { Dispatch } from '@reduxjs/toolkit';
import { SearchResult } from '../model/request-result.model';
import { TripDetails } from '../model/trip.model';
import { BlablacarApiService } from '../service/blablacar-api.service';
import { retrieveTripDetailsAction, searchTripsAction, tripDetailsRetrievedAction, tripDetailsRetrievedErrorAction, tripsSearchedAction } from './action-creators';

const apiService: BlablacarApiService = new BlablacarApiService();

/**
 * Search for trips
 * @param cursor the page cursor
 * @returns the thunk function
 */
export const searchTrips = (cursor: string | null) => {
  return (dispatch: Dispatch) => {
    dispatch(searchTripsAction());
    apiService.searchTrips(cursor).then((result: SearchResult) => {
      dispatch(tripsSearchedAction(result));
    });
  };
};

/**
 * Get the details of a trip
 * @param id the id of the trip
 * @returns the thunk function
 */
export const getTripDetails = (id: string | null) => {
  return (dispatch: Dispatch) => {
    dispatch(retrieveTripDetailsAction(id));
    apiService.getTripDetails(id).then((details: TripDetails) => {
      dispatch(tripDetailsRetrievedAction(details));
    }).catch(() => {
      dispatch(tripDetailsRetrievedErrorAction());
    });
  };
}