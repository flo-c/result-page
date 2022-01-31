import { Table } from "react-bootstrap";
import { WayPoint } from "../model/trip.model";

interface IWaypointsTableProps {
  waypoints: WayPoint[];
}

/**
 * Table component to display waypoints
 * @param properties
 * @returns the component
 */
const WaypointsTable = ({
  waypoints: propWaypoints
}: IWaypointsTableProps) => (<Table striped bordered hover size="sm">
<thead>
  <tr>
    <th>Place</th>
    <th>City</th>
    <th>Address</th>
    <th>Date-Time</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Departure</td>
    <td>{propWaypoints[0].place.city}</td>
    <td>{propWaypoints[0].place.address}</td>
    <td>{propWaypoints[0].date_time}</td>
  </tr>
  <tr>
    <td>Arrival</td>
    <td>{propWaypoints[1].place.city}</td>
    <td>{propWaypoints[1].place.address}</td>
    <td>{propWaypoints[1].date_time}</td>
  </tr>
</tbody>
</Table>);

export default WaypointsTable;
