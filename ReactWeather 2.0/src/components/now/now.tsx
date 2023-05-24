import { Box, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import isFavorite from "./isFavorite";
import { toggleFavorities } from "../../store/slices/favorites-cityes";
import normalizeTemperature from "../../helpers/normalize-temperature";
import { serverUrl } from "../../api/const";
import Loading from "../loading/loading";
import ErrorMessage from "../error/error";
import styled from "@emotion/styled";

const Img = styled.img`
  height: 100%;
  object-fit: cover;
`;

const Now = () => {
  const { favoriteCities } = useSelector((state: RootState) => state.favorites);
  const { isLoading, error, weather } = useSelector(
    (state: RootState) => state.weather
  );
  const dispatch = useDispatch();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  const {
    main: { temp: temperature },
    weather: [{ icon }],
    name,
  } = weather!.details;

  return (
    <Box
      display="flex"
      flexGrow="1"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Typography paragraph={true} variant="h2" marginBottom={0}>
        {normalizeTemperature(temperature)}
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        boxSizing="border-box"
        height="30%"
      >
        <Img src={`http://${serverUrl}/img/wn/${icon}@4x.png`} alt="img" />
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" lineHeight="1.75">
          {name}
        </Typography>
        <IconButton
          aria-label="favorite"
          onClick={() => {
            dispatch(toggleFavorities(name));
          }}
        >
          {isFavorite(favoriteCities, name) ? (
            <FavoriteIcon fontSize="large" />
          ) : (
            <FavoriteBorderIcon fontSize="large" />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Now;
