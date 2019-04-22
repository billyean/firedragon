import React, {Component} from 'react'
import CounterStore from '../stores/counter-store'
import incrementAction from '../actions/counter-actions'
import '../App.css'

const style = {
    textAlign: 'center'
};

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: CounterStore.getCount()
        }
        this._onChange = this._onChange.bind(this)
        this.increment = this.increment.bind(this)
    }

    componentDidMount() {
        console.log(this._onChange)
        CounterStore.addChangeListener(this._onChange)
    }

    componentWillMount() {
        CounterStore.removeChangeListener(this._onChange)
    }

    _onChange() {
        this.setState({count: CounterStore.getCount()})
    }

    // Call an action.
    increment(incremet) {
        incrementAction.incrmentCount(incremet)
    }
    render() {
        return (
          <div className="container">
              <div className="row">
                  <div className="col" style={style}>Count: {this.state.count}</div>
              </div>
              <div className="row">
                  <div className="col"><button onClick={() => this.increment(1)}>Increase 1</button></div>
                  <div className="col"><button onClick={() => this.increment(-1)}>Decrease 1</button></div>
                  <div className="col"><button onClick={() => this.increment(5)}>Increase 5</button></div>
                  <div className="col"><button onClick={() => this.increment(-5)}>Decrease 5</button></div>
              </div>

          </div>
        );
    }
}

export default Counter;
