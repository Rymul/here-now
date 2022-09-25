import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { deleteEvent, fetchEvent, updateEvent } from '../../store/events';
import { AiOutlineDelete } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'
import { createdAgoTimeParser } from '../../utils/utils';
import { updateComment } from '../../store/comments';

const CommentItem = ({comment})=>{
    const dispatch = useDispatch();
    const {eventId} = useParams();
    const event = useSelector(state=> state.events[eventId])
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();
    const [latlng, setLatLng] = useState({lat:null, lng:null})
    const [edit, setEdit] = useState(false)
    const [commentData,setCommentData] = useState('')
    const [attending, setAttending] = useState(false);
    const [editId, setEditId] = useState();
    

    useEffect(()=>{
        dispatch(fetchEvent(eventId))
 
    },[eventId])

    const initializeAttending = () => {
     if (event){
         const attendants = Object.values(event.attendees)
          if (attendants)  attendants.map( user => {
                if (user._id === sessionUser._id){
                    setAttending(true)
                }
            })
     }
    }
    useEffect(()=> {
        initializeAttending();
    },[event])

    const handleDelete = (e) => {
        dispatch(deleteEvent(eventId)).then(res => history.push('/events'))
    }

    const handleAttend = (e) => {
        e.preventDefault();
        if (attending){
            delete event.attendees[sessionUser._id];
            setAttending(false)
        } else{
            event.attendees[sessionUser._id] = sessionUser;
            setAttending(true)
        } 
        dispatch(updateEvent(event));
    }

    const handleCommentEditButton = (e, comment) => {
        setEdit(true)
        setEditId(e.target.id)
        setCommentData(comment.body)
    }
    
   
    const handleButton = (comment, body = 'Deleted comment') => {
        comment.body = body
        let commentId;
        let commentData;
        let updatedEvent = event;
        dispatch(updateComment(comment)).then(res => {
            commentId = res._id;
            commentData = res;
        }).then(res => {
            updatedEvent.comments[commentId] = commentData;
            dispatch(updateEvent(updatedEvent));
        })
    }

    const commentEditSubmit = (e, comment) => {
        e.preventDefault();
        handleButton(comment, commentData);
        setEdit(false);
    }
    
    
    if (!event || !event.comments) return <h1>No comments on this event, delete it</h1> ;
    let eventTime = new Date(event.eventTime)

    return(
        <>
            {(comment !== 'test') ?  
            
                                <div id="event-show-single-comment" key={comment._id}>
                                   <Link to={`/users/${comment.commenter._id}`} id='commenter'><p id='commenter'>{comment.commenter.firstName} {comment.commenter.lastName[0]}.</p>  </Link> 
                                    {edit && comment.commenter._id === sessionUser._id && editId === comment._id ? 
                                        <form id='event-show-comments-form' onSubmit={(e)=>commentEditSubmit(e, comment)}>
                                            <input id='comment-body-input' type="text" value={commentData} onChange={(e)=>setCommentData(e.target.value)}  /> 
                                        </form>
                                        : 
                                        <p id='comment-body'>{comment.body}</p>
                                    }

                                    <p id='comment-time'>{createdAgoTimeParser(comment.createdAt)} ago</p>
                                    
                                    {sessionUser._id === comment.commenter._id && comment.body !== 'Deleted comment' ? 
                                        <div id="event-show-edit">
                                            {edit ? null :
                                                <button className='transparent-button' id={comment._id} value={comment._id} onClick={(e)=> handleCommentEditButton(e, comment)}>
                                                    <BiEdit id='event-show-edit-button' />
                                                </button>
                                            }
                                            {edit ? null :
                                                <button className='transparent-button' onClick={()=> handleButton(comment)}>
                                                    <AiOutlineDelete id='event-show-delete-button' />
                                                </button>
                                             }
                                        </div>
                                    : null}

                                </div>
            : null}  
        </>
    )
}

export default CommentItem;