import React from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {CategoryFilterProvider} from "./context/CategoryFilterContext";
import {BrowserRouter} from "react-router-dom";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <CategoryFilterProvider>
          <App />
        </CategoryFilterProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
)
