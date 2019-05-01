import React, {Component} from 'react'

class LifeCycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'message': 'Life Cycle'
        }
    }

    changeMessage() {
        if (this.state.message === 'Life Cycle') {
            this.setState({
                'message': 'Not Any More'
            })
        } else {
            this.setState({
                'message': 'Life Cycle'
            })
        }
    }

    static getDerivedStateFromProps(props, state) {
        alert("[call getDerivedStateFromProps]: " + props)
    }

    static shouldComponentUpdate(nextProps, nextState) {
        alert("[call shouldComponentUpdate]: " + nextState)
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        alert("[call getSnapshotBeforeUpdate]: " + prevState.message)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        alert("[call componentDidUpdate]: " + prevState.message)
    }


    render() {
        return(
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.changeMessage.bind(this)}>Change Message</button>
            </div>
        )
    }
}

export default LifeCycle
