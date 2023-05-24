import { useState } from "react";
import { AppBar, Box, Toolbar, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { getCurrentCity } from "../../store/slices/weather";
import { useAppDispatch } from "../../store/store";
import { updateStats } from "../../store/slices/statistics";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      minWidth: "60vw",
      "&:focus": {
        width: "65vw",
      },
    },
  },
}));

const Header = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState("");
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(getCurrentCity(inputValue));
    dispatch(updateStats(inputValue));
    setInputValue("");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ boxShadow: "none" }} position="static">
        <Toolbar>
          <Box display="flex" justifyContent={"center"} flexGrow={1}>
            <form onSubmit={submitHandler}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  value={inputValue}
                  onChange={(event) => {
                    setInputValue(event.target.value);
                  }}
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </form>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
