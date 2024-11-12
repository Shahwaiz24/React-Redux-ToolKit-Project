import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { AppStore } from './App-Store/app-store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={AppStore}>
  <StrictMode>
    <App />
  </StrictMode>,
  </Provider >

)
