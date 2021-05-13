import React, { Component } from 'react';

class StatCounter extends Component {

    getAttribute() { 
        const { attribute } = this.props.characterStats;
        return attribute;
    }

    getStat() { 
        const { value } = this.props.characterStats;
        return value;
    }

    // TODO: subtractStatPoint and addStatPoint don't really do anything right now
    // this needs to be fixed and the the actual work should be done by CharacterBuilder
    subtractStatPoint = () => { 
        const subtractStatPoint = this.props.characterStats.value - 1;
        console.log("subtracting stat point");
        return subtractStatPoint;
    }

    addStatPoint = () => { 
        const addStatPoint = this.props.characterStats.value + 1;
        console.log("adding stat point");
        return addStatPoint;
    }


    render() {
        return (
            <div>
                <h3>{this.getStat()}</h3>
                <p>{this.getAttribute()}</p>
                <button onClick={this.subtractStatPoint}>-</button>
                <button onClick={this.addStatPoint}>+</button>
            </div>
        )
    }
}

export default StatCounter;
