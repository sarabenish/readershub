import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.css";
import image1 from "./assets/userpic.png";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import rootReducer from "./components/Reducer";

const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
