// OrderContext.js
import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [orderedDrinks, setOrderedDrinks] = useState([]);

    const addOrder = (newOrder) => {
        setOrderedDrinks((prevOrders) => [...prevOrders, newOrder]);
    };

    const removeOrder = (index) => {
        setOrderedDrinks((prevOrders) => prevOrders.filter((_, i) => i !== index));
    };

    const clearOrders = () => {
        setOrderedDrinks([]);
    };

    return (
        <OrderContext.Provider value={{ orderedDrinks, addOrder, removeOrder, clearOrders }}>
            {children}
        </OrderContext.Provider>
    );
};
