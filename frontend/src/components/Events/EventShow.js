import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { deleteEvent, fetchEvent } from '../../store/events';
import { handleAttend } from '../../utils/utils';
import CommentsForm from '../Comments/CommentsForm';
import './EventShow.css'
const EventShow = () => {
    const dispatch = useDispatch();
    const {eventId} = useParams();
    const event = useSelector(state=> state.events[eventId])
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();
    
    useEffect(()=>{
        dispatch(fetchEvent(eventId))
    },[eventId])

    const handleDelete = (e) => {
        dispatch(deleteEvent(eventId)).then(res => history.push('/events'))
    }
    
    
    if (!event) return null;
    let eventTime = new Date(event.eventTime)

    return (
        <>
            {console.log(event)}
            {console.log(event.owner.firstName)}
            <div className="event-show-outter-container">
                <h1>Welcome to {event.owner.firstName}'s {event.title}</h1>
                <div className='event-show-left'>
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
                    <div className='event-show-details'>
                        <h1 id="event-show-title">Welcome to {event.owner.firstName}'s {event.title}</h1>
                        <div className='event-show-details-left'>
                            <p id="">WHERE:</p>
                            <p>WHEN:</p>
                            <p>WHAT:</p>
                        </div>
                        <div className='event-show-details-right'>
                            <p id="event-show-location">{event.address}</p>
                            <p id="event-show-time">{`${(eventTime.getUTCHours() % 12) === 0 ? 12 : eventTime.getUTCHours() % 12}:${('0' + eventTime.getUTCMinutes()).slice(-2) } ${eventTime.getUTCHours() >=12 ? "PM" : "AM"}`}</p>
                            <p id="event-show-description">{event.description}</p>
                        </div>
                    </div>
                    <div className='event-show-buttons'>
                        <div className='event-show-attend'>
                            <input
                                onClick={handleAttend}
                                id="event-show-attend-button"
                                type="button"
                                value="Attend"
                            />
                        </div>
                        <div className='event-show-cancel-event'>
                            <input
                                onClick={handleDelete}
                                id="event-show-delete-button"
                                type="button"
                                value="Cancel Event"
                            /> 
                        </div>
                    </div>
                    <div className='event-show-comments'>
                        <CommentsForm event={event}/>
                        {Object.values(event.comments).map(comment =>{
                            {!comment._id ? null :
                            <div id="event-show-single-comment" key={comment._id}>
                                <p>{comment.commenter.firstName} {comment.commenter.lastName[0]}.</p>     
                                <p>{comment.body}</p>
                            </div>
                            }
                        })}

                    </div>
                </div>
                <div className='event-show-right'>
                <p>MAPS</p>
                </div>
            </div>
        </>
    )
}

export default EventShow;