import { render, screen } from '@testing-library/react';
import { TRIPS_MOCK, TRIP_DETAILS_MOCK } from '../mock/trip.mock';
import { Trip } from '../model/trip.model';
import TripOverview from './TripOverview';

test('test button "More Details" is rendered', () => {
  const trip: Trip = TRIPS_MOCK[2];
  const id = '2381552813-colombes-dommartin'
  trip.id = id;
  render(<TripOverview
    trip={trip}
    getTripDetails={() => {}}
  ></TripOverview>);
  const buttonElement = screen.getByText(/More Details/i);
  expect(buttonElement).toBeInTheDocument();
});

test('test button "More Details" is not rendered', () => {
  const trip: Trip = TRIPS_MOCK[2];
  const id = '2381552813-colombes-dommartin'
  trip.id = id;
  trip.details = TRIP_DETAILS_MOCK;
  render(<TripOverview
    trip={trip}
    getTripDetails={() => {}}
  ></TripOverview>);
  const buttonElement = screen.queryByText(/More Details/i);
  expect(buttonElement).not.toBeInTheDocument();
});
