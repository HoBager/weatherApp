import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Loading from "../loading/loading";
import ErrorMessage from "../error/error";
import normalizeTemperature from "../../helpers/normalize-temperature";
import normalizeTime from "../../helpers/normalizeTime";

const Details = () => {
  const { isLoading, error, weather } = useSelector(
    (state: RootState) => state.weather
  );

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  const {
    sys: { sunrise, sunset },
    name,
    main: { temp: temperature, feels_like },
    weather: [{ main }],
  } = weather!.details;

  return (
    <Box display="flex" flexGrow={1} flexDirection="column" gap={2}>
      <Typography variant="h3" marginBottom={0}>
        {name}
      </Typography>
      <Box>
        <Typography paragraph={true} variant="h4" marginBottom={0}>
          {`Temperature: ${normalizeTemperature(temperature)}`}
        </Typography>
        <Typography paragraph={true} variant="h4" marginBottom={0}>
          {`Feels like: ${normalizeTemperature(feels_like)}`}
        </Typography>
        <Typography paragraph={true} variant="h4" marginBottom={0}>
          {`Weather: ${main}`}
        </Typography>
        <Typography paragraph={true} variant="h4" marginBottom={0}>
          {`Sunrise: ${normalizeTime(sunrise)}`}
        </Typography>
        <Typography paragraph={true} variant="h4" marginBottom={0}>
          {`Sunset: ${normalizeTime(sunset)}`}
        </Typography>
      </Box>
    </Box>
  );
};

export default Details;
