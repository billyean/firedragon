import React, {Component} from 'react';

class CustomerDetail extends Component {
    constructor(props) {
        super(props)
        this.onDelete = this.onDelete.bind(this)
        this.onUpdate = this.onUpdate.bind(this)
    }

    onDelete() {
        this.props.deleteHandler(this.props.customer.id)  ;
    }

    onUpdate() {
        this.props.updateHandler(this.props.customer)  ;
    }

    render() {
        return (<tr>
                <td>{this.props.customer.first_name} {this.props.customer.last_name}</td>
                <td>{this.props.customer.gender}</td>
                <td>{this.props.customer.email}</td>
                <td>{this.props.customer.tel}</td>
                <td><button onClick={this.onDelete}>Delete</button><button onClick={this.onUpdate}>Update</button></td>
            </tr>
        )
    }
}

export default CustomerDetail;
