// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import OrderForm from './OrderForm';
import OpenData from './OpenData';
import CocktailList from './CocktailList';
import { OrderProvider } from './OrderContext';
import logo from '../public/sandstorm.jpg';

function App() {
    return (
        <OrderProvider>
            <Router>
                <div className="app-container">
                    <header className="header-container">
                        <img src={logo} alt="Product Order" className="header-image" />
                        <h1>Kun Hulk juo, se ei ole vain juoma – se on tunne</h1>
                        <nav className="navbar">
                            <Link to="/" className="nav-button">Etusivu</Link>
                            <Link to="/order" className="nav-button">Tilauslomake</Link>
                            <Link to="/data" className="nav-button">Cocktailit</Link>
                        </nav>
                    </header>

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/order" element={<OrderForm />} />
                        <Route path="/data" element={<OpenData />} />
                        <Route path="/cocktails" element={<CocktailList />} />
                    </Routes>
                </div>
            </Router>
        </OrderProvider>
    );
}

function Home() {
    return <h2>Etusivu - Tervetuloa!</h2>;
}

export default App;
