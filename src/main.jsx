import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import React from "react";
import {CategoryFilterProvider} from "./context/CategoryFilterContext";
import {SearchProvider} from "./context/SearchContext";
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchProvider>
      <CategoryFilterProvider>
        <App />
      </CategoryFilterProvider>
    </SearchProvider>
  </React.StrictMode>
)
