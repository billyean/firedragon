import React, {Component} from 'react'
import '../App.css'

class Compute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            operand1: 0,
            operand2: 0,
            result: 0,
            op: 0,
        }
        this.changeOperand = this.changeOperand.bind(this)
        this.changeOperator = this.changeOperator.bind(this)
        this.calculate = this.calculate.bind(this)
    }


    changeOperand(event) {
        let operand1 = this.state.operand1
        let operand2 = this.state.operand2
        if (event.target.name === 'operand1') {
            operand1 = parseInt(event.target.value)
        } else {
            operand2 = parseInt(event.target.value)
        }
        let result = this.calculate(operand1, operand2, this.state.op)
        this.setState({
            operand1: operand1,
            operand2: operand2,
            result: result
        })
    }

    changeOperator(event) {
        let nextOps = (this.state.op + 1) % 4
        if (this.state.operand2 === 0 && nextOps === 3) {
            nextOps = 0
        }
        let result = this.calculate(this.state.operand1, this.state.operand2, nextOps)
        this.setState({
            op: nextOps,
            result: result
        })
    }

    calculate(operand1, operand2, op) {
        switch(op) {
            case 0:
                return operand1 + operand2
            case 1:
                return operand1 - operand2
            case 2:
                return operand1 * operand2
            default:
                return operand1 / operand2
        }
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
            <div className="container">
                <div className="row">
                    <div className="col">
                        <input name="operand1" type='number' value={this.state.operand1} onChange={(event) => this.changeOperand(event)}/>
                    </div>
                    <div className="col">
                        <label onClick={this.changeOperator.bind(this)}>{ops}</label>
                    </div>
                    <div className="col">
                        <input name="operand2" type='number' value={this.state.operand2} onChange={(event) => this.changeOperand(event)}/>
                    </div>
                    <div className="col">
                        =
                    </div>
                    <div className="col">
                        <label >{this.state.result}</label>
                    </div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
                <div className="row">
                    <p><button onClick={this.changeOperator}>Random change operator</button></p>
                </div>
            </div>
        );
    }
}

export default Compute;
