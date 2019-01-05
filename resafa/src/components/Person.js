import React, { Component } from 'react';
import '../App.css';

class Person extends Component {
    render() {
        return (
            <p align="left">
                {this.props.person.name} is {this.props.person.age} and {this.props.person.sex === 'Male' ? 'he' : 'she' } is a {this.props.person.sex}
            </p>
        );
    }
}

export default Person;