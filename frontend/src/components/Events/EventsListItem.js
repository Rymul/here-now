import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import blankProfilePic from '../../blank-profile-picture.svg'
import { BsCheckCircleFill } from 'react-icons/bs'
import './EventsListItem.css'

const EventsListItem = ({event}) => {
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    // const attenders = Object.values(event.attendees)
    // Object.values(event.attendees).map(person => {
    //     console.log(person._id === sessionUser._id, "ATTEDNING THSI EFNTON")
    // })

    const handleClick = (e) => {
        history.push(`/events/${event._id}`)
    }
    // console.log(new Date().toLocaleDateString())
    let eventTime = new Date(event.eventTime)
    // console.log(eventTime.toLocaleDateString(), "EVENT")
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
                        { new Date().toLocaleDateString().slice(2,4) - eventTime.toLocaleDateString().slice(2,4) === 0 ? 
                            <li className='event-list-item-when'><span>WHEN: </span>Today at {`${(eventTime.getUTCHours() % 12) === 0 ? 12 : eventTime.getUTCHours() % 12}:${('0' + eventTime.getUTCMinutes()).slice(-2) } ${eventTime.getUTCHours() >=12 ? "PM" : "AM"}`}</li>
                        :  
                            <li className='event-list-item-when'><span>WHEN: </span>Tomorrow at {`${(eventTime.getUTCHours() % 12) === 0 ? 12 : eventTime.getUTCHours() % 12}:${('0' + eventTime.getUTCMinutes()).slice(-2) } ${eventTime.getUTCHours() >=12 ? "PM" : "AM"}`}</li>
                        }
                        <li className='event-list-item-description'><span>WHAT: </span>{event.description}</li>
                        <div className='event-list-item-attendees-container'>
                            <li className='event-list-item-attendees'>{Object.values(event.attendees).length} attending </li>
                            {Object.values(event.attendees).map(person => {
                                if (person._id === sessionUser._id) return <div className='attending-icon-container'><p className='event-list-item-you-attending'>Attending</p> <BsCheckCircleFill className='attending-icon'/></div>
                            })}
                        </div>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default EventsListItem;