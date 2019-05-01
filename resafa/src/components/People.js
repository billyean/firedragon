import React, {Component} from 'react';
import '../css/App.css';
import Person from './Person';
import AddPerson from './AddPerson';

class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [
                {name: 'Tristan', age: 0, sex: 'Male'},
                {name: 'Zachary', age: 3, sex: 'Male'},
                {name: 'Ruby', age: 17, sex: 'Female'},
                {name: 'Tina', age: 38, sex: 'Female'}]
        };

        this.add = this.add.bind(this);
    }

    // This need to be here since fetch is async call, which should not be in constructor
    componentDidMount() {
        fetch("http://localhost:9999/profiles")
            .then(res => res.json())
            .then(data => this.setState({
                people: [...this.state.people, ...data]
            }))
            .catch(err => console.log(err));
    }

    add(p) {
        this.setState({
            'people': [...this.state.people, p]
        })
    }


    render() {
        let people = this.state.people.map((p, index) => {
            return (<section key={index}>
                <Person person={p}></Person>
            </section>);
        });
        return (
            <div className="App">
                <section>
                    {people}
                </section>
                {/*<header className="App-header">*/}
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                {/*<p>*/}
                {/*Edit <code>src/App.js</code> and save to reload.*/}
                {/*</p>*/}
                {/*{React.createElement('a', {className:'App-link', href: 'https://reactjs.org', target: '_blank', rel: 'noopener noreferrer'}, 'Learn React')}*/}
                {/*{ // it's ok we can use javascript to create tag*/}
                {/*/*  <a*/}
                {/*className="App-link"*/}
                {/*href="https://reactjs.org"*/}
                {/*target="_blank"*/}
                {/*rel="noopener noreferrer"*/}
                {/*>*/}
                {/*Learn React*/}
                {/*</a> *!/*/}
                {/*<X></X>*/}
                {/*</header>*/}
                <AddPerson addHandler={this.add}/>
            </div>
        );
    }
}

export default People;
