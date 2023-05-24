import styled from "@emotion/styled";
import { Box, ListItem, Typography } from "@mui/material";
import { FC } from "react";
import { IForecastList } from "../../types/weather";
import normalizeTime from "../../helpers/normalizeTime";
import { serverUrl } from "../../api/const";

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const StyledImg = styled.img`
  height: 50px;
  width: 50px;
`;

const StyledContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 150px;
  border: 1px solid #bbbbbb;
  border-radius: 16px;
  padding: 16px;
  font-size: 20px;
  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

const StyledTypography = styled(Typography)(() => ({
  fontSize: "inherit",
  fontWeight: "bold",
  paragraph: true,
}));

interface ForecastItemProps {
  data: IForecastList;
}

function getDate(date: number) {
  const cardDate = new Date(date * 1000);
  const month = MONTH_NAMES[cardDate.getMonth()];
  const dayOfMonth = cardDate.getDate();
  return `${dayOfMonth} ${month}`;
}

const ForecastItem: FC<ForecastItemProps> = ({ data }) => {
  return (
    <ListItem>
      <StyledContainer>
        <Box display="flex" justifyContent="space-between" flexGrow={1}>
          <StyledTypography>{`${getDate(data.dt)}`}</StyledTypography>
          <StyledTypography>{`${normalizeTime(data.dt)}`}</StyledTypography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" flexDirection="column">
            <StyledTypography margin={0}>
              {`Temperature: ${Math.floor(data.main.temp)}\u00B0`}
            </StyledTypography>
            <StyledTypography margin={0}>
              {`Feels like: ${Math.floor(data.main.feels_like)}\u00B0`}
            </StyledTypography>
          </Box>
          <StyledImg
            src={`http://${serverUrl}/img/wn/${data.weather[0].icon}.png`}
            alt="icon"
          />
        </Box>
      </StyledContainer>
    </ListItem>
  );
};

export default ForecastItem;
