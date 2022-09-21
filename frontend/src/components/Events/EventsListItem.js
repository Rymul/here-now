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
                    <img src="./ConservOfFlowers.jpg" alt="" />
                </div>
                <div className="event-list-item-info">
                    <ul>
                        <li className='event-list-item-title'>{event.title}</li>
                        <li className='event-list-item-address'>{event.address}</li>
                        <li className='event-list-item-description'>{event.description}</li>
                        <li>{Object.values(event.attendees).length} people attending </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default EventsListItem;