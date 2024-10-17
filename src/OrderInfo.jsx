// OrderInfo.js
import React from 'react';

const OrderInfo = ({ orderedDrinks }) => {
    const totalPrice = orderedDrinks.reduce((sum, drink) => sum + drink.totalPrice, 0);

    return (
        <div className="order-info">
            <h3>Tilaustiedot</h3>
            <table className='tb'>
                <thead>
                    <tr>
                        <th>Tuote</th>
                        <th>Määrä</th>
                        <th>Yhteishinta</th>
                    </tr>
                </thead>
                <tbody>
                    {orderedDrinks.map((drink, index) => (
                        <tr key={index}>
                            <td>{drink.cocktailName}</td>
                            <td>{drink.quantity}</td>
                            <td>{drink.totalPrice}€</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="2"><strong>Yhteensä</strong></td>
                        <td><strong>{totalPrice}€</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default OrderInfo;
