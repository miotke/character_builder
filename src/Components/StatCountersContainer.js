import React, { Component } from 'react'
import StatCounter from './StatCounter'

class StatCounterContainer extends Component { 
    render() { 
        const { statCounters, characterStat, onSubtractPoint, onIncrement } = this.props

        return(
            <div>
                {statCounters.map(statCounter => { 
                    return<StatCounter key={statCounter.attribute} onIncrementInStatCounter={onIncrement} statCounter={statCounter} />
                })}
            </div>
        )
    }
}

export default StatCounterContainer
