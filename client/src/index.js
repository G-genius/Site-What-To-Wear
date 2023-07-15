import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import MainInfo from "./components/MainIfo/MainInfo";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Header/>
    <App />
      <Footer/>
  </BrowserRouter>
);
