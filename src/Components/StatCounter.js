import React, { Component } from 'react';

class StatCounter extends Component {
    
    getStat() {
        const { value } = this.props.statCounter;
        return value;
    }
    
    getAttribute() {
        // Gets the string associated with the State's attribute
        // then formats the string so that only the first letter 
        // is capitalized. This enforces string formatting incase I
        // make a mistake adding attributes to state. 
        const { attribute } = this.props.statCounter;
        const formattedAttribute = attribute[0].toUpperCase() + attribute.slice(1).toLowerCase()
        return formattedAttribute
    }
    
    render() {
        const { onDecrementInStatCounter, onIncrementInStatCounter, statCounter } = this.props

        return (
            <div>
                <h3>{this.getStat()}</h3>
                <p>{this.getAttribute()}</p>
                <button onClick={() => onDecrementInStatCounter(statCounter)}>-</button>
                <button onClick={() => onIncrementInStatCounter(statCounter)}>+</button>

            </div>
        )
    }
}

export default StatCounter;
