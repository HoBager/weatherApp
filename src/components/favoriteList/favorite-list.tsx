import { Box, Grid, List, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import FavoriteItem from "./favorite-item";

const FavoriteList = () => {
  const { favoriteCities } = useSelector((state: RootState) => state.favorites);

  return (
    <Box
      boxShadow="0px 0px 4px 2px #bbbbbb"
      border="1px solid #bbbbbb"
      display="flex"
      flexDirection="column"
      borderRadius={4}
      minHeight="55vh"
      maxHeight="55vh"
    >
      <Typography
        padding={2}
        borderBottom="1px solid #bbbbbb"
        variant="h4"
        marginBottom={0}
      >
        {`Added Locations:`}
      </Typography>
      <Box display="flex" flexDirection="column" overflow="auto">
        <List disablePadding={true} sx={{ overflow: "auto" }}>
          {favoriteCities.map((city: string) => {
            return <FavoriteItem key={city} city={city} />;
          })}
        </List>
      </Box>
    </Box>
  );
};

export default FavoriteList;
