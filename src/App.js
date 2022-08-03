import logo from "./logo.svg";
import "./App.css";
import MyFirstClassComponent from "./components/MyFirstClassComponents/index";
import Layout from "./containers/Layout/index";
import { ExampleComponent, Hidden } from "./components/FunctionalHooks/index";
import {
  MyfunctionTodos,
  MyCountComponent,
} from "./components/FunctionalHooks/indexUseEffect";
import { Button } from "@mui/material";
// import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';



// const theme = createMuiTheme();

// const useStyles = makeStyles((theme) => {
//   root: {
//     // some CSS that accesses the theme
//   }
// });

function App() {
  const msg = "TRUE";
  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <MyCountComponent />
      <Hidden />
      <ExampleComponent />
      <MyFirstClassComponent />
      <MyfunctionTodos />
      {/* <Layout /> */}
    </div>
  );
}

export default App;
