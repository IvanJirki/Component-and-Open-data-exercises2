// OrderContext.js
import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [orderedDrinks, setOrderedDrinks] = useState([]);

    const addOrder = (newOrder) => {
        setOrderedDrinks((prevOrders) => [...prevOrders, newOrder]);
    };

    return (
        <OrderContext.Provider value={{ orderedDrinks, addOrder }}>
            {children}
        </OrderContext.Provider>
    );
};
