import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllEvents } from '../../store/events';
import EventsListItem from './EventsListItem';
import './EventsIndex.css'
import EventsIndexMapWrapper from './EventsIndexMapsWrapper';

const EventsIndex = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchAllEvents());
    },[dispatch])

    const [latlng, setLatLng] = useState({lat:null, lng:null})
    const [denied, setDenied] = useState(false) 

    const eventsObj = useSelector(state => state.events)
    let events;
    if (eventsObj) {
        events = Object.values(eventsObj);
    }



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
        setLatLng({ lat: position.coords.latitude, lng: position.coords.longitude })
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

    return (
        <>
        <div className='events-index-page'>
                <h1>Nearby Events</h1>
            <div className='events-index-list-container'>
                <div className='events-index-list'>
                    
                    <ul>
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