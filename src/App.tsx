import { Col, Container, Row, Spinner, Button } from 'react-bootstrap';
import Search from './component/Search';
import { searchTrips, getTripDetails } from './store/action-thunks';
import { bindActionCreators, Dispatch } from '@reduxjs/toolkit';
import { MainState } from './store/reducer';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { Trip } from './model/trip.model';
import TripOverview from './component/TripOverview';
import TripDetailsView from './component/TripDetailsView';

interface IAppProps {
  isSearchLoading: boolean;
  trips: Trip[];
  nextResultPageCursor: string | null;
  searchTrips: (cursor: string | null) => void;
  getTripDetails: (id: string | null) => void;
}

/**
 * Component for the Application entry point
 * @param properties 
 * @returns component
 */
const App = ({
  isSearchLoading: propIsSearchLoading,
  trips: propTrips,
  nextResultPageCursor: propNextResultPageCursor,
  searchTrips: propSearchTrips,
  getTripDetails: propGetTripDetails
}: IAppProps) => {

  const [ isInit, setIsInit ] = useState(false);

  // UseEffect to avoid creating a class to define my React Component
  useEffect(() => {
    if (!isInit) {
      setIsInit(true);
      propSearchTrips(null);
    }
  });

  // Callback for retrieving more trips
  const retrieveMoreTrips = () => {
    if (!propIsSearchLoading) {
      propSearchTrips(propNextResultPageCursor);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <Search/>
          {propTrips.map((trip: Trip, index: number) => {
            if (trip.details) {
              return (<TripDetailsView
                trip={trip.details}
                key={`trip-details-${index}`}
              ></TripDetailsView>);
            }
            return (<TripOverview
              trip={trip}
              getTripDetails={propGetTripDetails}
              key={`trip-overview-${index}`}
            ></TripOverview>);
          })}
          <div>
            {(propNextResultPageCursor !== null) && (<Button
              variant="primary"
              onClick={retrieveMoreTrips}
            >More Trips</Button>)}
            {propIsSearchLoading && (<Spinner animation="grow" variant="primary" />)}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default connect(
  (state: MainState) => ({
    isSearchLoading: state.isSearchLoading,
    trips: state.trips,
    nextResultPageCursor: state.nextCursor
  }),
  (dispatch: Dispatch) => bindActionCreators({
    searchTrips,
    getTripDetails
  }, dispatch)
)(App);
