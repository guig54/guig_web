import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './components/App';
import Header from './components/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div> 
  <Header />
   <App />
 </div>
   

);

