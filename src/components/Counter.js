import React from 'react';

export default class Counter extends React.Component {
    render(){
        const {value ,onIncrement ,onDecrement } = this.props
        return(
            <div>
                <h2>Count: {value}</h2>
                <button onClick={onIncrement}> Increment </button>
                <button onClick={onDecrement}> Decrement </button>
            </div>
        )
    }
}