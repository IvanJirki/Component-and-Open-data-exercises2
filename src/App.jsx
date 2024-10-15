
import React from 'react';
import './App.css';
import OrderForm from './OrderForm'; 
import logo from '../public/sandstorm.jpg'; 

function App() {
    return (
        <div className="app-container">
            <header className="header-container">
                <img src={logo} alt="Product Order" className="header-image" />
                <h1>Welcome to Hulk page</h1>
            </header>
            <OrderForm />
        </div>
    );
}

export default App;
