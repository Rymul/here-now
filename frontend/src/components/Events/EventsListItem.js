import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import blankProfilePic from '../../blank-profile-picture.svg'
import { BsCheckCircleFill } from 'react-icons/bs'
import './EventsListItem.css'

const EventsListItem = ({event}) => {
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const today = new Date()
   
    const handleClick = (e) => {
        history.push(`/events/${event._id}`)
    }

    let eventTime = new Date(event.eventTime)

    if (!event || !event.attendees) return null;
    const todayDay = today.toLocaleDateString().slice(2,4)
    const eventTimeDay = eventTime.toLocaleDateString().slice(2,4)
    const dayDiff = todayDay - eventTimeDay
    
    return(
        <>
            <div className="event-list-item-container" id={event._id} onClick={handleClick}>
                <div className="event-list-item-img">
                    <img src={event.photoUrl} alt="" />
                </div>
                <div className="event-list-item-info">
                    <ul>
                        <li className='event-list-item-title'>{event.title}</li>
                        <li className='event-list-item-address'><span>WHERE: </span>{event.address}</li>
                        { dayDiff === 0 ? 
                            <li className='event-list-item-when'><span>WHEN: </span>Today at {`${(eventTime.getUTCHours() % 12) === 0 ? 12 : eventTime.getUTCHours() % 12}:${('0' + eventTime.getUTCMinutes()).slice(-2) } ${eventTime.getUTCHours() >=12 ? "PM" : "AM"}`}</li>
                        :  
                            <li className='event-list-item-when'><span>WHEN: </span>Tomorrow at {`${(eventTime.getUTCHours() % 12) === 0 ? 12 : eventTime.getUTCHours() % 12}:${('0' + eventTime.getUTCMinutes()).slice(-2) } ${eventTime.getUTCHours() >=12 ? "PM" : "AM"}`}</li>
                        }
                        {/* { Date.parse(today) > Date.parse(eventTime) ? 
                            <li className='event-list-item-when-expired'>Expired</li> : null 
                        } */}
                        <li className='event-list-item-description'><span>WHAT: </span>{event.description}</li>
                        <div className='event-list-item-attendees-container'>
                            <li className='event-list-item-attendees'>{Object.values(event.attendees).length} attending </li>
                            {Object.values(event.attendees).map(person => {
                                if (person._id === sessionUser._id && sessionUser._id === event.owner._id) {
                                    return <div className='attending-icon-container'><p className='event-list-item-you-attending'>Owner</p> <BsCheckCircleFill className='attending-icon'/></div>
                                } else if (person._id === sessionUser._id && sessionUser._id !== event.owner._id) {
                                    return <div className='attending-icon-container'><p className='event-list-item-you-attending'>Attending</p> <BsCheckCircleFill className='attending-icon'/></div>
                                }
                            })}
                        </div>
                    </ul>
                </div>
            </div>
            <div className="event-list-item-container-phone" id={event._id} onClick={handleClick}>
                <div className='event-list-top'>
                    <div className="event-list-item-img">
                        <img src={event.photoUrl} alt="" />
                    </div>
                    <div className='event-list-item-title-div'>
                        <li className='event-list-item-title'>{event.title}</li>
                    </div>
                </div>
                <div className="event-list-item-info">
                    <ul>
                        <li className='event-list-item-address'><span>WHERE: </span>{event.address}</li>
                        { dayDiff === 0 ? 
                            <li className='event-list-item-when'><span>WHEN: </span>Today at {`${(eventTime.getUTCHours() % 12) === 0 ? 12 : eventTime.getUTCHours() % 12}:${('0' + eventTime.getUTCMinutes()).slice(-2) } ${eventTime.getUTCHours() >=12 ? "PM" : "AM"}`}</li>
                        :  
                            <li className='event-list-item-when'><span>WHEN: </span>Tomorrow at {`${(eventTime.getUTCHours() % 12) === 0 ? 12 : eventTime.getUTCHours() % 12}:${('0' + eventTime.getUTCMinutes()).slice(-2) } ${eventTime.getUTCHours() >=12 ? "PM" : "AM"}`}</li>
                        }
                        {/* { Date.parse(today) > Date.parse(eventTime) ? 
                            <li className='event-list-item-when-expired'>Expired</li> : null 
                        } */}
                        <li className='event-list-item-description'><span>WHAT: </span>{event.description}</li>
                        <div className='event-list-item-attendees-container'>
                            <li className='event-list-item-attendees'>{Object.values(event.attendees).length} attending </li>
                            {Object.values(event.attendees).map(person => {
                                if (person._id === sessionUser._id && sessionUser._id === event.owner._id) {
                                    return <div className='attending-icon-container'><p className='event-list-item-you-attending'>Owner</p> <BsCheckCircleFill className='attending-icon'/></div>
                                } else if (person._id === sessionUser._id && sessionUser._id !== event.owner._id) {
                                    return <div className='attending-icon-container'><p className='event-list-item-you-attending'>Attending</p> <BsCheckCircleFill className='attending-icon'/></div>
                                }
                            })}
                        </div>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default EventsListItem;