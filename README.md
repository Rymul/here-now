# here&now
---
---

[Live site](https://here-now-825.herokuapp.com/)

here&now is a hyperlocal time constrained event app


Technologies:
---
---

* React.js
* Redux.js
* Node.js
* MongoDB
* Mongoose ODM
* Express
* Amazon AWS S3
* Google Maps API
* Google Places API

here&now is built with a Express backend framework. The frontend utilizes React and Redux to create a dynamic single page application. All data is stored through Mongo NoSQL database, with profile photos being uploaded and stored through Amazon AWS S3. These technologies allow users to smoothly navigate throughout the site and allow for dynamic creating, updating, and deleting profiles, events, and comments.


Features:
---
---

User Authentication:
---

* Users can sign up for an account on here&now. They can also log in to view, update, and delete their profile page.
* Authentication is implumented using the JWT Library to generate encrypted authentication tokens. 
* If a visitor does not want to create an account, they can log in as a Demo User. This provides them with full access to here&now's features.


Events:
---

* Users can navigate through a collection of listed events on the home page.
* When an event is selected, the event's show page is rendered displaying relevant information.
* The user can then join or leave the event by toggling the attend button.
* If they are the event creator they have the ability to update or cancel the event.


Comments:
---

* At the bottom right of the event show page, users will see all comments created for that event.
* If they have left a comment, they will be able to edit their comment in-line or delete their comment.


Implementation Timeline:
---
---

1. Hosing on Heroku (09/19/2022)

2. New account creation, login, and guest/demo login (09/19/2022, 2 Days)
* Users can sign up, sign in, and log out
* Users can use a demo login to try the site
* Users will have a currentUser show page that displays their information while allowing them to update or delete their profile.
* Users can't enter the site without logging in or signing up.

3. Events (09/19/2022, 2 Days)
* Events will show information such a title, description, list of attendees, and comments.

4. Comments (09/21/2022, 1 Days)
* Logged in users can create, uodate, and destroy comments.

5. Google Maps API, Google Places API (09/21/2022, 2 days)
* All created events will be displayed on a goggle map on the event index page.
* Clicking on a pin on the google map will highlight the associated link.
* When creating an event, users will provide an address for the event which will auto populate as they type.
* Once the event is created an event photo will be assigned from google places.

6. AWS S3 (09/21/2022, 2 Days)
* Users can upload a profile picture which will be displayed on their profile page and in a grid of attendees on the event show page.

7. Production README (09/21/2022, 0.5 Days) 


To Do:
---
---

* Fix AWS S3 photo uploading
