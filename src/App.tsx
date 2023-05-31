import { CssBaseline } from "@mui/material";
import Header from "./components/header/header";
import Content from "./components/content/content";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Header />
      <Content />
    </Provider>
  );
}

export default App;
