import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';


import React from "react";
import {CategoryFilterProvider} from "./context/CategoryFilterContext";
import {SearchProvider} from "./context/SearchContext";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <CategoryFilterProvider>
          <App />
        </CategoryFilterProvider>
      </SearchProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
