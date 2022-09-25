import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEvent, fetchAllEvents, createEvent } from '../../store/events';
import EventsListItem from './EventsListItem';
import './EventsIndex.css'
import EventsIndexMapWrapper from './EventsIndexMapsWrapper';
import { updateGeolocation } from '../../store/geolocation';
import { FaPlus } from 'react-icons/fa'
import { useHistory } from 'react-router-dom';
import { event1 } from './seeds'

const EventsIndex = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    
    
    const eventsObj = useSelector(state => state.events)


    let events;
    if (eventsObj) {
        events = Object.values(eventsObj).sort((a, b)=> new Date(a.eventTime) - new Date(b.eventTime));
    }
    useEffect(()=>{
        dispatch(fetchAllEvents());
    },[dispatch])
    
//     const banana = () => {
//         if (events.length >= 5) {
//          return null;
//     } else {
//          dispatch(createEvent(event1))
//     }
// }

    // banana();

    const latlng = useSelector(state => state.geolocation)

    // const [latlng, setLatLng] = useState({lat:null, lng:null})
    const [denied, setDenied] = useState(false) 

    
    
    const deleteExpiredEvent = () => {
        events.map(event => {
            if (new Date().toLocaleDateString() > new Date(event.eventTime).toLocaleDateString()) {
                dispatch(deleteEvent(event._id))
            } 
        })
    }

    deleteExpiredEvent()

    if (!events) {return null;}

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
    navigator.geolocation.getCurrentPosition(function (position) {
        // setLatLng({ lat: position.coords.latitude, lng: position.coords.longitude })
        dispatch(updateGeolocation({ lat: position.coords.latitude, lng: position.coords.longitude}))
    }, (error)=>{
        if (error.code == error.PERMISSION_DENIED) {
            setDenied(true);
        }
    })
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

    
  
       
    
    
    return (
        <>
        <div className='events-index-page'>
        {console.log(events.length, "events length")}
                <h1>Nearby Events</h1>
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
                            {events.map((event) => (<li key={event['_id']}><EventsListItem event={event}/></li>))}
                    </ul>
                </div>
                <div className='events-index-map-container'>
                        <EventsIndexMapWrapper apiKey={process.env.MAPS_API_KEY} latlng={latlng}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default EventsIndex;