import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import NgoLandingPage from "./Pages/NgoLandingPage/NgoLandingPage";

const App = () => (
  <div className="ontaier">
        <NgoLandingPage/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
