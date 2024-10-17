// OrderForm.js
import React, { useState, useContext } from 'react';
import OrderInfo from './OrderInfo';
import { OrderContext } from './OrderContext';

const OrderForm = () => {
    const cocktailsList = [
        { cocktailName: 'Margarita', cocktailPrice: 10 },
        { cocktailName: 'Mojito', cocktailPrice: 8 },
        { cocktailName: 'Pina Colada', cocktailPrice: 9 }
    ];

    const { orderedDrinks, addOrder } = useContext(OrderContext);

    const [selectedCocktailIndex, setSelectedCocktailIndex] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const selectedCocktail = cocktailsList[selectedCocktailIndex];

    const handleOrder = () => {
        if (quantity > 0) {
            const newOrder = {
                cocktailName: selectedCocktail.cocktailName,
                quantity,
                totalPrice: selectedCocktail.cocktailPrice * quantity
            };
            addOrder(newOrder);
            setQuantity(0);
        }
    };

    return (
        <div className="order-form">
            <h3>Valitse cocktail</h3>
            <label htmlFor="cocktail-select">Cocktail: </label>
            <select
                id="cocktail-select"
                value={selectedCocktailIndex}
                onChange={(e) => setSelectedCocktailIndex(Number(e.target.value))}
            >
                {cocktailsList.map((cocktail, index) => (
                    <option key={cocktail.cocktailName} value={index}>
                        {cocktail.cocktailName} ({cocktail.cocktailPrice}€)
                    </option>
                ))}
            </select>

            <div className="quantity-container">
                <label htmlFor="quantity">Määrä: </label>
                <button onClick={() => setQuantity(Math.max(quantity - 1, 0))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>

            <button onClick={handleOrder}>Tilaa</button>

            <OrderInfo orderedDrinks={orderedDrinks} />
        </div>
    );
};

export default OrderForm;
