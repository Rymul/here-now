import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchEvent } from '../../store/events';
import './EventShow.css'
const EventShow = () => {
    const dispatch = useDispatch();
    const {eventId} = useParams();
    const event = useSelector(state=> state.events[eventId])

    useEffect(()=>{
        dispatch(fetchEvent(eventId))
    },[eventId])

    if (!event) return null;
    return (
        <>
            {console.log(event)}
            <div className="event-show-outter-container">
                <h1>Welcome to {event.owner.firstName}'s {event.title}</h1>
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

            </div>
        </>
    )
}

export default EventShow;