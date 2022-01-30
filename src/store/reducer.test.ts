import { TRIPS_MOCK, TRIP_DETAILS_MOCK } from '../mock/trip.mock';
import { retrieveTripDetailsAction, searchTripsAction, tripDetailsRetrievedAction, tripDetailsRetrievedErrorAction, tripsSearchedAction } from './action-creators';
import { initialState, mainReducer, MainState } from './reducer';
import { getTripsWithId } from './trip.builder';

test('test the searchTripsAction', () => {
  const state: MainState = mainReducer(initialState, searchTripsAction());
  expect(state.nextCursor).toBeNull();
  expect(state.isSearchLoading).toEqual(true);
  expect(state.trips).toEqual([]);
});

test('test tripsSearchedAction', () => {
  const state: MainState = mainReducer({
    isSearchLoading: true,
    trips: [],
    nextCursor: null,
    error: null
  }, tripsSearchedAction({
    link: 'https://www.blablacar.co.uk/search?fc=48.8566,2.3522&tc=45.764043,4.835659&fn=Paris&tn=Lyon&db=2022-01-27&de=2022-01-27',
    search_info: {
      count: 29,
      full_trip_count: 3
    },
    trips: TRIPS_MOCK,
    next_cursor: 'cGFnZT0x'
  }));
  expect(state.isSearchLoading).toEqual(false);
  expect(state.trips).toEqual(getTripsWithId(TRIPS_MOCK));
  expect(state.nextCursor).toEqual('cGFnZT0x');
});

test('test retrieveTripDetailsAction', () => {
  const state: MainState = mainReducer({
    isSearchLoading: false,
    trips: getTripsWithId(TRIPS_MOCK),
    nextCursor: 'cGFnZT0x',
    error: null
  }, retrieveTripDetailsAction('2381552813-colombes-dommartin'));
  expect(state.isSearchLoading).toEqual(false);
  expect(state.trips[2].isLoading).toEqual(true);
  expect(state.nextCursor).toEqual('cGFnZT0x');
});

test('test tripDetailsRetrievedAction', () => {
  const initState: MainState = {
    isSearchLoading: false,
    trips: getTripsWithId(TRIPS_MOCK),
    nextCursor: 'cGFnZT0x',
    error: null
  };
  initState.trips[2].isLoading = true;
  const state: MainState = mainReducer(initState, tripDetailsRetrievedAction(TRIP_DETAILS_MOCK));
  expect(state.isSearchLoading).toEqual(false);
  expect(state.trips[2].isLoading).toEqual(false);
  expect(state.trips[2].details).toEqual(TRIP_DETAILS_MOCK);
  expect(state.nextCursor).toEqual('cGFnZT0x');
});

test('test tripDetailsRetrievedErrorAction', () => {
  const initState: MainState = {
    isSearchLoading: false,
    trips: getTripsWithId(TRIPS_MOCK),
    nextCursor: 'cGFnZT0x',
    error: null
  };
  initState.trips[2].isLoading = true;
  const state: MainState = mainReducer(initState, tripDetailsRetrievedErrorAction());
  expect(state.isSearchLoading).toEqual(false);
  expect(state.trips[2].isLoading).toEqual(false);
  expect(state.trips[2].details).toBeUndefined();
  expect(state.nextCursor).toEqual('cGFnZT0x');
  expect(state.error).toEqual('Cannot retrieve the details of the trip.');
});
