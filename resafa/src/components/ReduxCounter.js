import React, {Component} from 'react';
import {incrementCount} from '../actions/redux-counter-actions'

import {createStore} from 'redux'
import reducer from '../reducers/counter-reducer'

export default class ReduxCounter extends Component {
    constructor(props) {
        super(props)
        this.store = createStore(reducer)
        this.state = {
            count: this.store.getState()
        }
        this.increment = this.increment.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    increment() {
        let action = incrementCount()
        this.store.dispatch(action)
    }

    handleChange() {
        console.log('calling handleChange ' + this.store.getState())
        this.setState({
            count: this.store.getState()
        })
    }

    componentDidMount() {
        this.store.subscribe(this.handleChange)
    }

    render() {
        return (
            <div>
                <p><label>Count: {this.state.count}</label></p>
                <button onClick={this.increment}>Increment By 1</button>
            </div>
        )
    }
}