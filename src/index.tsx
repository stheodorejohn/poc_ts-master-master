import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { ThemeProvider } from "@mui/system";
import { Provider } from 'react-redux';
import store from './Redux/store'
import { theme } from "./styles/theme.styles";
import { BrowserRouter } from "react-router-dom";


import ErrorSource from "./errorBoundary/ErrorSource";
import ErrorBoundaries from "./errorBoundary/ErrorBoundaries";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      {/* <App /> */}

<ErrorBoundaries>
  <ErrorSource />
</ErrorBoundaries>


    </ThemeProvider>
    </BrowserRouter>
</Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
