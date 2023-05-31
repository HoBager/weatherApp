import { Box, Grid } from "@mui/material";
import React, { FC } from "react";

interface SideBarProps {
  children?: React.ReactNode;
}

const Sidebar: FC<SideBarProps> = ({ children }) => {
  return (
    <Grid item md={3.5}>
      <Box display="flex" flexDirection="column" gap="20px">
        {children}
      </Box>
    </Grid>
  );
};

export default Sidebar;
