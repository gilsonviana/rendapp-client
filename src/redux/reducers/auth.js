import { USER_AUTH } from '../actions/types'

const initialState = {
    isUserAuthenticated: false
}

export default function auth(state = initialState, action) {
    switch (action.type) {
        case USER_AUTH:
            return action.payload
        default:
            return state
    }
}