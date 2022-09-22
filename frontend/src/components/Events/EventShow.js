import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import CommentsForm from '../Comments/CommentsForm';
import { deleteEvent, fetchEvent, updateEvent } from '../../store/events';

import './EventShow.css'
import EventsIndexMapWrapper from './EventsIndexMapsWrapper';
const EventShow = () => {
    const dispatch = useDispatch();
    const {eventId} = useParams();
    const event = useSelector(state=> state.events[eventId])
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();
    const [latlng, setLatLng] = useState({lat:null, lng:null})
    

    useEffect(()=>{
        dispatch(fetchEvent(eventId))
    },[eventId])

    const handleDelete = (e) => {
        dispatch(deleteEvent(eventId)).then(res => history.push('/events'))
    }

    const handleAttend = (e) => {
        e.preventDefault();
        event.attendees[sessionUser._id] = sessionUser;
        dispatch(updateEvent(event));
    }
    
    
    if (!event) return null;
    let eventTime = new Date(event.eventTime)

    return (
        <>
            {/* {console.log(event)}
            {console.log(event.owner.firstName)} */}
            <div className="event-show-outter-container">
                {/* <h1>Welcome to {event.owner.firstName}'s {event.title}</h1> */}
                
                <div className='event-show-attendees-outter-container'>
                    <div className='event-show-attendees-container'>
                        {/* <div className='event-show-owner-container'> */}
                        {/* </div> */}
                        <div className='event-show-nonowner-container'>
                            <div className='show-attendees' id='event-show-owner'>
                                <div className='hover-organizer'>  </div>
                                <div className='hover-text'>Organizer</div>
                                <img src="/male-profile-picture.jpeg" className='event-show-attendee-photo' />
                            </div>

                            <div className='show-attendees'>
                                <img src="/male-profile-picture.jpeg" className='event-show-attendee-photo' />
                            </div>
                            <div className='show-attendees'>
                                <img src="/male-profile-picture.jpeg" className='event-show-attendee-photo' />
                            </div>
                            <div className='show-attendees'>
                                <img src="/demoprofpic.png" className='event-show-attendee-photo' />
                            </div>
                            <div className='show-attendees'>
                                <img src="/male-profile-picture.jpeg" className='event-show-attendee-photo' />
                            </div>
                            <div className='show-attendees'>
                                <img src="/male-profile-picture.jpeg" className='event-show-attendee-photo' />
                            </div>
                            <div className='show-attendees'>
                                <img src="/male-profile-picture.jpeg" className='event-show-attendee-photo' />
                            </div>
                        </div>
                    </div>
                </div>
                <h1 id="event-show-title">Welcome to {event.owner.firstName}'s {event.title}</h1>
                <div className='event-show-page-splitter-parent'>
                <div className='event-show-page-splitter'>
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
                                <input
                                    onClick={handleAttend}
                                    id="event-show-button"
                                    type="button"
                                    value="Attend"
                                />
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
                            {Object.values(event.comments).map(comment =>{
                                if (comment !== 'test') { return (
                                <div id="event-show-single-comment" key={comment._id}>
                                    {console.log(comment.commenter.firstName)}
                                    <p id='commenter'>{comment.commenter.firstName} {comment.commenter.lastName[0]}.</p> 
                                    <p id='comment-body'>{comment.body}</p>
                                </div>
                            
                            )}})}

                        </div>
                    </div>
                    <div className='event-show-right'>
                        {/* <div className='event-show-map-container'> */}
                            <EventsIndexMapWrapper apiKey={process.env.MAPS_API_KEY} latlng={latlng}/>
                        {/* </div> */}
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default EventShow;