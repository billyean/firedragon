 import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import People from './components/People'
import Counter from './components/Counter'
import Books from './components/Books'
import Compute from './components/Compute'
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render((
    <App>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={People}/>
                <Route path='/people' component={People}/>
                <Route path='/books' component={Books}/>
                <Route path='/counter' component={Counter}/>
                <Route path='/compute' component={Compute}/>
            </Switch>
        </BrowserRouter>
    </App>), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
