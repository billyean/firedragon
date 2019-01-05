import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';
import Person from './Person';
import AddPerson from './AddPerson';

// class X extends Component {
//   render() {
//     return (<p>Just a test</p>);
//   }
// }





class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
        'people' : [
            {name: 'Tristan', age: 0, sex: 'Male'},
            {name: 'Zachary', age: 3, sex: 'Male'},
            {name: 'Ruby', age: 17, sex: 'Female'},
            {name: 'Tina', age: 38, sex: 'Female'}]
    };

    this.add = this.add.bind(this);
  }

  add(p) {
      console.log(`add person name ${p.name}`);
      this.setState({
          'people' : [...this.state.people, p]
      })
  }



  render() {
    let people = this.state.people.map(p => {
      return (<section>
        <Person person = {p}></Person>
      </section>);
    });
    return (
      <div className="App">
        <sections>
          {people}
        </sections>
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

export default App;
