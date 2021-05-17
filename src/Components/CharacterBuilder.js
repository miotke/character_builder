import React, { Component } from 'react';

// Component imports
import StatCounter from './StatCounter';

class CharacterBuilder extends Component { 

    state = { 
        characterName: "Character name should appear here",
        availableAttributePoints: 20,
        characterStats: [ 
            { attribute: "strength", value: 0},
            { attribute: "intellect", value: 0},
            { attribute: "agility", value: 0},
            { attribute: 'Spirit', value: 0},
        ]
    }

    handleAvailableAttributePoints = () => { 
        console.log("available points " + this.state.availableAttributePoints);
    }

    handleAddStatPoint = () => { 
        console.log('Add stats!');
        // TODO: 
        //  - Add one to value
        //  - Subtract one from availableAttributePoints
    }

    handleSubtractStatPoint = () => { 
        console.log("Remove stats!");
        // TODO: 
        //  - Subtract one from value
        //  - Add one to availableAttributePoints
    }

    render() { 
        return(
            <div>
                <h2>Character Name: '{this.state.characterName}'</h2>
                {this.state.characterStats.map(stats => { 
                    return <StatCounter 
                                key={stats.attribute} 
                                onAddStatPoint={this.handleAddStatPoint} 
                                onSubtractStatPoint={this.handleSubtractStatPoint} 
                                attPoints={this.state.availableAttributePoints}
                                characterStats={stats} 
                            />

                })}
            </div>
        )
    }
}

export default CharacterBuilder;
