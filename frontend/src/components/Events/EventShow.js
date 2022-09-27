import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import CommentsForm from '../Comments/CommentsForm';
import { deleteEvent, fetchEvent, updateEvent } from '../../store/events';
import { AiOutlineDelete } from 'react-icons/ai'
import { FiUserPlus } from 'react-icons/fi'
import './EventShow.css'
import EventShowMapWrapper from './EventsShowMapWrapper';
import { createdAgoTimeParser } from '../../utils/utils';
import { updateComment } from '../../store/comments';
import CommentItem from '../Comments/CommentItem';



const EventShow = () => {
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
    let attendees;
    if (event) {attendees = Object.values(event.attendees)}

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
    
    return (
        <>
            <div className="event-show-outter-container">   
                <div className='event-show-attendees-outter-container'>
                    <div className='event-show-attendees-container'>
                        <div className='event-show-nonowner-container'>
                            <div className='show-attendees' id='event-show-owner'>
                                <div className='hover-text' onClick={()=> history.push(`/users/${event.owner._id}`)}>Event Organizer: {event.owner.firstName}</div>
                                <img src={event.owner.photoUrl ? event.owner.photoUrl : "/male-profile-picture.jpeg"} className='event-show-attendee-photo' />
                            </div>
                            {attendees ? attendees.map((attendee, i) => ( attendee._id !== event.owner._id && i <= 6 ?
                            <div className='show-attendees'>
                                    <div className='hover-text' onClick={()=> history.push(`/users/${attendee._id}`)}>{attendee.firstName}</div>
                                    <img src={attendee.photoUrl ? attendee.photoUrl : "/male-profile-picture.jpeg"} className='event-show-attendee-photo' />
                            </div> : null
                            )) : null}

                            {sessionUser._id === event.owner._id || attending || attendees.length >= 6  ? null : 
                            <div className='show-attendees show-attendees-add' onClick={handleAttend}>
                                <FiUserPlus />
                            </div>}

                        </div>
                    </div>
                </div>
                <h1 id="event-show-title">Welcome to {event.owner.firstName}'s {event.title}</h1>
                <div className='event-show-page-splitter-parent'>
                <div className='event-show-page-splitter'>
                    <div className='event-show-right'>
                        <div className='event-show-map-container'>
                            <EventShowMapWrapper apiKey={process.env.MAPS_API_KEY} latlng={latlng} event={event}/>
                        </div>
                    </div>
                    <div className='event-show-left'>
                        <div className='event-show-details'>
                            <div className='event-show-details-left'>
                                <p id="event-show-details-left-text">WHERE:</p>
                                <p id="event-show-details-left-text">WHEN:</p>
                                <p id="event-show-details-left-text">WHAT:</p>
                            </div>
                            <div className='event-show-details-right'>
                                <p id="event-show-details-right-text">{event.address}</p>
                                <p id="event-show-details-right-text">{`${(eventTime.getUTCHours() % 12) === 0 ? 12 : eventTime.getUTCHours() % 12}:${('0' + eventTime.getUTCMinutes()).slice(-2) } ${eventTime.getUTCHours() >=12 ? "PM" : "AM"}`}</p>
                                <p id="event-show-details-right-text">{event.description}</p>
                            </div>
                        </div>
                        <div className='event-show-buttons'>
                            <div className='event-show-attend'>
                                

                            { sessionUser._id === event.owner._id ? null :
                                <input
                                    onClick={handleAttend}
                                    id="event-show-button"
                                    type="button"
                                    value= {attending ? 'Leave Event' : 'Attend Event'}
                                />
                            }
                            </div>
                            { sessionUser._id === event.owner._id ? 
                            <div className='event-show-cancel-event'>
                                <input
                                    onClick={handleDelete}
                                    id="event-show-button"
                                    type="button"
                                    value="Cancel Event"
                                /> 
                            </div>
                            : null }
                        </div>
                        <div className='event-show-comments'>
                            <CommentsForm id="event-show-comments-form" event={event}/>
                            {Object.values(event.comments).reverse().map(comment =>(
                                <CommentItem comment={comment} key={comment._id} />
                            ))}
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>
        </>
    )
}

export default EventShow;