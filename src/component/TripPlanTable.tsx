import { Table } from "react-bootstrap";
import { TripPlanPlace } from "../model/trip.model";

interface ITripPlanTableProps {
  tripPlan: TripPlanPlace[];
  permanentId: string;
}

const TripPlanTable = ({
  tripPlan: propTripPlan,
  permanentId: propPermanentId
}: ITripPlanTableProps) => {

  const getTripPlanPlace = (index: number): string => {
    if (index === 0) {
      return 'Departure';
    }
    if (index === propTripPlan.length - 1) {
      return 'Arrival';
    }
    return 'Step Over';
  };

  return (<Table striped bordered hover size="sm">
    <thead>
      <tr>
        <th>Place</th>
        <th>City</th>
        <th>Address</th>
        <th>Date-Time</th>
      </tr>
    </thead>
    <tbody>
      {propTripPlan.map((trip: TripPlanPlace, index: number) => (<tr
        key={`trip-plan-${propPermanentId}-${index}`}
      >
        <td>{getTripPlanPlace(index)}</td>
        <td>{trip.city}</td>
        <td>{trip.address}</td>
        <td>{trip.date}</td>
      </tr>))}
    </tbody>
  </Table>);
};

export default TripPlanTable;
