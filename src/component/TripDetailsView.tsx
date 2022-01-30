import './TripDetailsView.css';
import { Badge, Card, Row, Col, Table, Figure } from 'react-bootstrap';
import { TripDetails, TripPlanPlace } from '../model/trip.model';

interface ITripDetailsViewProps {
  trip: TripDetails
}

/**
 * Details component of the Trip
 * @param properties
 * @returns the component
 */
const TripDetailsView = ({
  trip: propTrip
}: ITripDetailsViewProps) => {

  const getDurationHours = () => {
    return Math.floor(propTrip.duration.value / 3600);
  };

  const getTripPlanPlace = (index: number): string => {
    if (index === 0) {
      return 'Departure';
    }
    if (index === propTrip.trip_plan.length - 1) {
      return 'Arrival';
    }
    return 'Step Over';
  };

  return (<Card className="trip-details-card">
    <Card.Header>
      {propTrip.departure_place.city_name} - {propTrip.arrival_place.city_name}
      <Badge bg="primary" className="align-right">{`${propTrip.distance.value}${propTrip.distance.unity} `}
        in {`${getDurationHours()}h${((propTrip.duration.value / 60 - getDurationHours() * 60)%60)}min`}</Badge>
    </Card.Header>
    <Card.Body>
    <div>
        <Row>
          <Col xs={8}>
          <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Place</th>
              <th>City</th>
              <th>Address</th>
              <th>Date-Time</th>
            </tr>
          </thead>
          <tbody>
            {propTrip.trip_plan.map((trip: TripPlanPlace, index: number) => (<tr
              key={`trip-plan-${propTrip.permanent_id}-${index}`}
            >
              <td>{getTripPlanPlace(index)}</td>
              <td>{trip.city}</td>
              <td>{trip.address}</td>
              <td>{trip.date}</td>
            </tr>))}
          </tbody>
          </Table>
          </Col>
          <Col xs={4}>
            {propTrip.car ? (<Figure>
              <Figure.Image
                roundedCircle
                src={propTrip.car.picture}
              ></Figure.Image>
              <Figure.Caption>Vehicle: {propTrip.car.make} {propTrip.car.model}</Figure.Caption>
            </Figure>) : (<span/>)}
          </Col>
        </Row>
      </div>
      <div>
        <h4>Price: {`${propTrip.price.currency}${propTrip.price.value} `} (commission: {`${propTrip.commission.currency}${propTrip.commission.value}`})</h4>
      </div>
    </Card.Body>
  </Card>);
};

export default TripDetailsView;
