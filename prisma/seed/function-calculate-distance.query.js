"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8f2c5056-b804-5f76-9e66-5857fcc6e08a")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.functionCalculateDistanceSql = void 0;
exports.functionCalculateDistanceSql = `
CREATE OR REPLACE FUNCTION calculate_distance(
  lat1 float,
  lon1 float,
  lat2 float,
  lon2 float,
  unit text
)
RETURNS float AS $$
DECLARE
  R float;
  dLat float;
  dLon float;
  a float;
  c float;
  distance float;
BEGIN
  IF unit = 'm' THEN
    R := 6371000; -- Radius of the earth in meters
  ELSE
    R := 6371; -- Radius of the earth in kilometers
  END IF;

  dLat := radians(lat2 - lat1); -- radians() function converts degrees to radians
  dLon := radians(lon2 - lon1); -- radians() function converts degrees to radians

  a := sin(dLat / 2) * sin(dLat / 2) +
       cos(radians(lat1)) * cos(radians(lat2)) *
       sin(dLon / 2) * sin(dLon / 2);

  c := 2 * atan2(sqrt(a), sqrt(1 - a));
  distance := R * c;

  RETURN distance;
END;
$$ LANGUAGE plpgsql;
`;
//# sourceMappingURL=function-calculate-distance.query.js.map
//# debugId=8f2c5056-b804-5f76-9e66-5857fcc6e08a
