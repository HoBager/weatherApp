import {
  IconButton,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { FC } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { toggleFavorities } from "../../store/slices/favorites-cityes";
import { AppDispatch, useAppDispatch } from "../../store/store";
import { getCurrentCity } from "../../store/slices/weather";
import { updateStats } from "../../store/slices/statistics";

interface FavoriteItemProps {
  city: string;
}

const selectCity = (city: string, dispatch: AppDispatch) => {
  return () => {
    dispatch(getCurrentCity(city));
    dispatch(updateStats(city));
  };
};

const deleteItem = (city: string, dispatch: AppDispatch) => {
  return () => {
    dispatch(toggleFavorities(city));
  };
};

const FavoriteItem: FC<FavoriteItemProps> = ({ city }) => {
  const dispatch = useAppDispatch();

  return (
    <ListItem disablePadding={true}>
      <ListItemButton onClick={selectCity(city, dispatch)}>
        <Typography variant="h5" marginBottom={0}>
          {city}
        </Typography>
      </ListItemButton>
      <IconButton onClick={deleteItem(city, dispatch)}>
        <ClearIcon />
      </IconButton>
    </ListItem>
  );
};

export default FavoriteItem;
