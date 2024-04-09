import React from 'react'
import ReactDOM from 'react-dom/client'
import "modern-normalize";
import App from './App.jsx'
import './index.css'

import { Provider } from 'react-redux'

import { BrowserRouter } from "react-router-dom";
// import { PersistGate } from 'redux-persist/integration/react'
import { store } from './redux/filters/store.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate persistor={persistor} loading={null}> */}
         <BrowserRouter>
           <App />
          </BrowserRouter>
       {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
)
