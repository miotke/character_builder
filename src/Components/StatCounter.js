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
        const { onIncrementInStatCounter, statCounter } = this.props

        return (
            <div>
                <h3>value: {this.getStat()}</h3>
                <p>attribute: {this.getAttribute()}</p>
                <button onClick={() => onIncrementInStatCounter(this.props.statCounter)}>+</button>
                {/* <button onClick={() => this.props.onAddStatPoint(this.props.stats)}>+</button> */}
            </div>
        )
    }
}

export default StatCounter;
