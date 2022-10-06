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

