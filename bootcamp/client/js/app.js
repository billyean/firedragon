// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import {CarTool} from './components/cartool';
// import {Car} from './model/car';

// 1. Peer function can't modify the parameters
// 2.
// 3.
// 4. Peer function only returns
// 5. Peer function can't mutate the state.


const createAddAction = value => ({type: 'ADD', value});
const createSubtractAction = value => ({type: 'SUBTRACT', value});
const createMultiplyAction = value => ({type: 'MULTIPLY', value});
const createDivideAction = value => ({type: 'DIVIDE', value});
const createModuloAction = value => ({type: 'MODULO', value});

// const nums = [
//     createAddAction(1),
//     createSubtractAction(2),
//     createMultiplyAction(3),
//     createDivideAction(4),
//     createModuloAction(5)
//     ];
//
// const initialState = 0;
//
// const sum = nums.reduce((state, action) => {
//     console.log('state: ', state, 'action: ', action.type)
//         switch (action.type) {
//             case 'ADD':
//                 return state + action.value;
//             case 'SUBTRACT':
//                 return state - action.value;
//             case 'MULTIPLY':
//                 return state * action.value;
//             case 'DIVIDE':
//                 return state / action.value;
//             case 'MODULO':
//                 return state % action.value;
//             default:
//                 return state;
//         }
//     }, 0);

const createStore = (reducer) => {
    let currentState = undefined;
    const subscriptions = [];

    return {
        getState: () => currentState,
        subscribe: cb => subscriptions.push(cb),
        dispatch: action => {
          currentState = reducer(currentState, action);
          subscriptions.forEach(cb => cb());
        },
    };
};

const initialState = 0;


const calcReducer = (state = {result: 0}, action) => {
    console.log('state: ', state, 'action: ', action.type)
        switch (action.type) {
            case 'ADD':
                return {...state, result: state.result + action.value};
            case 'SUBTRACT': {
                return Object.assign({}, state, { result: state.result - action.value});
                }
            case 'MULTIPLY':
                return {...state, result: state.result * action.value};
            case 'DIVIDE':
                return {...state, result: state.result / action.value};
            case 'MODULO':
                return {...state, result: state.result % action.value};
            default:
                return state;
        }
    };

const store = createStore(calcReducer);

// const bindActionCreators = (actionMap, dispatch) => {
//     const actions = {};
//     Object.keys(actionMap).forEach(actionKey => {
//             actions[actionKey] = (...value) => dispatch(actionMap[actionKey](...value));
//         });
//     return actions;
// };

const bindActionCreators = (actionMap, dispatch) => {

    const actions = {};

    Object.keys(actionMap).forEach(actionKey => {
        actions[actionKey] = (...value) => dispatch(actionMap[actionKey](...value));
    });

    return actions;
};

// const  actions = bindActionCreators({
//     add: createAddAction,
//     subtract: createSubtractAction,
//     multiply: createMultiplyAction,
//     divide: createDivideAction,
//     modulo: createModuloAction,
// });

const {add, subtract, multiply, divide, modulo} = bindActionCreators({
    add: createAddAction,
    subtract: createSubtractAction,
    multiply: createMultiplyAction,
    divide: createDivideAction,
    modulo: createModuloAction,
}, store.dispatch);

// actions.add(1);
// actions.subtract(2);
// actions.multiply(3);
// actions.divide(4);
// actions.modulo(5);

add(1);
subtract(2);
multiply(3);
divide(4);
modulo(5);

// store.dispatch(createAddAction(1));
// store.dispatch(createSubtractAction(2));
// store.dispatch(createMultiplyAction(3));
// store.dispatch(createDivideAction(4));
// store.dispatch(createModuloAction(5));
//
//
// store.subscribe(() => {
//    console.log(store.getState());
// });

console.log(store.getState());
// const ajax = new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.addEventListener('readystatechange', () => {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 resolve(xhr.responseText);
//             } else {
//                 reject(xhr.e);
//             }
//         }
//    });
//
//    // Post need set header
//    // false is synchorous call, default is true - asynchorous
//    xhr.open('GET', 'http://localhost:3010/cars');
//    xhr.send();
// });
//
// ajax.then((carList) => {
//     ReactDOM.render(<CarTool cars={JSON.parse(carList).map(j => new Car(j))}/>, document.querySelector('main'));
// });

// const carList = [
//     new Car({id: 1, make: 'Mercedes-Benz', model: 'G-CLASS SUV', year: 2009, colorHexCode: '#0084b4', price: 100000}),
//     new Car({id: 2, make: 'Toyota', model: 'Prius', year: 2015, colorHexCode: '#C0C0C0', price: 10000}),
//     new Car({id: 3, make: 'Chevy', model: 'Equinox', year: 2017, colorHexCode: '#000000', price: 30000}),
//     new Car({id: 4, make: 'Mazda', model: 'CX-5', year: 2012, colorHexCode: '#FF0000', price: 20000}),
// ];




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