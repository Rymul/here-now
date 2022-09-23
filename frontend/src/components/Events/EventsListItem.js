import { useHistory } from 'react-router-dom'
import blankProfilePic from '../../blank-profile-picture.svg'
import './EventsListItem.css'

const EventsListItem = ({event}) => {
    const history = useHistory();
    const handleClick = (e) => {
        history.push(`/events/${event._id}`)
    }

    let eventTime = new Date(event.eventTime)
    if (!event || !event.attendees) return null;
    return(
        <>
            <div className="event-list-item-container" id={event._id} onClick={handleClick}>
                <div className="event-list-item-img">
                    <img src="./ConservOfFlowers.jpg" alt="" />
                </div>
                <div className="event-list-item-info">
                    <ul>
                        <li className='event-list-item-title'>{event.title}</li>
                        <li className='event-list-item-address'><span>WHERE: </span>{event.address}</li>
                        <li className='event-list-item-when'><span>WHEN: </span>{`${(eventTime.getUTCHours() % 12) === 0 ? 12 : eventTime.getUTCHours() % 12}:${('0' + eventTime.getUTCMinutes()).slice(-2) } ${eventTime.getUTCHours() >=12 ? "PM" : "AM"}`}</li>
                        <li className='event-list-item-description'><span>WHAT: </span>{event.description}</li>
                        <li>{Object.values(event.attendees).length} attending </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default EventsListItem;