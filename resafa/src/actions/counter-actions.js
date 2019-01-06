import constants from '../contants/counter-constants';
import dispatcher from '../dispatcher/dispatcher';

let incrementAction = {
    incrmentCount: (inc) =>{
        dispatcher.dispatch({
            type: constants.INCREMENT,
            inc: inc
        })
    }
}

export default incrementAction;

