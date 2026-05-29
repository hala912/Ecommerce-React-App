
import React from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import Approuter from './routes/Approuter'
import {Provider} from "react-redux"
import store from "./redux"
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Approuter />
    </Provider>
  </React.StrictMode>
)
