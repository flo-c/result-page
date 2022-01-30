import { render, screen } from '@testing-library/react';
import { TRIP_DETAILS_MOCK } from '../mock/trip.mock';
import TripDetailsView from './TripDetailsView';

test('renders TripDetailsView', () => {
  render(<TripDetailsView
    trip={TRIP_DETAILS_MOCK}
  />);
  const vehicleElement = screen.getByText(/Vehicle: PEUGEOT 3008/i);
  expect(vehicleElement).toBeInTheDocument();
  // Many other elements could be tested thanks to screen getters
});
