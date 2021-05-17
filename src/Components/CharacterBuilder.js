import React, { Component } from 'react';
import CharacterBackStory from './CharacterBackStory';

// Component imports
import StatCounter from './StatCounter';

class CharacterBuilder extends Component { 

    state = { 
        characterName: 'Character name should appear here',
        availableAttributePoints: 20,
        characterStats: [ 
            { attribute: 'strength', value: 0},
            { attribute: 'intellect', value: 0},
            { attribute: 'agility', value: 0},
            { attribute: 'Spirit', value: 0},
        ],
        characterBackStory: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }

    handleAvailableAttributePoints = () => { 
        console.log('available points ' + this.state.availableAttributePoints);
    }

    handleAddStatPoint = () => { 
        console.log('Add stats!');
        // TODO: 
        //  - Add one to value
        //  - Subtract one from availableAttributePoints
    }

    handleSubtractStatPoint = () => { 
        console.log('Remove stats!');
        // TODO: 
        //  - Subtract one from value
        //  - Add one to availableAttributePoints
    }

    render() { 
        return(
            <div>
                <h2>Character Name: '{this.state.characterName}'</h2>

                <h5>Available attributes: {this.state.availableAttributePoints}</h5>

                {this.state.characterStats.map(stats => { 
                    return <StatCounter 
                                key={stats.attribute} 
                                onAddStatPoint={this.handleAddStatPoint} 
                                onSubtractStatPoint={this.handleSubtractStatPoint} 
                                attPoints={this.state.availableAttributePoints}
                                characterStats={stats} 
                            />

                })}

                <CharacterBackStory backstory={this.state.characterBackStory} />
            </div>
        )
    }
}

export default CharacterBuilder;
