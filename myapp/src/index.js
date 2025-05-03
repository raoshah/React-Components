import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar/Navbar.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <h1 className="title" >React Components</h1>
  <Navbar/>
</>
);

