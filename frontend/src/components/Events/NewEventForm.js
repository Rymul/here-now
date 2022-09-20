import { useEffect, useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import { useDispatch, useSelector } from 'react-redux';
// import TimeKeeper from 'react-timekeeper';

export const NewEventForm = (props) => {
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [address,setAddress] = useState(null);
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const user = useSelector(state=> state.session.user)
    const [owner, setOwner] = useState(user)
    const [attendees, setAttendees] = useState({ [user.id]: user})
    const [eventTime, setEventTime] = useState();


    return (
        <>
            <h1>{owner.firstName}</h1>
            <h1>Hello from New Event Form</h1>

            <form className='new-event-form-form'>
                <input id='new-form-title' placeholder='Title' type="text" />
                <label for="new-form-description" />
                <textarea id="new-form-description" 
                    cols="30" rows="10" placeholder='Description' />
                <input type="text" placeholder='Address' />
             
                
            </form>
        </>
    )
}



