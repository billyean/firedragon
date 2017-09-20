import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {CarTool} from './components/cartool';
import {Car} from './model/car';

const carList = [
    new Car({id: 1, make: 'Toyota', model: 'Prius', year: 2015, colorHexCode: '#C0C0C0', price: 10000}),
    new Car({id: 2, make: 'Chevy', model: 'Equinox', year: 2017, colorHexCode: '#000000', price: 30000}),
    new Car({id: 3, make: 'Mazda', model: 'CX-5', year: 2012, colorHexCode: '#FF0000', price: 20000})
];

ReactDOM.render(<CarTool cars={carList}/>, document.querySelector('main'));


// import '../scss/styles.scss';
// class PersonProfile extends React.Component {
//     render() {
//         // First element is either HTML tag, or other component
//         // Second element is attribute of HTML or component
//         // Third element is the content.
//         //return React.createElement('h1', null, 'PersonProfile');
//         return <article>
//             <h1 className="pageTile"> Full Name: Lucy Chang </h1>
//             <div>
//                 <section>Birthday: <time dateTime="12-31"><img src='images/capricorn.png' height='20px' weight='20px'/> 12/31</time></section>
//                 <section>School: University of Penn</section>
//             </div>
//             <div className="devRight">
//                 <img className="" src='images/LucyChang.jpg'/>
//             </div>
//             <div className="pullLeft">
//                 <p>Three interesting things:</p>
//                 <ul>
//                     <li className={'critical'}> Been to 15 national parks.</li>
//                     <li>
//                         <mark>Never had diet coke.</mark>
//                     </li>
//                     <li>More than 3 years in Intuit</li>
//                 </ul>
//             </div>
//             <div className="pullLeft">
//                 <span>Quote: Stay hungry, stay foolish</span>
//             </div>
//         </article>;
//         // return <div>
//         //     <div className="pullLeft">Barcelona is the best at soccer.</div>
//         //     <div className="pullCenter">US soccer team is OK.</div>
//         //     <div>China soccer team sucks</div>.
//         //     <p className='clearLeft'>
//         //         I want to flash or blink the border of a particular div when the user mouse over an element and stop flashing when mouse out. I have several elements that can user user mouseover. I need to flash the div every time when the user mouse over.
//         //     </p>
//         // </div>;
//
//     }
// }
//
// ReactDOM.render(<PersonProfile/>, document.querySelector('main'));