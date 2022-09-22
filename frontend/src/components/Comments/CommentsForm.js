import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createComment } from '../../store/comments';
import { fetchEvent, updateEvent } from '../../store/events';
import './CommentsForm.css'


const CommentsForm = ({event}) => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    // const { eventId } = useParams(); /////
    const [body, setBody] = useState();
    // const event = useSelector(state => state.events) /////
    const eventId = event._id

    useEffect(()=> {
        dispatch(fetchEvent(eventId))
    },[eventId])

    const handleSubmit = (e) => {
        e.preventDefault();
        const commenter = sessionUser
        const comment = {
            body,
            commenter
    };

        let commentId;
        let commentData;
        let updatedEvent = event
        updateEvent["comments"] = "hello"
        dispatch(createComment(comment)).then(res => {
            commentId = res._id
            commentData = res
        }).then(res => {
            debugger
            updatedEvent.comments[commentId] = commentData
            dispatch(updateEvent(updatedEvent))
        })
    }

    const handleChange = (e) => {
        setBody(e.target.value)
    }
    if (!event) return null
    return (
        <div className='comments-form-container'>
            <div className='comment-body-div'>
                <form onSubmit={handleSubmit} className="comments-form">
                    <input 
                        id="comment-body-input"
                        type="text"
                        value={body}
                        placeholder="Enter a comment"
                        onChange={handleChange}
                    />
                    <input 
                        type="submit" 
                        value="Create Comment"
                        id="comment-form-submit-button"
                        disabled={!body}
                    />
                </form>
            </div>
        </div>
    )
}

export default CommentsForm;