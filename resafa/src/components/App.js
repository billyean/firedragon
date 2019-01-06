import React, {Component} from 'react';
// import {NavLink} from 'react-router-dom';
// import {Link} from 'react-router-dom';
import '../App.css';

// class X extends Component {
//   render() {
//     return (<p>Just a test</p>);
//   }
// }


class App extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(
            <div>
                <header>
                    <nav>
                        <a href='/people'>People</a>
                        <a href='/books'>Books</a>
                        {/*Trying to figure out why below is not working*/}
                        {/*<NavLink to='/people'>People</NavLink>*/}
                        {/*<NavLink to='/books'>Books</NavLink>*/}
                    </nav>
                </header>
                {this.props.children}
            </div>
        );
    }
}

export default App;
