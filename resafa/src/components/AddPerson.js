import React, { Component } from 'react';
import '../App.css';

class AddPerson extends Component {
    constructor(props) {
        super(props);
        this.addHandler = props.addHandler;
        this.state = {
            hideAdd: true,
            person : {
                name: '',
                age: '0',
                sex: 'Male'
            }
        }
        this.addHaibo = this.addHaibo.bind(this);
        this.add = this.add.bind(this);
        this.handleUpadete = this.handleUpadete.bind(this);
    }

    add() {
        this.addHandler(this.state.person);
        this.setState({
            hideAdd: true,
            person : {
                name: '',
                age: '0',
                sex: ''
            }
        });
    }

    addHaibo(e) {
        this.setState({
            'hideAdd': false
        });
    }

    handleUpadete(e) {
        console.log(e.target.name);
        let p = this.state.person;
        switch(e.target.name) {
            case "name":
                p.name = e.target.value;
                break;
            case "age":
                p.age = e.target.value;
                break;
            case "sex":
                p.sex = e.target.value;
                break;
        }
        this.setState({person: p});
    }

    render() {
        return(
            <div>
                <button onClick={this.addHaibo} align ="left">Add Haibo</button>
                <div hidden={this.state.hideAdd}>
                    <p align ="left">
                        Name:  <input type='text' name='name' value={this.state.person.name} onChange={this.handleUpadete}></input>
                    </p>
                    <p align ="left">
                        Age:  <input type='number' name='age' min='0' max='100' value={this.state.person.number} onChange={this.handleUpadete}></input>
                    </p>
                    <p align ="left">
                        Sex:
                        <select name="sex" onChange={this.handleUpadete}>
                            <option value='Male' selected={this.state.person.sex === 'Male'}>Male</option>
                            <option value='Female'  selected={this.state.person.sex === 'Male'}>Female</option>
                        </select>
                    </p>
                    <p align ="left">
                        <button onClick={this.add}>New</button>
                    </p>
                </div>
            </div>
        );
    }
}

export default AddPerson;