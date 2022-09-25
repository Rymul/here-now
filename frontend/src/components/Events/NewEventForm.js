import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createEvent } from '../../store/events';
import { capitalizeFirstLetter, getNewDate } from '../../utils/utils';
import './NewEventForm.css'

export const NewEventForm = (props) => {
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [address,setAddress] = useState(null);
    const [lat, setLat] = useState(37.8);
    const [lng, setLng] = useState(-122.4);
    const user = useSelector(state=> state.session.user)
    const [eventTime, setEventTime] = useState('12:30');
    const [errors, setErrors] = useState(null)
    const [tomorrow, setTomorrow] = useState(false)
    const dispatch = useDispatch();
    const history = useHistory();
    const latlng = useSelector(state => state.geolocation);
    const [details, setDetails] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedEventTime = getNewDate(tomorrow, eventTime)
        const event = {
            title,
            description,
            address,
            lat,
            lng,
            owner: user,
            attendees: {[user._id]: user},
            eventTime: updatedEventTime,
            comments: 'hello'
        }
        
        dispatch(createEvent(event))
            .then( res => {
                if (res) {
                    const updatedErrors = [];
                    Object.keys(res.errors).forEach( error => {
                        switch (error){
                            case 'title':
                                updatedErrors
                                    .push(capitalizeFirstLetter(error) + ' must be between 5 and 50 characters')
                                break;
                            case 'description':
                                updatedErrors
                                    .push(capitalizeFirstLetter(error) + ' must be between 5 and 150 characters')
                                break;
                            case 'address':
                                updatedErrors
                                    .push(capitalizeFirstLetter(error) + ' must be between 5 and 50 characters')
                                break;
                            case 'eventTime':
                                updatedErrors
                                .push('Event time must be between 5 and 50 characters')
                                break;
                            default:
                                break;
                        }
                    })
                    setErrors(updatedErrors)
                } else {
                    history.push('/events')
                }
            })
    
    }
    let bounds = new window.google.maps.LatLngBounds();
    bounds.extend(new window.google.maps.LatLng(latlng.lat + 1, latlng.lng + 1))
    bounds.extend(new window.google.maps.LatLng(latlng.lat + 1, latlng.lng - 1))
    bounds.extend(new window.google.maps.LatLng(latlng.lat - 1, latlng.lng + 1))
    bounds.extend(new window.google.maps.LatLng(latlng.lat - 1, latlng.lng - 1))

    let autocomplete;
    const initAutoComplete = () => {
        autocomplete = new window.google.maps.places.Autocomplete(
            document.getElementById('autocomplete'),
            {
                types: ['establishment'],
                fields: ['formatted_address', 'geometry', 'photos'],
                bounds: bounds,
                componentRestrictions: { 'country': ['US'] }
            }
        )
        autocomplete.addListener('place_changed', onPlaceChanged);
    }

    const onPlaceChanged = () => {
        const place = autocomplete.getPlace();

        if (!place.geometry) {
            document.getElementById('autocomplete').placeholder = "Enter a place"
        } else {
            setDetails(place)
        }
    }
    
    if(!user) return null;
    return (
        <>
        <div className='new-event-form-outter-container'>
            <h1 id="owner-name">Hello {user.firstName}</h1>
            <h1 id='new-event-title'>Create a new event!</h1>

            <form className='new-event-form-form' onSubmit={handleSubmit}>
                <input id='new-event-form-input' placeholder='Title' type="text" 
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                    />
            
  
                <textarea id="new-event-form-description" 
                    cols="40" rows="5" placeholder='Description' 
                    onChange={e=>setDescription(e.target.value)}
                />
              
                <input id="autocomplete" placeholder="Enter a place" type="text" />

                <input id="new-event-form-input"
                    type="text" placeholder='Address' 
                    onChange={e=>setAddress(e.target.value)}
                />

                <div id='new-event-when'>
                    <label> Today
                        <input type="radio" name="tomorrow" defaultChecked/>
                    </label> 
                    <label for="">Tomorrow
                        <input type="radio" name="tomorrow" onChange={()=>setTomorrow(!tomorrow)} />
                    </label>
                </div>
             
                <input id="new-event-time" type="time" value={eventTime} onChange={(e)=>setEventTime(e.target.value)} />
            
                <button id='new-event-button'>Create your event!</button>
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



