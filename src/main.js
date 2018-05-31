import React from "react";
import ReactDOM from "react-dom";

import "./style.scss";
import Header from "./components/header";

const root = document.getElementById('root');
const app = (
  <React.Fragment>
    <Header />
    <div className="main">
      <p>this is the main content</p>
    </div>
  </React.Fragment>
);

ReactDOM.render(app, root);


