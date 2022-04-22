import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import BaseLayout from './components/BaseLayout';
import BubbleSort from './components/BubbleSort';
import QuickSort from './components/QuickSort';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <BaseLayout>
     
        <Routes>
          
        {/* <Route path="/" element={<App />} /> */}
          <Route path="/" element={<BubbleSort />} />
          <Route path="/quick" element={<QuickSort />} />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
