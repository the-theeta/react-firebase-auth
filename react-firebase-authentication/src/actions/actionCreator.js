import * as types from './actionTypes'

export const addUser = user => ({
    type: types.ADD_USER,
    user
});

export const updateUser = user => ({
    type: types.UPDATE_USER,
    user
});

export const deleteUser = apiKey => ({
    type: types.DELETE_USER,
    apiKey
})