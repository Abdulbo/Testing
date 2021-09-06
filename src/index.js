import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import {ModalContex} from "./context/ModalProvider";

ReactDOM.render(
      <React.StrictMode>
            <ModalContex>
                  <Router>
                          <App />
                  </Router>
            </ModalContex>
      </React.StrictMode>,
  document.getElementById('root')
);
