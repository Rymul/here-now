# here&now
---
---

[Live site](https://here-now-825.herokuapp.com/)

Here&now is a fun, spicy spin on the social event planning application meta! Users can host their own event or join other users' events and comment on other users' events through a smooth, single page application interface, utilizing geolocation, Google Places, and Google Maps API's. The spin? Events can only be hosted within 48 hours of <em>right now</em> and users will only see events in <em>their</em> area.

Here&now connects people to the places they live and the immediacy of now in a fun and interactive way!


Technologies:
---
---

* React.js
* Redux.js
* Node.js
* MongoDB
* Mongoose ODM
* Express
* Google Maps API
* Google Places API
* Geolocation API

Here&now is built with a Express backend framework. The frontend utilizes React and Redux to create a dynamic single page application. All data is stored through Mongo NoSQL database. These technologies allow users to smoothly navigate throughout the site and allow for dynamic creating, updating, and deleting of profiles, events, and comments.


Features:
---
---

User Authentication:
---

* Users can sign up for an account on here&now. They can also log in to view, update, and delete their profile page.
* Authentication is implemented using the JWT Library to generate encrypted authentication tokens. 
* If a visitor does not want to create an account, they can log in as a Demo User. This provides them with full access to here&now's features.

![](https://media4.giphy.com/media/sAgAFgZpfmYOnCjykH/giphy.gif?cid=790b76113c9cc455d2086ff61a40b1259676397c10b6a2e8&rid=giphy.gif&ct=g)




Events:
---

* Users can navigate through a collection of listed events on the home page.
* When an event is selected, the event's show page is rendered displaying relevant information.
* The user can then join or leave the event by toggling the attend button.
* If they are the event creator they have the ability to update or cancel the event.

### Events List:

![](https://media2.giphy.com/media/D3BpydpKyFnQWiwgrs/giphy.gif?cid=790b76110d45f429692654fa034adc474cb1649b7d93c648&rid=giphy.gif&ct=g)

``` javascript
const eventsList = () => {
        if (!latlng.lat) {
            return (<div> <img className='event-index-loading' src="./loading.gif" alt="loading" /> </div>)
        } else if (events.length === 0) {
            return (<EventsIndexNoEvents filter={props.filter}/>)
        } else {
            return events.map((event) => (<li key={event['_id']}><EventsListItem event={event} pins={pins}/></li>))
        }
    }

```

### Event Show Page:

![](https://media4.giphy.com/media/hU0oGICbg6S56zARvS/giphy.gif?cid=790b76118c5abd3d9a2701d7a3149441a8503a3a50f86853&rid=giphy.gif&ct=g)

``` javascript
<h1 id="event-show-title">Welcome to {event.owner.firstName}'s {event.title}</h1>
                <div className='event-show-page-splitter-parent'>
                <div className='event-show-page-splitter'>
                    <div className='event-show-right'>
                        <div className='event-show-map-container'>
                            <EventShowMapWrapper apiKey={process.env.MAPS_API_KEY} latlng={latlng} event={event}/>
                        </div>
                    </div>
                    <div className='event-show-left'>
                        <div className='event-show-details'>
                            <div className='event-show-details-left'>
                                <p id="event-show-details-left-text">WHERE:</p>
                                <p id="event-show-details-left-text">WHEN:</p>
                                <p id="event-show-details-left-text">WHAT:</p>
                            </div>
                            <div className='event-show-details-right'>
                                <p id="event-show-details-right-text">{event.address}</p>
                                <p id="event-show-details-right-text">{`${(eventTime.getUTCHours() % 12) === 0 ? 12 : eventTime.getUTCHours() % 12}:${('0' + eventTime.getUTCMinutes()).slice(-2) } ${eventTime.getUTCHours() >=12 ? "PM" : "AM"}`}</p>
                                <p id="event-show-details-right-text">{event.description}</p>
                            </div>
```


Comments:
---

* At the bottom right of the event show page, users will see all comments created for that event.
* If they have left a comment, they will be able to edit their comment in-line or delete their comment.


### Comments Form:

![](https://media1.giphy.com/media/dtGdgsaleppyxb8kSC/giphy.gif?cid=790b7611002c7ae2227a13d05b44222879de13c869d8c778&rid=giphy.gif&ct=g)

``` javascript

<div className='event-show-comments'>
    <CommentsForm id="event-show-comments-form" event={event}/>
    {Object.values(event.comments).reverse().map(comment =>(
        <CommentItem comment={comment} key={comment._id} />
    ))}
</div>

```

