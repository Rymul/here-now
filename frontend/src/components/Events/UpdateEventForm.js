import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { updateEvent } from '../../store/events';
import { capitalizeFirstLetter, getNewDate } from '../../utils/utils';
import AutoComplete from './AutoComplete';
import './NewEventForm.css'

export const UpdateEventForm = (props) => {
    const { eventId } = useParams();
    const eventData = useSelector(state => state.events[eventId])

    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [address,setAddress] = useState(null);
    const [lat, setLat] = useState(37.8);
    const [lng, setLng] = useState(-122.4);
    const [photoUrl, setPhotoUrl] = useState("/Calendar.svg")
    const user = useSelector(state=> state.session.user)
    const [eventTime, setEventTime] = useState('12:30');
    const [errors, setErrors] = useState(null)
    const [tomorrow, setTomorrow] = useState(false)
    const dispatch = useDispatch();
    const history = useHistory();
    // const latlng = useSelector(state => state.geolocation);
    // const [details, setDetails] = useState(null);
    let eventTimeData = new Date(eventTime).getUTCHours() + ":" + new Date(eventTime).getUTCMinutes()
    const splitTime = eventTimeData.split(":")
    if (splitTime[0].length < 2) {
        eventTimeData = "0" + eventTimeData
    } 
    if (splitTime[1].length < 2) {
        eventTimeData = "0" + eventTimeData
    }

    const initializeEventStates = () => {
        if(eventData) {
            setTitle(eventData.title)
            setAddress(eventData.address)
            setDescription(eventData.description)
            setLat(eventData.lat)
            setLng(eventData.lng)
            setEventTime(eventData.eventTime)
            // setPhotoUrl(eventData.photoUrl)
        }
    }

    useEffect(()=> {
        initializeEventStates()
    },[eventData])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const event = {
            _id: eventId,
            title,
            description,
            address,
            lat,
            lng,
            photoUrl,
            owner: user,
            attendees: {[user._id]: user},
            eventTime: eventTime,
            comments: eventData.comments
        }
        
        dispatch(updateEvent(event))
            .then( res => {
                if (res.errors) {
                    const updatedErrors = Object.values(res.errors)
                    setErrors(updatedErrors)
                } else {
                    history.push(`/events/${event._id}`)
                }
            })
    
    }
    
    if(!user) return null;
    return (
        <>
        <div className='new-event-form-outter-container'>
            <h1 id="owner-name">Hello {user.firstName}</h1>
            <h1 id='new-event-title'>Update your event</h1>

            <form className='new-event-form-form' onSubmit={handleSubmit}>
                <input id='new-event-form-input' placeholder='Title' type="text" 
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                    />
            
  
                <textarea id="new-event-form-description" 
                    cols="40" rows="5" placeholder='Description' 
                    value={description}
                    onChange={e=>setDescription(e.target.value)}
                />
              
                <AutoComplete address={address} setLat={setLat} setLng={setLng} setAddress={setAddress} setPhotoUrl={setPhotoUrl} />


                <div id='new-event-when'>
                    <label className='today-label' htmlFor='today'> Today
                        <input id='today' type="radio" name="tomorrow" defaultChecked/>
                    </label> 
                    <label className='tomorrow-label' htmlFor='tomorrow'>Tomorrow
                        <input id='tomorrow' type="radio" name="tomorrow" onChange={()=>setTomorrow(!tomorrow)} />
                    </label>
                </div>
             
                <input id="new-event-time" type="time" value={eventTimeData} onChange={(e)=>setEventTime(e.target.value)} />
            
                <button id='new-event-button'>Update event</button>
                <input
                        id="new-event-button"
                        type="button"
                        value="Cancel"
                        onClick={() => history.push(`/events/${eventId}`)}
                    />
                {errors ? 
                    errors.map( (error, i) => 
                    <div key={i}>
                        {error}
                    </div>)
                : null}
            </form>

        </div>
        </>
    )
}


export default UpdateEventForm;
