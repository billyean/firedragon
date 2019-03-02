import React from 'react';
import '../App.css';


// Functional way to present simple HTML
let Person = (props) => (
    <p align="left">
        {props.person.name} is {props.person.age} and {props.person.sex === 'Male' ? 'he' : 'she' } is a {props.person.sex}
    </p>
);

// class Person extends Component {
//     render() {
//         return (
//             <p align="left">
//                 {this.props.person.name} is {this.props.person.age} and {this.props.person.sex === 'Male' ? 'he' : 'she' } is a {this.props.person.sex}
//             </p>
//         );
//     }
// }

export default Person;