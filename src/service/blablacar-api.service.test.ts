import { TRIPS_MOCK, TRIP_DETAILS_MOCK } from '../mock/trip.mock';
import { SearchResult } from '../model/request-result.model';
import { TripDetails } from '../model/trip.model';
import { BlablacarApiService } from './blablacar-api.service';

let service: BlablacarApiService;

beforeEach(() => {
  service = new BlablacarApiService();
});

test('test searchTrips without page cursor', done => {
  const res = new Response();
  res.json = () => Promise.resolve({
    trips: TRIPS_MOCK
  });
  jest.spyOn(window, 'fetch').mockReturnValue(Promise.resolve(res));
  service.searchTrips(null).then((result: SearchResult) => {
    expect(window.fetch).toHaveBeenCalledWith('https://public-api.blablacar.com/api/v3/trips?key=YzbiA8L6DcqxTvSna1lOFQQU66FosDVs&from_coordinate=48.8566%2C2.3522&to_coordinate=45.764043%2C4.835659&from_country=FR&to_country=FR&locale=en-GB&start_date_local=2022-01-31T14:00:00&currency=GBP');
    expect(result.trips).toEqual(TRIPS_MOCK);
    done();
  });
});

test('test searchTrips with page cursor', done => {
  const res = new Response();
  res.json = () => Promise.resolve({
    trips: TRIPS_MOCK
  });
  jest.spyOn(window, 'fetch').mockReturnValue(Promise.resolve(res));
  const cursor = 'cGFnZT0x';
  service.searchTrips(cursor).then((result: SearchResult) => {
    expect(window.fetch).toHaveBeenCalledWith('https://public-api.blablacar.com/api/v3/trips?key=YzbiA8L6DcqxTvSna1lOFQQU66FosDVs&from_coordinate=48.8566%2C2.3522&to_coordinate=45.764043%2C4.835659&from_country=FR&to_country=FR&locale=en-GB&start_date_local=2022-01-31T14:00:00&currency=GBP&from_cursor=cGFnZT0x');
    expect(result.trips).toEqual(TRIPS_MOCK);
    done();
  });
});

test('test getTripDetails with an id', done => {
  const res = new Response();
  res.json = () => Promise.resolve(TRIP_DETAILS_MOCK);
  jest.spyOn(window, 'fetch').mockReturnValue(Promise.resolve(res));
  const id = '2382105883-chambly-lyon';
  service.getTripDetails(id).then((trip: TripDetails) => {
    expect(window.fetch).toHaveBeenCalledWith('https://public-api.blablacar.com/api/v2/trips/2382105883-chambly-lyon?key=YzbiA8L6DcqxTvSna1lOFQQU66FosDVs');
    expect(trip).toEqual(TRIP_DETAILS_MOCK);
    done();
  });
});

test('test getTripDetails without an id', done => {
  const res = new Response();
  res.json = () => Promise.resolve(TRIP_DETAILS_MOCK);
  jest.spyOn(window, 'fetch').mockReturnValue(Promise.resolve(res));
  service.getTripDetails(null).catch(() => {
    expect(window.fetch).toHaveBeenCalledTimes(0);
    done();
  });
});
