import './App.css';

// Component imports
import Header from './Components/Header';
import CharacterBuilder from './Components/Character';
import React from 'react';

function App() {
    return (
        <React.Fragment>
            <Header />
            <CharacterBuilder />
        </React.Fragment>
    );
}

export default App;
