import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/global.css"
import { Provider } from "react-redux";
import {
  BrowserRouter as Router
} from "react-router-dom"
import { store } from './share/store';
import 'react-toastify/dist/ReactToastify.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>

  </React.StrictMode>
);

