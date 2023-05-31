import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { IStats } from "../../store/slices/statistics";
import { useEffect } from "react";
import storage from "../../helpers/storage";

const getMostViewedCity = (stats: IStats): string | null => {
  let mostViewedCity = "";
  let countViews = 0;
  for (const [key, value] of Object.entries(stats)) {
    if (countViews < value) {
      mostViewedCity = key;
      countViews = value;
    }
  }
  return mostViewedCity;
};

const Statistics = () => {
  const { stats } = useSelector((state: RootState) => state.stats);
  const countDiffrentCities = Object.keys(stats).length;
  const mostViewedCity = getMostViewedCity(stats);

  useEffect(() => {
    storage.setStatistics(stats);
  }, [stats]);
  return (
    <Box
      boxShadow="0px 0px 4px 2px #bbbbbb"
      border="1px solid #bbbbbb"
      display="flex"
      flexDirection="column"
      borderRadius={4}
      minHeight="200px"
      maxHeight="20vh"
    >
      <Typography
        variant="h4"
        marginBottom={0}
        padding={2}
        borderBottom="1px solid #bbbbbb"
      >{`Statistics:`}</Typography>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        padding="16px 0 0 16px"
      >
        <Typography paragraph marginBottom={1}>
          {`Любимый город: ${mostViewedCity}`}
        </Typography>
        <Typography paragraph marginBottom={0}>
          {`Городов просмотренно: ${countDiffrentCities}`}
        </Typography>
      </Box>
    </Box>
  );
};

export default Statistics;
