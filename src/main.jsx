
import React from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import Approuter from './routes/Approuter'
import {Provider} from "react-redux"
import {store, persistor} from "./redux/index"
import {PersistGate} from "redux-persist/integration/react"

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Approuter />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
