import React from "react";
import { Container, Grid } from "@mui/material";
import Info from "../info/info";
import FavoriteList from "../favoriteList/favorite-list";
import styled from "@emotion/styled";
import Sidebar from "../sidebar/sidebar";
import Statistics from "../statistics/statistics";

const StyledGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "space-between",
  gap: "10px",
  flexWrap: "wrap",
  "@media (max-width:900px)": {
    flexDirection: "column",
  },
}));

const Content = () => {
  return (
    <Container sx={{ marginTop: "10px" }}>
      <StyledGrid container>
        <Info />
        <Sidebar>
          <FavoriteList />
          <Statistics />
        </Sidebar>
      </StyledGrid>
    </Container>
  );
};

export default Content;
