import { Box, List } from "@mui/material";
import { RootState } from "../../store/store";
import Loading from "../loading/loading";
import ErrorMessage from "../error/error";
import { useSelector } from "react-redux";
import ForecastItem from "./forecast-item";

const Forecast = () => {
  const { isLoading, error, weather } = useSelector(
    (state: RootState) => state.weather
  );

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  const forecastList = weather!.forecast.list.map((data) => {
    return <ForecastItem key={data.dt} data={data} />;
  });

  return (
    <Box overflow="auto">
      <List sx={{ overflow: "auto" }}>{forecastList}</List>
    </Box>
  );
};

export default Forecast;
