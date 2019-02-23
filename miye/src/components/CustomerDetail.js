import React, {Component} from 'react';

class CustomerDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.id,
            first_name: props.first_name,
            last_name: props.last_name,
            gender: props.gender,
            email: props.email,
            tel: props.tel
        }
        this.deleteCustomer = props.deleteCustomer
        this.updateCustomer = props.updateCustomer

        this.onDelete = this.onDelete.bind(this)
        this.onUpdate = this.onUpdate.bind(this)
    }

    onDelete() {
        this.deleteCustomer(this.state.id)  ;
    }

    onUpdate() {
        this.updateCustomer(this.state.id)  ;
    }

    render() {
        return (<tr>
                <td>this.state.first_name this.state.last_name</td>
                <td>this.state.gender</td>
                <td>this.state.tel</td>
                <td>this.state.email</td>
                <td><button onClick={this.onDelete}>Delete</button><button onClick={this.onUpdate}>Update</button></td>
            </tr>
        )
    }
}

export default CustomerDetail;
