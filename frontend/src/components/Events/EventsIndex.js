import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEvent, fetchAllEvents, createEvent } from '../../store/events';
import EventsListItem from './EventsListItem';
import './EventsIndex.css'
import EventsIndexMapWrapper from './EventsIndexMapsWrapper';
import { updateGeolocation } from '../../store/geolocation';
import { FaPlus, FaSpinner } from 'react-icons/fa'
import { useHistory } from 'react-router-dom';
import EventsIndexNoEvents from './EventsIndexNoEvents';



const EventsIndex = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const eventsObj = useSelector(state => state.events)
    const sessionUserId = useSelector(state => state.session.user._id)
    const pins = useRef({});

    useEffect(() => {
        dispatch(fetchAllEvents())
    }, [dispatch])


    const latlng = useSelector(state => state.geolocation)
    const [denied, setDenied] = useState(false)


    




    let events;
    if (eventsObj) {
        events = Object.values(eventsObj).sort((a, b) => new Date(a.eventTime) - new Date(b.eventTime));
    }
    
    events = events.filter(event => (Math.abs(event.lat - latlng.lat) < 1) && (Math.abs(event.lng - latlng.lng) < 1))
    
    let title = "Nearby Events";
    if (props.filter === "owned") {
        title = "Hosting";
        events = events.filter( event => {
            return sessionUserId === event.owner._id
        })
    } else if (props.filter === "attending") {
        title = "Attending";
        events = events.filter( event => {
            return (
                event.attendees[sessionUserId]
            )
        })
    }

    const deleteAllEvents = () => {
        if (events) events.map(event => {
            dispatch(deleteEvent(event._id))
        })
    }

    // deleteAllEvents(); // If you want to delete all events, uncomment this line

    const deleteExpiredEvent = () => {
        // 
        events.map(event => {
            if (new Date().toLocaleDateString() > new Date(event.eventTime).toLocaleDateString()) {
                dispatch(deleteEvent(event._id))
            }
        })
    }
    deleteExpiredEvent()
    // useEffect(()=> {
    //     deleteExpiredEvent()
    // }, [])
    useEffect(() => {
        if (sessionUserId === '632cf98b142e9e8a7192da52') {
            dispatch(updateGeolocation({ lat: 37.776329964303194, lng: -122.43474034071976 }))
        } else {
            navigator.geolocation.getCurrentPosition(function (position) {
                // setLatLng({ lat: position.coords.latitude, lng: position.coords.longitude })

                dispatch(updateGeolocation({ lat: position.coords.latitude, lng: position.coords.longitude }))

            }, (error) => {
                if (error.code == error.PERMISSION_DENIED) {
                    setDenied(true);
                }
            })
        }
    }, [])


    if (!events) { return null; }

    // if (latlng.lat===null) {
    //     navigator.geolocation.getCurrentPosition(function (position) {
    //         setLatLng({ lat: position.coords.latitude, lng: position.coords.longitude })
    //     })
    //     return (
    //         <div className='events-index-geolocate-request'>
    //             <p>Please enable browser location to use here&amp;now</p>
    //         </div>
    //     )
    // }

   


    
    if (denied) {
        return (
            <div className='events-index-geolocate-request'>
                <p>Please enable browser location and refresh your page to use here&amp;now</p>
            </div>
        )
    }

    const handleClick = () => {
        history.push('/events/new')
    }


    const eventsList = () => {
        if (!latlng.lat) {
            return (<div> <img className='event-index-loading' src="./loading.gif" alt="loading" /> </div>)
        } else if (events.length === 0) {
            return (<EventsIndexNoEvents filter={props.filter}/>)
        } else {
            return events.map((event) => (<li key={event['_id']}><EventsListItem event={event} pins={pins}/></li>))
        }
    }

   

    return (
        <>
            <div className='events-index-page'>
                <h1>{title}</h1>
                <div className='events-index-list-container'>
                    <div className='events-index-list'>

                        <ul>
                            <li>
                                <div className="event-index-container" onClick={handleClick}>
                                    <div className="event-list-item-info">
                                        <ul>
                                            <li className='event-list-item-title'><FaPlus /> <h2>Create an Event</h2></li>

                                        </ul>
                                    </div>
                                </div>
                            </li>
                            {eventsList()}
                        </ul>
                    </div>
                    <div className='events-index-map-container'>
                        <EventsIndexMapWrapper apiKey={process.env.REACT_APP_MAPS_API_KEY} latlng={latlng} events={events} pins={pins}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventsIndex;