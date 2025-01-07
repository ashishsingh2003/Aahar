import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { Ownerprovider } from './context/Ownerid.jsx'
import { Customerprovider } from './context/Customerid.jsx'
import { Currentprovider } from './context/Currentrestaurant.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Ownerprovider>
      <Customerprovider>
        <Currentprovider>
         <App />
         </Currentprovider>
      </Customerprovider>
   
    </Ownerprovider>
    </BrowserRouter>
  </StrictMode>,
)
