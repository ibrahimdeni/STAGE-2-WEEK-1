import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScrollExample from "./pages/home/navbar"
import ImgOverlayExample from "./pages/home/BG"
import GroupExample from "./pages/home/carousel"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavScrollExample />
    <ImgOverlayExample />
    <GroupExample />
  </React.StrictMode>
);
