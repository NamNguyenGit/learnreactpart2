import { Fragment } from "react";
import "./App.css";
import ColorBox from "./Components/Color";

function App() {
  return (
    <Fragment>
      <ColorBox color="red"></ColorBox>
      <ColorBox color="blue"></ColorBox>
      <ColorBox color="white"></ColorBox>
    </Fragment>
  );
}

export default App;
