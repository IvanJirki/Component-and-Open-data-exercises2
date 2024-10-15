import React, { useState } from 'react';
import OrderInfo from './OrderInfo'; 
const OrderForm = () => {
    const productsList = [
        { productName: 'iPhone 14', productPrice: 999 },
        { productName: 'Samsung Galaxy S22', productPrice: 899 },
        { productName: 'Google Pixel 6', productPrice: 799 }
    ];

    const [selectedProductIndex, setSelectedProductIndex] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const selectedProduct = productsList[selectedProductIndex];

    return (
        <div className="order-form">
            <h3>Select Product</h3>
            <label htmlFor="product-select">Product: </label>
            <select
                id="product-select"
                value={selectedProductIndex}
                onChange={(e) => setSelectedProductIndex(Number(e.target.value))}
            >
                {productsList.map((product, index) => (
                    <option key={product.productName} value={index}>
                        {product.productName} ({product.productPrice}€)
                    </option>
                ))}
            </select>

            <div className="quantity-container">
                <label htmlFor="quantity">Quantity: </label>
                <button onClick={() => setQuantity(Math.max(quantity - 1, 0))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>

            <OrderInfo 
                productName={selectedProduct.productName}
                productPrice={selectedProduct.productPrice}
                quantity={quantity}
            />
        </div>
    );
};

export default OrderForm;
