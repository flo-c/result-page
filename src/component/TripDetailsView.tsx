import './TripDetailsView.css';
import { Badge, Card, Row, Col, Table, Figure } from 'react-bootstrap';
import { TripDetails, TripPlanPlace } from '../model/trip.model';
import TripPlanTable from './TripPlanTable';

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
            <TripPlanTable
              tripPlan={propTrip.trip_plan}
              permanentId={propTrip.permanent_id}
            ></TripPlanTable>
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
