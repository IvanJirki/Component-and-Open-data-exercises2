// OpenData.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CocktailList from './CocktailList';

const OpenData = () => {
    const [cocktails, setCocktails] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchCocktails = async (searchQuery) => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`);
            setCocktails(response.data.drinks || []);
        } catch (error) {
            setError("Failed to fetch data. Please try again later.");
            console.error("Error fetching cocktails:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCocktails('margarita');
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        fetchCocktails(searchTerm);
    };

    return (
        <div className="open-data">
            <h3>Search for a Cocktail</h3>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Enter cocktail name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            <CocktailList cocktails={cocktails} />
        </div>
    );
};

export default OpenData;
