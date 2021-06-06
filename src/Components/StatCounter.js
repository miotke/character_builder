import React, { Component } from 'react';

class StatCounter extends Component {
    
    getStat() {
        const { value } = this.props.statCounter;
        return value;
    }
    
    getAttribute() {
        const { attribute } = this.props.statCounter;
        return attribute;
    }
    
    render() {
        const { onDecrementInStatCounter, onIncrementInStatCounter, statCounter } = this.props

        return (
            <div>
                <h3>value: {this.getStat()}</h3>
                <p>attribute: {this.getAttribute()}</p>
                <button onClick={() => onDecrementInStatCounter(statCounter)}>-</button>
                <button onClick={() => onIncrementInStatCounter(statCounter)}>+</button>

            </div>
        )
    }
}

export default StatCounter;
