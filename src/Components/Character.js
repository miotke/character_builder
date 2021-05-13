import React, { Component } from 'react';

// Component imports
import StatCounter from './StatCounter';

class CharacterBuilder extends Component { 

    state = { 
        characterName: "Gus",
        characterStats: [ 
            { attribute: "strength", value: 1},
            { attribute: "intellect", value: 0},
            { attribute: "agility", value: 0},
            { attribute: 'Spirit', value: 0},
        ]
    }

    render() { 
        return(
            <div>
                <h2>Character Name: {this.state.characterName}</h2>

                {this.state.characterStats.map(stats => { 
                    return <StatCounter key={stats.id} characterStats={stats} />
                })}
            </div>
        )
    }
}

export default CharacterBuilder;
