import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { registerSW } from 'virtual:pwa-register';
import './index.css'
import{BrowserRouter} from 'react-router-dom'


const updateSW = registerSW({
  onNeedRefresh() { },
  onOfflineReady() { },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
