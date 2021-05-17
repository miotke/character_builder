import React, { Component, Fragment } from 'react';

class StatCounter extends Component {

    getAttribute() {
        const { attribute } = this.props.characterStats;
        return attribute;
    }

    getStat() {
        const { value } = this.props.characterStats;
        return value;
    }

    render() {
        return (
            <Fragment>
                <div>
                    <h3>{this.getStat()}</h3>
                    <p>{this.getAttribute()}</p>
                    <button onClick={() => this.props.onSubtractStatPoint(this.props.characterStats.value)}>-</button>
                    <button onClick={() => this.props.onAddStatPoint(this.props.characterStats.value)}>+</button>
                </div>
            </Fragment>
        )
    }
}

export default StatCounter;
