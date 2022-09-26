import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useHistory, useParams } from 'react-router-dom';
import CommentsForm from '../Comments/CommentsForm';
import { deleteEvent, fetchEvent, updateEvent } from '../../store/events';
import './EventShow.css'
import EventShowMapWrapper from './EventsShowMapWrapper';
import CommentItem from '../Comments/CommentItem';




const EventShow = () => {
    const dispatch = useDispatch();
    const {eventId} = useParams();
    const event = useSelector(state=> state.events[eventId]);
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();
    const [latlng, ] = useState({lat:null, lng:null})
    const [attending, setAttending] = useState(false);
    const [photos, setPhotos] = useState([]);
    

    useEffect(()=>{
        dispatch(fetchEvent(eventId))
    },[eventId, dispatch])

    const initializeAttending = () => {
     if (event){
         const attendants = Object.values(event.attendees)
          if (attendants)  attendants.map( user => {
                if (user._id === sessionUser._id){
                    setAttending(true)
                } return null;
            })
     }
    }
    useEffect(()=> {
        initializeAttending();
        if (event && event.attendees){
            const attendees = Object.values(event.attendees);
            attendees.map(attendee => {
                if (attendee._id === event.owner._id) return null;
                const photoSources = photos;
                photoSources.push(attendee.photoUrl)
                setPhotos(photoSources)
                return null;
            })
            const photoSources = [...new Set(photos)].sort();
            setPhotos(photoSources)
        }
    },[event, dispatch])

    const handleDelete = (e) => {
        dispatch(deleteEvent(eventId)).then(res => history.push('/events'))
    }

    const handleAttend = (e) => {
        e.preventDefault();
        if (attending){
            delete event.attendees[sessionUser._id];
            setAttending(false)
            setPhotos([])
        } else{
            event.attendees[sessionUser._id] = sessionUser;
            setAttending(true)
        } 
        dispatch(updateEvent(event));
    }




    if (!event || !event.comments) return null;
    let eventTime = new Date(event.eventTime)
    
    return (
        <>
            <div className="event-show-outter-container">   
                <div className='event-show-attendees-outter-container'>
                    <div className='event-show-attendees-container'>
                        <div className='event-show-nonowner-container'>
                            <div className='show-attendees' id='event-show-owner'>
                                <div className='hover-text'>Event Organizer</div>
                                <img src={event.owner.photoUrl} className='event-show-attendee-photo' />
                            </div>

                            <div className='show-attendees'>
                                <img src={photos[0] || "/blank_user.png"} alt=""  id='attend-one' className='event-show-attendee-photo' />
                            </div>
                            <div className='show-attendees'>
                                <img src={photos[1] || "/blank_user.png" } alt="" id='attend-two' className='event-show-attendee-photo' />
                            </div>
                            <div className='show-attendees'>
                                <img src={photos[2] || "/blank_user.png" } alt="" id='attend-three' className='event-show-attendee-photo' />
                            </div>
                            <div className='show-attendees'>
                                <img src={photos[3] || "/blank_user.png" } alt="" id='attend-four' className='event-show-attendee-photo' />
                            </div>
                            <div className='show-attendees'>
                                <img src={photos[4] || "/blank_user.png" } alt="" id='attend-five' className='event-show-attendee-photo' />
                            </div>
                            <div className='show-attendees'>
                                <img src={photos[5] || "/blank_user.png" } alt="" id='attend-six' className='event-show-attendee-photo' />
                            </div>
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