// OrderInfo.js
import React from 'react';

const OrderInfo = ({ productName, productPrice, quantity }) => {
    const totalPrice = productPrice * quantity;

    return (
        <div className="order-info">
            <h3>Order Details</h3>
            <table className='tb'>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{productName}</td>
                        <td>{quantity}</td>
                        <td>{totalPrice}€</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default OrderInfo;
