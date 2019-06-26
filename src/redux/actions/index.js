import * as types from './types'

export const login = (username, password) => {    
    return {
        type: types.USER_AUTH,
        payload: {
            isUserAuthenticated: true
        }
    }
}