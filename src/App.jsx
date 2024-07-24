import React from 'react';
import { ListHolder } from './components/ListHolder';
import { ItemDetails, ItemSpec } from './components/ItemDetails';
// import Routes from './components/Router';
import { BrowserRouter, createBrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';

const App = () => {

  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListHolder />} />
        <Route path="item" element={<ItemDetails />} />   
      </Routes>
    </BrowserRouter>
    
  </div>;
};

export default App;