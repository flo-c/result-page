import './TripOverview.css';
import { Badge, Button, Card, Col, Row, Spinner, Table } from 'react-bootstrap';
import { Trip } from '../model/trip.model';
import WaypointsTable from './WaypointsTable';

interface ITripOverviewProps {
  trip: Trip
  getTripDetails: (id: string | null) => void;
}

/**
 * Overview component of the trip
 * @param properties
 * @returns the component
 */
const TripOverview = ({
  trip: propTrip,
  getTripDetails: propGetTripDetails
}: ITripOverviewProps) => {

  const retrieveMoreDetails = () => {
    propGetTripDetails(propTrip.id || null);
  }

  const getDistanceKm = () => {
    return Math.floor(propTrip.distance_in_meters / 1000);
  };

  const getDurationHours = () => {
    return Math.floor(propTrip.duration_in_seconds / 3600);
  };

  return (<Card className="trip-card">
    <Card.Header>
      {propTrip.waypoints[0].place.city} - {propTrip.waypoints[1].place.city}
      <Badge bg="primary" className="align-right">{`${getDistanceKm()}km `}
        in {`${getDurationHours()}h${((propTrip.duration_in_seconds / 60 - getDurationHours() * 60)%60)}min`}</Badge>
    </Card.Header>
    <Card.Body>
      <div>
        <Row>
          <Col xs={8}>
            <WaypointsTable
              waypoints={propTrip.waypoints}
            ></WaypointsTable>
          </Col>
          <Col xs={4}>
            {propTrip.vehicle ? (<h5>Vehicle: {propTrip.vehicle.make} {propTrip.vehicle.model}</h5>) : (<span/>)}
          </Col>
        </Row>
      </div>
      <div>
        <h4>Price: {propTrip.price.currency}{propTrip.price.amount}</h4>
      </div>
      <div>
        {!propTrip.details && (<Button
          variant="primary"
          onClick={retrieveMoreDetails}
        >More Details</Button>)}
        {propTrip.isLoading && (<Spinner animation="grow" variant="primary" />)}
      </div>
    </Card.Body>
  </Card>);
};

export default TripOverview;
