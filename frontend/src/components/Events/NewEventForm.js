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
    
    if(!user) return null;
    return (
        <>
        <div className='new-event-form-outter-container'>
            <h1>{user.firstName}</h1>
            <h1>Create a new event</h1>

            <form className='new-event-form-form' onSubmit={handleSubmit}>
                <input id='new-form-title' placeholder='Title' type="text" 
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                    />
            
  
                <textarea id="new-form-description" 
                    cols="30" rows="10" placeholder='Description' 
                    onChange={e=>setDescription(e.target.value)}
                />
              

                <input type="text" placeholder='Address' 
                    onChange={e=>setAddress(e.target.value)}
                />


                <label> Today
                    <input type="radio" name="tomorrow" defaultChecked/>
                </label> 
                <label for="">Tomorrow
                    <input type="radio" name="tomorrow" onChange={()=>setTomorrow(!tomorrow)} />
                </label>
           
             
                <input type="time" value={eventTime} onChange={(e)=>setEventTime(e.target.value)} />
            
                <button>Create that event boy</button>
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



