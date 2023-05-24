import { Box, Typography } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      boxSizing="border-box"
      display={value === index ? "flex" : "none"}
      id={`simple-tabpanel-${index}`}
      flexDirection="column"
      flexGrow="1"
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </Box>
  );
};

export default TabPanel;
