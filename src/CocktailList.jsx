import React from 'react';
import Cocktail from './Cocktail';

const CocktailList = ({ cocktails }) => {
    if (!cocktails || cocktails.length === 0) {
        return <p>No cocktails found. Try searching for something else.</p>;
    }

    return (
        <div className="cocktail-list">
            {cocktails.map((cocktail) => (
                <Cocktail key={cocktail.idDrink} cocktail={cocktail} />
            ))}
        </div>
    );
};

export default CocktailList;
