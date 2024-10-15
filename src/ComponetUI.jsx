/*ComponetUI.jsx*/
import React from 'react';

function ComponentUI({ image, title }) {
    return (
        <header className="component-header">
            <img src={image} id='componentImage' alt={title} />
            <h1>{title}</h1>
        </header>
    );
}

export default ComponentUI;
