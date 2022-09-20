import jwtFetch from "./jwt"


//action creator types
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'
const SET_EVENT = 'SET_EVENT'
// export const RECEIVE_COMMENTS = 'comments/RECEIVE_COMMENTS'



//action creators

const makeComment = payload => {

   return (
    {
    type: CREATE_COMMENT,
    payload
    }
    
    )
}

const changeComment = payload => {
    return (
        {
            type: UPDATE_COMMENT,
            payload
        }
    )
}

const removeComment = payload => {
    return (
        {
            type: REMOVE_COMMENT,
            payload
        }
    )
}

//thunk action creators

export const deleteComment = (commentId) => async dispatch => {
    const res = await jwtFetch(`/api/comments/${commentId}`, {
        method: "DELETE"
    })
    dispatch(removeComment(commentId));
}

export const createComment = comment => async dispatch => {
    const res = await jwtFetch(`/api/comments`, {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
            "Content-Type": "application/json",
            "Accepted": "application/json"
        }
    })

    if (res.ok) {
    const payload = await res.json();
    dispatch(makeComment(payload));
    }
}


export const updateComment = comment => async dispatch => {
    const res = await jwtFetch(`/api/comments/${comment.id}`, {
        method: "PATCH",
        body: JSON.stringify(comment),
        headers: {
            "Content-Type": "application/json",
            "Accepted": "application/json"
        }
    })
    
    if (res.ok) {
        const payload = await res.json();
        dispatch(changeComment(payload.comment));
    }
}

window.createComment = createComment;
window.updateComment = updateComment;
window.deleteComment = deleteComment;






const commentsReducer = (state = {}, action) => {

    return state
}

export default commentsReducer;