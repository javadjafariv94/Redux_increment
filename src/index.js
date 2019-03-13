import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import Counter from './components/Counter'
import conter from './reducers'
import './components/Counter.css'

const store = createStore(conter)

const rootElement = document.getElementById('root')

const render = () => ReactDOM.render(
    <Counter 
        value = {store.getState()}
        onIncrement={ () => store.dispatch({type : 'INCREMENT'})}
        onDecrement={ () => store.dispatch({type : 'DECREMENT'})}
    /> ,rootElement
)

render()

store.subscribe(render)