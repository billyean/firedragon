import React, {Component} from 'react'
import CustomerDetail from './CustomerDetail'
import CustomerForm from './CustomerForm'


class Customers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            customers: [{
                id: 1,
                first_name: 'Haibo',
                last_name: 'Yan',
                gender: 'Male',
                email: 'tristan.yim@gmail.com',
                tel: '(925)351-5817'
            },{
                id: 2,
                first_name: 'Zachary',
                last_name: 'Yan',
                gender: 'Male',
                email: 'zachary.yan@gmail.com',
                tel: '(925)351-5818'
            },{
                id: 3,
                first_name: 'Tina',
                last_name: 'Luo',
                gender: 'Female',
                email: 'dinaloue@gmail.com',
                tel: '(408)828-3779'
            }],
            onCustomer : {
                id: '',
                first_name: '',
                last_name: '',
                gender: '',
                email: '',
                tel: ''
            },
            op: ''
        }

        this.deleteCustomer = this.deleteCustomer.bind(this)
        this.updateCustomerForm = this.updateCustomerForm.bind(this)
        this.createCustomerForm = this.createCustomerForm.bind(this)
        this.cancelForm = this.cancelForm.bind(this)
        this.updateCustomer = this.updateCustomer.bind(this)
        this.newCustomer = this.newCustomer.bind(this)
    }

    deleteCustomer (id) {
        let customers = this.state.customers.filter(c => c.id !== id)
        this.setState({
            customers: customers
        })
    }

    updateCustomerForm (customer) {
        this.setState({
            onCustomer: customer,
            op: 'update'
        })
    }

    createCustomerForm() {
        let nextId = Math.max(...this.state.customers.map(c => c.id)) + 1
        this.setState({
            onCustomer: {
                id: nextId,
                first_name: '',
                last_name: '',
                gender: '',
                email: '',
                tel: ''
            },
            op: 'new'
        })
    }

    cancelForm() {
        this.setState({op: ''
        })
    }

    updateCustomer (customer) {
        let customers = this.state.customers.map(c => c.id === customer.id ? customer : c)
        this.setState({
            customers: customers,
            op: ''
        })
    }

    newCustomer (customer) {
        let customers = [...this.state.customers, customer]
        this.setState({
            customers: customers,
            op: ''
        })
    }



    render() {
        let customers = this.state.customers.map((customer, index) => {
            return (<CustomerDetail key={customer.id} customer={customer} deleteHandler={this.deleteCustomer} updateHandler={this.updateCustomerForm} />)
        })

        let onCustomer = this.state.op === '' ? "" : this.state.op === 'update' ?
            (<CustomerForm customer={this.state.onCustomer} op='update' addHandler={this.newCustomer} updateHandler={this.updateCustomer} cancelHandler={this.cancelForm} />) :
            (<CustomerForm customer={this.state.onCustomer} op='new' addHandler={this.newCustomer} updateHandler={this.updateCustomer} cancelHandler={this.cancelForm} />)

        return (<div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Tel</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers}
                    </tbody>
                </table>
                <p><button onClick={this.createCustomerForm}>Create a new customer</button></p>
                {onCustomer}
            </div>
        )
    }
}

export default Customers;
