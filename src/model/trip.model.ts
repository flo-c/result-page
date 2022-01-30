export interface Place {
  city: string;
  address?: string;
  latitude: number;
  longitude: number;
  country_code: string;
}

/**
 * A Place object in the V2 API of Blablacar
 */
export interface PlaceV2 {
  city_name: string;
  address?: string;
  latitude: number;
  longitude: number;
  country_code: string;
  departure_place?: boolean;
  arrival_place?: boolean;
}

export interface TripPlanPlace extends Place {
  date: string;
  meeting_point_id: number;
  vinci_shuttle_enabled: boolean;
}

export interface WayPoint {
  date_time: string;
  place: Place;
}

export interface Price {
  amount: string,
  currency: string;
}

export interface PriceDetails {
  value: number;
  currency: string;
  symbol: string,
  string_value: string;
}

export interface Vehicle {
  make: string;
  model: string;
}

export interface VehiculeDetails {
  id: string;
  model: string;
  make: string;
  color: string;
  color_hexa: string;
  comfort: string;
  comfort_nb_star: number;
  number_of_seat: number;
  category: string;
  picture: string;
  picture_moderation_status: string;
}

export interface Trip {
  id?: string | null;
  link: string;
  waypoints: WayPoint[];
  price: Price;
  vehicle: Vehicle;
  distance_in_meters: number;
  duration_in_seconds: number;
  details?: TripDetails;
  isLoading?: boolean;
}

export interface Measure {
  value: number;
  unity: string;
}

export interface TripDetails {
  permanent_id: string;
  departure_place: PlaceV2;
  arrival_place: PlaceV2;
  price: PriceDetails;
  price_with_commission: PriceDetails;
  price_without_commission: PriceDetails;
  commission: PriceDetails;
  seats_left: number;
  seats: number;
  seats_count_origin: number;
  duration: Measure;
  distance: Measure;
  car: VehiculeDetails;
  stop_overs: PlaceV2[];
  view_count: number;
  trip_plan: TripPlanPlace[];
}
