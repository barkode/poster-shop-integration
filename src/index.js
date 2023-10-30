import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from "react-redux";
// import { persistor, store } from "./redux/store";
// import { PersistGate } from "redux-persist/integration/react";
import App from './components/App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <Provider store={store}> */}
    <BrowserRouter basename="/poster-shop-integration">
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
    </BrowserRouter>
    {/* </Provider> */}
  </>
);
