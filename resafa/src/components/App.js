import React, {Component} from 'react';
// import {NavLink} from 'react-router-dom';
// import {Link} from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

// class X extends Component {
//   render() {
//     return (<p>Just a test</p>);
//   }
// }

// const style = {
//     background: 'blue',
//     width: '400px',
//     color: 'red'
// };

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from '../reducers/counter-reducer'

let store = createStore(reducer)

class App extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/people">People</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/books">Books</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/counter">Counter</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/compute">Compute</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/reduxcounter">Redux Counter</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                {/*<header>*/}
                    {/*<nav>*/}
                        {/*<span style={style}><a href='/people'>People</a></span>*/}
                        {/*<span style={style}><a href='/books'>Books</a></span>*/}
                        {/*<span style={style}><a href='/counter'>Counter</a></span>*/}
                        {/*<span style={style}><a href='/compute'>Compute</a></span>*/}

                    {/*</nav>*/}
                {/*</header>*/}
                <Provider store={store}>
                    { this.props.children }
                </Provider>
            </div>
        );
    }
}

export default App;
