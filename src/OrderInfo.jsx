// OrderInfo.js
import React, { useContext } from 'react';
import { OrderContext } from './OrderContext';

const OrderInfo = () => {
    const { orderedDrinks, removeOrder, clearOrders } = useContext(OrderContext);
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
                        <th>Toiminnot</th>
                    </tr>
                </thead>
                <tbody>
                    {orderedDrinks.map((drink, index) => (
                        <tr key={index}>
                            <td>{drink.cocktailName}</td>
                            <td>{drink.quantity}</td>
                            <td>{drink.totalPrice}€</td>
                            <td>
                                <button onClick={() => removeOrder(index)}>Poista</button>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="2"><strong>Yhteensä</strong></td>
                        <td><strong>{totalPrice}€</strong></td>
                        <td>
                            <button onClick={clearOrders}>Peruuta kaikki</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default OrderInfo;
