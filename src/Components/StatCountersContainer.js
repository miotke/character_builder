import React, { Component } from 'react'
import StatCounter from './StatCounter'

class StatCounterContainer extends Component { 
    render() { 
        const { statCounters, onDecrement, onIncrement } = this.props

        return(
            <div>
                {statCounters.map(statCounter => { 
                    return<StatCounter key={statCounter.attribute} onDecrementInStatCounter={onDecrement} onIncrementInStatCounter={onIncrement} statCounter={statCounter} />
                })}
            </div>
        )
    }
}

export default StatCounterContainer
