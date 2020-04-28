import * as types from './actionTypes'

export const authUserSet = user => ({
    type: types.AUTH_USER_SET,
    user
});

export const addUserSet = user => ({
    type: types.ADD_USER_SET,
    user
});

export const updateUserSet = apiKey => ({
    type: types.UPDATE_USERS_SET,
    apiKey
})