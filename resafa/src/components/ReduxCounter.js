import React, {Component} from 'react';
import {incrementCount} from '../actions/redux-counter-actions'

export default class ReduxCounter extends Component {
    constructor(props) {
        super(props)
        this.props = props
        console.log(props)
        this.state = {
            count: this.props.store.getState()
        }
        this.increment = this.increment.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    increment() {
        let action = incrementCount()
        this.props.store.dispatch(action)
    }

    handleChange() {
        console.log('calling handleChange ' + this.props.store.getState())
        this.setState({
            count: this.props.store.getState()
        })
    }

    componentDidMount() {
        this.props.store.subscribe(this.handleChange)
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