import jwtFetch from './jwt';
import { updatePayload } from "../utils/utils"
import { RECEIVE_USER_LOGOUT } from './session';

export const RECEIVE_USER = "users/RECEIVE_USER";
export const RECEIVE_USERS = "users/RECEIVE_USERS";
export const REMOVE_USER = "users/REMOVE_USER";

const addUser = user => {
    return {
        type: RECEIVE_USER,
        payload: user
    }
};

const addUsers = users => {
    return {
        type: RECEIVE_USERS,
        payload: users
    }
};

const removeUser = userId => {
    return {
        type: REMOVE_USER,
        payload: userId
    }
}

export const getUser = userId => state => {
    if (!state) {
        return null;
    } else if (!state.users) {
        return null;
    } else {
        return state.users[userId];
    }
}

export const getUsers = state => {
    if (!state) {
        return [];
    } else if (!state.users) {
        return [];
    } else {
        return Object.values(state.users);
    }
}


export const fetchUser = (userId) => async dispatch => {
    const res = await fetch(`/api/users/${userId}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    if (res.ok) {
        const user = await res.json();
        dispatch(addUser(user));
    }
}


export const fetchUsers = () => async dispatch => {
    const res = await fetch(`/api/users`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    if (res.ok) {
        const users = await res.json();
        dispatch(addUsers(updatePayload(users)));
    }
}


export const updateUser = (user) => async dispatch => {

    const res = await jwtFetch(`/api/users/${user._id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(user)
    });
    const data = await res.json();

    dispatch(addUser(data));

    return res;
}


export const deleteUser = (userId) => async dispatch => {
    const res = await jwtFetch(`/api/users/${userId}`, {
        method: 'DELETE',
    });
    // const data = await res.json();
    dispatch(removeUser(userId));
    return res;
}




const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = { ...state }
    let userId;
    switch (action.type) {
        case RECEIVE_USER:
            const user = action.payload;
            // 
            newState[user._id] = user;
            return newState;
        case RECEIVE_USERS:
            const users = action.payload;
            return { ...newState, ...users }
        case REMOVE_USER:
            userId = action.payload;
            delete newState[userId];
            return newState;
        // case RECEIVE_USER_LOGOUT:
        //     return {};
        default:
            return state;
    }
}

export default usersReducer;