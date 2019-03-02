import {INCREMENT_COUNT} from '../contants/actionType'

let initialCount = 0

export default function reducer(state = initialCount, action) {
    switch (action.type) {
        case INCREMENT_COUNT:
            return state + 1
        default:
            return state
    }
}