import React, {Component} from 'react';

class Compute extends Component {
    constructor(props) {
        super(props);
        this.state = {
          oprand1: 0,
          oprand2: 0,
          op: 0,
            result: 0
        };
    }

    changeOprnad(e) {
        if (e.target.name === 'oprand1') {
            this.setState({
                oprand1: e.target.value
            })
        } else {
            this.setState({
                oprand2: e.target.value
            })
        }

    }

    changeOps(e) {
        console.log(this.state.op);
        let nextOps = (this.state.op + 1) % 4;
        console.log(`nextOps = ${nextOps}`);
        this.setState({
            op: nextOps
        });
    }

    render() {
        let ops = '+';

        switch(this.state.op) {
            case 0:
                ops='+';
                break;
            case 1:
                ops='-';
                break;
            case 2:
                ops='*';
                break;
            default:
                ops='/';
                break;
        }
        return(
            <div>
                <input name='oprand1' type='text' value={this.state.oprand1} onChange={this.changeOps.bind(this)}/>
                <label onClick={this.changeOps.bind(this)}>{ops}</label>
                <input name='oprand2'  type='text' value={this.state.oprand2} onChange={this.changeOps.bind(this)}/>
                <label>=</label>
                <label>{this.state.result}</label>
            </div>
        );
    }
}

export default Compute;