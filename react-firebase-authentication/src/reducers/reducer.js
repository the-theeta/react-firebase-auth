import {ADD_USER, UPDATE_USER, DELETE_USER} from '../actions/actionTypes'

const user = (state={}, action) => {
    switch (action.type){
        case ADD_USER:
            return{
                action.user.map(user => user.apiKey)
            }
    }
}