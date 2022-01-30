import { Trip, TripDetails } from '../model/trip.model';

export const TRIPS_MOCK: Trip[] = [
  {
    "link": "https://www.blablacar.co.uk/trip?source=CARPOOLING&id=2383180608-epinay-sur-orge-villeurbanne",
    "waypoints": [{
      "date_time": "2022-01-27T13:00:00",
      "place": {
        "city": "Épinay-sur-Orge",
        "address": "4 Pl. du 24 Août, Épinay-sur-Orge",
        "latitude": 48.665158,
        "longitude": 2.315229,
        "country_code": "FR"
      }
    }, {
      "date_time": "2022-01-27T17:50:00",
      "place": {
        "city": "Villeurbanne",
        "address": "4 Rue Alexis Perroncel, Villeurbanne",
        "latitude": 45.77456,
        "longitude": 4.870209,
        "country_code": "FR"
      }
    }
    ],
    "price": {
      "amount": "27.00",
      "currency": "EUR"
    },
    "vehicle": {
      "make": "FORD",
      "model": "FIESTA"
    },
    "distance_in_meters": 449660,
    "duration_in_seconds": 17400
  }, {
    "link": "https://www.blablacar.co.uk/trip?source=CARPOOLING&id=2382105883-chambly-lyon",
    "waypoints": [{
      "date_time": "2022-01-27T13:00:00",
      "place": {
        "city": "Chambly",
        "address": "Chambly, Chambly",
        "latitude": 49.163605,
        "longitude": 2.240538,
        "country_code": "FR"
      }
    }, {
      "date_time": "2022-01-27T19:00:00",
      "place": {
        "city": "Lyon",
        "address": "123 Rue Servient, Lyon",
        "latitude": 45.760698,
        "longitude": 4.852032,
        "country_code": "FR"
      }
    }
    ],
    "price": {
      "amount": "50.00",
      "currency": "EUR"
    },
    "vehicle": {
      "make": "BMW",
      "model": "SERIE 1"
    },
    "distance_in_meters": 508662,
    "duration_in_seconds": 21600
  }, {
    "link": "https://www.blablacar.co.uk/trip?source=CARPOOLING&id=2381552813-colombes-dommartin",
    "waypoints": [{
      "date_time": "2022-01-27T14:00:00",
      "place": {
        "city": "Colombes",
        "address": "Gare du Stade, Colombes",
        "latitude": 48.931485,
        "longitude": 2.259958,
        "country_code": "FR"
      }
    }, {
      "date_time": "2022-01-27T19:40:00",
      "place": {
        "city": "Dommartin",
        "address": "4 Rue de l'Église, Dommartin",
        "latitude": 45.834488,
        "longitude": 4.71394,
        "country_code": "FR"
      }
    }
    ],
    "price": {
      "amount": "30.00",
      "currency": "EUR"
    },
    "vehicle": {
      "make": "PEUGEOT",
      "model": "3008"
    },
    "distance_in_meters": 481155,
    "duration_in_seconds": 20400
  }
];

export const TRIP_DETAILS_MOCK: TripDetails = {
  "departure_place": {
    "city_name": "Colombes",
    "address": "Gare du Stade, Colombes",
    "latitude": 48.931485,
    "longitude": 2.259958,
    "country_code": "FR"
  },
  "arrival_place": {
    "city_name": "Dommartin",
    "address": "Mairie, Dommartin",
    "latitude": 45.834488,
    "longitude": 4.71394,
    "country_code": "FR"
  },
  "price": {
    "value": 25,
    "currency": "GBP",
    "symbol": "£",
    "string_value": "£25.00"
  },
  "price_with_commission": {
    "value": 25,
    "currency": "GBP",
    "symbol": "£",
    "string_value": "£25.00"
  },
  "price_without_commission": {
    "value": 19,
    "currency": "GBP",
    "symbol": "£",
    "string_value": "£19.00"
  },
  "commission": {
    "value": 6,
    "currency": "GBP",
    "symbol": "£",
    "string_value": "£6.00"
  },
  "seats_left": 1,
  "seats": 2,
  "seats_count_origin": 2,
  "duration": {
    "value": 20400,
    "unity": "s"
  },
  "distance": {
    "value": 477,
    "unity": "km"
  },
  "permanent_id": "2381552813-colombes-dommartin",
  "car": {
    "id": "qjnGyKdzkn9PGQx_ozd-MA",
    "model": "3008",
    "make": "PEUGEOT",
    "color": "Grey",
    "color_hexa": "DDDDDD",
    "comfort": "Normal",
    "comfort_nb_star": 2,
    "number_of_seat": 4,
    "category": "_UE_BREAK",
    "picture": "https://d2kwny77wxvuie.cloudfront.net/vehicle/RDbiP6BISLe54_4vsYKZow/thumbnail_160x90.jpeg",
    "picture_moderation_status": "ACTIVE"
  },
  "stop_overs": [{
    "city_name": "Colombes",
    "address": "Gare du Stade, Colombes",
    "latitude": 48.931485,
    "longitude": 2.259958,
    "country_code": "FR",
    "departure_place": true
  }, {
    "city_name": "A6 Sortie 31.2 Villefranche Ville 1",
    "latitude": 45.975357,
    "longitude": 4.734653,
    "country_code": "FR"
  }, {
    "city_name": "Dommartin",
    "address": "Mairie, Dommartin",
    "latitude": 45.834488,
    "longitude": 4.71394,
    "country_code": "FR",
    "arrival_place": true
  }
  ],
  "view_count": 48,
  "trip_plan": [{
    "date": "27/01/2022 14:00:00",
    "city": "Colombes",
    "address": "Gare du Stade, Colombes",
    "latitude": 48.931485,
    "longitude": 2.259958,
    "country_code": "FR",
    "meeting_point_id": 0,
    "vinci_shuttle_enabled": false
  }, {
    "date": "27/01/2022 19:10:00",
    "city": "A6 Sortie 31.2 Villefranche Ville 1",
    "address": "Juste après la gare de péage, Autoroute du Soleil",
    "latitude": 45.975357,
    "longitude": 4.734653,
    "country_code": "FR",
    "meeting_point_id": 2876932,
    "vinci_shuttle_enabled": false
  }, {
    "date": "27/01/2022 19:40:00",
    "city": "Dommartin",
    "address": "Mairie, Dommartin",
    "latitude": 45.834488,
    "longitude": 4.71394,
    "country_code": "FR",
    "meeting_point_id": 0,
    "vinci_shuttle_enabled": false
  }
  ]
};