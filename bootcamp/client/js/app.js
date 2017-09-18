import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../scss/styles.scss';

class PersonProfile extends React.Component {
    render() {
        // First element is either HTML tag, or other component
        // Second element is attribute of HTML or component
        // Third element is the content.
        //return React.createElement('h1', null, 'PersonProfile');
        return <article>
            <h1 className="pageTile"> Full Name: Lucy Chang </h1>
            <img className="borderBlink" src='images/LucyChang.jpg'/>
            <br/>
            <span>Birthday: <time dateTime="12-31"><img src='images/capricorn.png' height='20px' weight='20px'/> 12/31</time></span>
            <div>
            <p>Three interesting things:</p>
            <ul>
                <li className={'critical'}> Been to 15 national parks.</li>
                <li>
                    <mark>Never had diet coke.</mark>
                </li>
                <li>More than 3 years in Intuit</li>
            </ul>
            </div>
        </article>;
    }
}

ReactDOM.render(<PersonProfile/>, document.querySelector('main'));