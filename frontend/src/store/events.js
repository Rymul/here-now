import { updatePayload } from "../utils/utils";
import jwtFetch from "./jwt";
import { event1, event2, event3, event4 } from "../components/Events/seeds";


export const REMOVE_EVENT = 'REMOVE_EVENT';
export const SET_EVENTS = 'SET_EVENTS'
export const SET_EVENT = 'SET_EVENT'

export const setEvents = (payload)=>({
  type: SET_EVENTS,
  payload
})

export const removeEvent = (payload) =>({
  type: REMOVE_EVENT,
  payload
})

export const setEvent = (payload) => ({
    type: SET_EVENT,
    payload
})

export const createEvent = (payload) => async dispatch => {
  try{
    const response = await jwtFetch(`/api/events`, {
      method: 'POST',
      body: JSON.stringify(payload)
    })
      const event = await response.json();
      dispatch(setEvents(event))
  } catch(err){
    const res = await err.json();
    if (res.statusCode === 400){
      return res
    }
  }
}

export const updateEvent = (event) => async dispatch => {
  const response = await jwtFetch(`/api/events/${event._id}`, {
    method: 'PATCH',
    body: JSON.stringify(event)
  })
  const payload = await response.json();
  dispatch(setEvent(payload))
  return payload
}

export const deleteEvent = (eventId) => async dispatch => {
  
  const response = await jwtFetch(`/api/events/${eventId}`,
  {method: 'DELETE'});
  const payload = await response.json();
  dispatch(removeEvent(eventId))
  return response;
}

export const fetchEvent = (eventId) => async dispatch => {
  const response = await jwtFetch(`/api/events/${eventId}`);
  const payload = await response.json();
  dispatch(setEvent(payload))
  return response;
}


export const fetchAllEvents = () => async dispatch => {
    const response = await jwtFetch(`/api/events`);
    const payload = await response.json();
    const events = [event4, event1, event2, event3]
    for (let i = Object.values(payload).length; i < 5; i++) {
      dispatch(createEvent(events[0]))
      events.shift()
    }
    dispatch(setEvents(updatePayload(payload)))
    return response;
}


const eventsReducer = (state = null, action) => {
    Object.freeze(state);
    const nextState = { ...state };
  
    switch(action.type) {
      case SET_EVENT:
        return {[action.payload._id]: action.payload}
      case REMOVE_EVENT:
        delete nextState[action.payload]
        return nextState;
      case SET_EVENTS:
       return {...nextState, ...action.payload}
      default:
        return nextState;
    }
}

export default eventsReducer;