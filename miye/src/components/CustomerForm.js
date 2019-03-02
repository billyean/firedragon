import React, {Component} from 'react';

class CustomerForm extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            customer: props.customer
        }
        this.changeField = this.changeField.bind(this)
        this.onNewCustomer = this.onNewCustomer.bind(this)
        this.onUpdateustomer = this.onUpdateustomer.bind(this)
        this.onCancel = this.onCancel.bind(this)
    }

    changeField(e) {
        switch(e.target.name) {
            case 'first_name':
                this.setState({customer: Object.assign({}, this.state.customer, {first_name: e.target.value})})
                break
            case 'last_name':
                this.setState({customer: Object.assign({}, this.state.customer, {last_name: e.target.value})})
                break
            case 'gender':
                this.setState({customer: Object.assign({}, this.state.customer, {gender: e.target.value})})
                break
            case 'email':
                this.setState({customer: Object.assign({}, this.state.customer, {email: e.target.value})})
                break
            case 'tel':
                this.setState({customer: Object.assign({}, this.state.customer, {tel: e.target.value})})
                break
            default:
                break
        }
    }

    onNewCustomer() {
        this.props.addHandler(this.state.customer)
    }

    onUpdateustomer() {
        this.props.updateHandler(this.state.customer)
    }

    onCancel() {
        this.props.cancelHandler()
    }

    render() {
        let btn = this.props.op === 'update' ? (<button onClick={this.onUpdateustomer}>Update</button>) : (<button onClick={this.onNewCustomer}>Create</button>)
        return (
            <div>
                <input type='hidden' value={this.state.customer.id} />
                <p><label>First Name: </label>
                <input type='text' onChange={this.changeField} name='first_name' value={this.state.customer.first_name} />
                </p>
                <p><label>Last Name: </label>
                    <input type='text' onChange={this.changeField} name='last_name' value={this.state.customer.last_name} />
                </p>
                <p><label>Gender: </label>
                    <select name='gender' onChange={this.changeField}>
                        <option>Female</option>
                        <option>Male</option>
                    </select>
                </p>
                <p><label>EMail: </label>
                    <input type='text' onChange={this.changeField} name='email' value={this.state.customer.email} />
                </p>
                <p><label>Tel: </label>
                    <input type='text' onChange={this.changeField} name='tel' value={this.state.customer.tel} />
                </p>
                {btn}<button onClick={this.onCancel}>Cancel</button>
            </div>
        )
    }
}

export default CustomerForm
