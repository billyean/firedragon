import React, {Component} from 'react';
import CounterStore from '../stores/counter-store';
import incrementAction from '../actions/counter-actions';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: CounterStore.getCount()
        };
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        console.log(this._onChange);
        CounterStore.addChangeListener(this._onChange);
    }

    componentWillMount() {
        CounterStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState({count: CounterStore.getCount()});
    }

    // Call an action.
    increment() {
        incrementAction.incrmentCount(10);
        // this.setState({
        //     count: this.state.count + 1
        // });
    }
    render() {
        return (
          <div>
              <p>Count: {this.state.count} </p>
              <button onClick={this.increment.bind(this)}>Increment 1</button>
          </div>
        );
    }
}

export default Counter;