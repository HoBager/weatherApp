import React, { useEffect, useState } from "react";
import { Box, Grid, Tab, Tabs } from "@mui/material/";
import TabPanel from "./tab-panel";
import Now from "../now/now";
import { useAppDispatch } from "../../store/store";
import { getCurrentCity } from "../../store/slices/weather";
import storage from "../../helpers/storage";
import Details from "../details/details";
import styled from "@emotion/styled";
import Forecast from "../forecast/forecast";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const StyledTab = styled(Tab)`
  border-radius: 16px;
`;

const Info = () => {
  const [value, setValue] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCurrentCity(storage.getLastCity()));
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Grid item md={8}>
      <Box
        border="1px solid #bbbbbb"
        boxShadow="0px 0px 4px 2px #bbbbbb"
        display="flex"
        flexDirection="column"
        borderRadius={4}
        minHeight="80vh"
        maxHeight="80vh"
        height="100%"
      >
        <Box
          display={"flex"}
          flexDirection="column"
          padding={2}
          flexGrow={1}
          overflow="auto"
        >
          <TabPanel value={value} index={0}>
            <Now />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Details />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Forecast />
          </TabPanel>
        </Box>
        <Box borderTop="1px solid #bbbbbb" borderRadius="16px" bottom={0}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="navigation tabs"
            TabIndicatorProps={{
              sx: {
                maxWidth: "50%",
                height: "100%",
                backgroundColor: "unset",
                border: "1px solid #7aa5cf",
                borderRadius: "16px",
                boxShadow: "0px 0px 5px 0px #1976d2;",
              },
            }}
          >
            <StyledTab
              sx={{ borderRadius: "16px 0 0 16px" }}
              label="Now"
              {...a11yProps(0)}
            />
            <StyledTab label="Details" {...a11yProps(1)} />
            <StyledTab label="Forecast" {...a11yProps(2)} />
          </Tabs>
        </Box>
      </Box>
    </Grid>
  );
};

export default Info;
