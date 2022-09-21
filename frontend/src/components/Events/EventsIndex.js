import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllEvents } from '../../store/events';
import EventsListItem from './EventsListItem';
import './EventsIndex.css'

const EventsIndex = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchAllEvents());
    },[dispatch])

    const eventsObj = useSelector(state => state.events)
    let events;
    if (eventsObj) {
        events = Object.values(eventsObj);
    }

    if (!events) {return null;}

    return (
        <>
        <div className='events-index-page'>
            <div className='events-index-list-container'>
                <div className='events-index-list'>
                    <ul>
                            {events.map((event) => (<li key={event['_id']}><EventsListItem event={event}/></li>))}
                    </ul>
                </div>
                <div className='events-index-map-container'></div>
            </div>
        </div>
        </>
    )
}

export default EventsIndex;