import React from 'react';
import * as ReactDOMClient from "react-dom/client";
import App from './App';

const container = document.getElementById("root");

/** Uncomment if you use material-ui **/
//import CssBaseline from "@mui/material/CssBaseline";

/** Uncomment if you use react-router-dom **/
//import { BrowserRouter } from "react-router-dom";

const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    {/** Uncomment if you use react-redux **/}
    {/* <Provider store={store}> */}
    {/** Uncomment if you use material-ui **/}
    {/*<CssBaseline />*/}
    {/** Uncomment if you use react-router **/}
    {/*<BrowserRouter>*/}
    <App />
    {/** Uncomment if you use react-router **/}
    {/*</BrowserRouter>*/}
    {/** Uncomment if you use react-redux **/}
    {/* </Provider> */}
  </React.StrictMode>
);

