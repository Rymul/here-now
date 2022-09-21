import { useHistory } from 'react-router-dom'
import blankProfilePic from '../../blank-profile-picture.svg'
import './EventsListItem.css'

const EventsListItem = ({event}) => {
    const history = useHistory();
    const handleClick = (e) => {
        e.preventDefaults()
        history.push(`/events/${event['_id']}`)
    }

    return(
        <>
            <div className="event-list-item-container" onClick={handleClick}>
                <div className="event-list-item-img">
                    {Object.values(event.attendees).map(attendee => (<img key={attendee._id} src={blankProfilePic}  />)) }
                </div>
                <div className="event-list-item-info">
                    <ul>
                        <li>{event.title}</li>
                        <li>{event.address}</li>
                        <li>{event.description}</li>
                        <li>{Object.values(event.attendees).length} people attending </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default EventsListItem;