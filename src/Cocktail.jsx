import React from 'react';

const Cocktail = ({ cocktail }) => {
    return (
        <div className="cocktail-item">
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="cocktail-image" />
            <h3>{cocktail.strDrink || "Unknown Cocktail"}</h3>
            <p><strong>Category:</strong> {cocktail.strCategory || "N/A"}</p>
            <p><strong>Instructions:</strong> {cocktail.strInstructions || "No instructions available."}</p>
        </div>
    );
};

export default Cocktail;
