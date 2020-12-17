import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import WebFontLoader from "webfontloader";
import dayjs from "dayjs";

import App from "./App";

import "./css/index.css";
import "dayjs/locale/ru";


WebFontLoader.load({
  google: {
    families: ["Open Sans:300,400,700"], 
  },
});

dayjs.locale("ru");

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>, 
  document.getElementById('root')
);