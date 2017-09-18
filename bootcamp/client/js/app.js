import * as React from 'react';
import * as ReactDOM from 'react-dom';

class PersonProfile extends React.Component {
    render() {
        // First element is either HTML tag, or other component
        // Second element is attribute of HTML or component
        // Third element is the content.
        //return React.createElement('h1', null, 'PersonProfile');
        return <article>
            <h1> Full Name: Lucy Chang </h1>
            <p>
                <img src='images/LucyChang.jpg'/>
            </p>
            <span>Birthday: <time dateTime="12-31"><img src='images/capricorn.png' height='20px' weight="'20px"/> 12/31</time></span>
            <p>Three interesting things:</p>
            <ul>
                <li> Been to 15 national parks.</li>
                <li>
                    <mark>Never had diet coke.</mark>
                </li>
                <li>More than 3 years in Intuit</li>
            </ul>
        </article>;
    }
}

ReactDOM.render(<PersonProfile/>, document.querySelector('main'));