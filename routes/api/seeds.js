
let tomorrow 
let twoHoursLater
let fourHoursLater 
let sixHoursLater

const updateTime = () => {    
    tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(tomorrow.getHours() - 7)
    tomorrow.setMinutes(0)
    twoHoursLater = new Date()
    twoHoursLater.setHours(twoHoursLater.getHours() + 2 - 7)
    twoHoursLater.setMinutes(0)
    fourHoursLater = new Date()
    fourHoursLater.setHours(fourHoursLater.getHours() + 4 - 7)
    fourHoursLater.setMinutes(0)
    sixHoursLater = new Date()
    sixHoursLater.setHours(sixHoursLater.getHours() + 6)
    sixHoursLater.setMinutes(0)
}   

updateTime()

const event1 = {
    title: 'Corgi Collective',
    description: "Let's go walk our corgi friends at Golden Gate Park together and talk about how great and difficult it can sometimes be to be a Corgi owner!",
    address: "Golden Gate Park Dog Play Area Main Entrance",
    lat: 37.7694,
    lng: -122.4862,
    owner: {
        "_id": "632cfb723fee210de997a88a",
        "firstName": "Ryan",
        "lastName": "Mullen",
        "email": "ryan@email.io",
        "photoUrl": "/RyanMullen.jpeg",
        "events": []
        },
    attendees: {
        "632cfb723fee210de997a88a": {
        "_id": "632cfb723fee210de997a88a",
        "firstName": "Ryan",
        "lastName": "Mullen",
        "email": "ryan@email.io",
        "photoUrl": "/RyanMullen.jpeg",
        "events": []
        },
        "632cf98b142e9e8a7192da52": {
        "_id": "632cf98b142e9e8a7192da52",
        "firstName": "Demo",
        "lastName": "User",
        "email": "demo@user.io",
        "birthDay": "1992-10-26T08:00:00.000Z",
        "events": [],
        "photoUrl": "/female-profile-picture.jpeg"
        },
        "632cf3d7167d8b826aafbc67": {
        "_id": "632cf3d7167d8b826aafbc67",
        "firstName": "Ari",
        "lastName": "Moshe",
        "email": "ari@email.io",
        "birthDay": "2022-09-20T07:00:00.000Z",
        "photoUrl": "/AriMoshe.jpeg",
        "events": []
        },
        "632cf3f9167d8b826aafbc6b": {
        "_id": "632cf3f9167d8b826aafbc6b",
        "firstName": "Jay",
        "lastName": "Reedy",
        "email": "jay@email.io",
        "photoUrl": "/JayReddy.jpeg",
        "birthDay": "1701-04-12T07:52:58.000Z",
        "events": []
        },
        "632cf4d12ce53c50f1ec6ccb": {
        "_id": "632cf4d12ce53c50f1ec6ccb",
        "firstName": "Garret",
        "lastName": "Grant",
        "email": "garret@user.io",
        "photoUrl": "/GarretGrant.png",
        "birthDay": "2022-09-22T23:50:10.127Z",
        "events": []
        }
    },
    comments: {test: "test"},
    eventTime: tomorrow,
    photoUrl: "/Corgi.jpg"
}

const event2 = {
    title: 'Tea Time',
    description: "From bitter green tea to milky chai, come enjoy your favorite brewed leaf stews with friends!",
    address: "Tea Hut, California Street, San Francisco, CA",
    lat: 37.8,
    lng: -122.4,
    owner: {
        
        "_id": "632cf4d12ce53c50f1ec6ccb",
        "firstName": "Garret",
        "lastName": "Grant",
        "email": "garret@user.io",
        "photoUrl": "/GarretGrant.png",
        "birthDay": "2022-09-22T23:50:10.127Z",
        "events": []
        
    },
    attendees: {
        "632cf4d12ce53c50f1ec6ccb": {
        "_id": "632cf4d12ce53c50f1ec6ccb",
        "firstName": "Garret",
        "lastName": "Grant",
        "email": "garret@user.io",
        "photoUrl": "/GarretGrant.png",
        "birthDay": "2022-09-22T23:50:10.127Z",
        "events": []
        },
        "632cf98b142e9e8a7192da52": {
        "_id": "632cf98b142e9e8a7192da52",
        "firstName": "Demo",
        "lastName": "User",
        "email": "demo@user.io",
        "birthDay": "1992-10-26T08:00:00.000Z",
        "events": [],
        "photoUrl": "/female-profile-picture.jpeg"
        },
        "632cf3f9167d8b826aafbc6b": {
        "_id": "632cf3f9167d8b826aafbc6b",
        "firstName": "Jay",
        "lastName": "Reedy",
        "email": "jay@email.io",
        "photoUrl": "/JayReddy.jpeg",
        "birthDay": "1701-04-12T07:52:58.000Z",
        "events": []
        },
        "632cfb723fee210de997a88a": {
        "_id": "632cfb723fee210de997a88a",
        "firstName": "Ryan",
            "lastName": "Mullen",
        "photoUrl": "/RyanMullen.jpeg",
        "email": "ryan@email.io",
        "events": []
        },
        "632cf3d7167d8b826aafbc67": {
        "_id": "632cf3d7167d8b826aafbc67",
        "firstName": "Ari",
        "lastName": "Moshe",
        "email": "ari@email.io",
        "photoUrl": "/AriMoshe.jpeg",
        "birthDay": "2022-09-20T07:00:00.000Z",
        "events": []
        }
    },
    comments: {test: "test"},
    eventTime: sixHoursLater,
    photoUrl: "/TeaTime.jpg"
}

const event3 = {
    title: 'Pickup at the Park',
    description: "stop playing 2k and acting like your nice wit it; lace up, scrub",
    address: "Hamilton Park, Geary Boulevard, San Francisco, CA",
    lat: 37.784,
    lng: -122.438,
    owner: {
        
        "_id": "632cf3f9167d8b826aafbc6b",
        "firstName": "Jay",
        "lastName": "Reedy",
        "email": "jay@email.io",
        "photoUrl": "/JayReddy.jpeg",
        "birthDay": "1701-04-12T07:52:58.000Z",
        "events": []
        
    },
    attendees: {
        "632cf3f9167d8b826aafbc6b": {
        "_id": "632cf3f9167d8b826aafbc6b",
        "firstName": "Jay",
        "lastName": "Reedy",
        "email": "jay@email.io",
        "photoUrl": "/JayReddy.jpeg",
        "birthDay": "1701-04-12T07:52:58.000Z",
        "events": []
        },
        "632cfb723fee210de997a88a": {
        "_id": "632cfb723fee210de997a88a",
        "firstName": "Ryan",
        "lastName": "Mullen",
        "photoUrl": "/RyanMullen.jpeg",
        "email": "ryan@email.io",
        "events": []
        },
        "632cf3d7167d8b826aafbc67": {
        "_id": "632cf3d7167d8b826aafbc67",
        "firstName": "Ari",
        "lastName": "Moshe",
            "email": "ari@email.io",
            "photoUrl": "/AriMoshe.jpeg",
        "birthDay": "2022-09-20T07:00:00.000Z",
        "events": []
        }
    },
    comments: {test: "test"},
    eventTime: fourHoursLater,
    photoUrl: "/HamiltonPark.jpg"
}

const event4 = {
    title: 'VR Hangout at Sandbox VR',
    description: "Whether you're new to VR games or a seasoned veteran, come play some games down at Sandbox over on Market",
    address: "Sandbox VR, Market Street, San Francisco, CA",
    lat: 37.78621,
    lng: -122.40683,
    owner: {
            
            "_id": "632cf98b142e9e8a7192da52",
            "firstName": "Demo",
            "lastName": "User",
            "email": "demo@user.io",
            "birthDay": "1992-10-26T08:00:00.000Z",
            "events": [],
            "photoUrl": "/female-profile-picture.jpeg"
            
    },
    attendees: {
        "632cf98b142e9e8a7192da52": {
        "_id": "632cf98b142e9e8a7192da52",
        "firstName": "Demo",
        "lastName": "User",
        "email": "demo@user.io",
        "birthDay": "1992-10-26T08:00:00.000Z",
        "events": [],
        "photoUrl": "/female-profile-picture.jpeg"
        },
        "632cf3f9167d8b826aafbc6b": {
        "_id": "632cf3f9167d8b826aafbc6b",
        "firstName": "Jay",
        "lastName": "Reedy",
        "email": "jay@email.io",
        "photoUrl": "/JayReddy.jpeg",
        "birthDay": "1701-04-12T07:52:58.000Z",
        "events": []
        },
        "632cfb723fee210de997a88a": {
        "_id": "632cfb723fee210de997a88a",
        "firstName": "Ryan",
        "lastName": "Mullen",
        "photoUrl": "/RyanMullen.jpeg",
        "email": "ryan@email.io",
        "events": []
        },
        "632cf3d7167d8b826aafbc67": {
        "_id": "632cf3d7167d8b826aafbc67",
        "firstName": "Ari",
        "lastName": "Moshe",
        "email": "ari@email.io",
        "photoUrl": "/AriMoshe.jpeg",
        "birthDay": "2022-09-20T07:00:00.000Z",
        "events": []
        }
    },
    comments: {test: "test"},
    eventTime: twoHoursLater,
    photoUrl: "/Sandbox.jpg"
}


const event5 = {
    title: 'Board Game Night @ A/a!!',
    description: "CODDDEEEEEENAMEEEEEESSSSSSSSSS",
    address: "825 Battery Street, San Francisco, CA",
    lat: 37.7989666,
    lng: -122.4013518,
    owner: {

        "_id": "6330f7996bd83e0bc0ef1d37",
        "firstName": "Disnee",
        "lastName": "Tamang",
        "email": "disnee@email.io",
        "birthDay": "1997-04-15T07:00:00.000Z",
        "events": [],
        "photoUrl": "/DisneeTamang.jpeg"

        },
    attendees: {
        "632cf98b142e9e8a7192da52": {
        "_id": "632cf98b142e9e8a7192da52",
        "firstName": "Demo",
        "lastName": "User",
        "email": "demo@user.io",
        "birthDay": "1992-10-26T08:00:00.000Z",
        "events": [],
        "photoUrl": "/female-profile-picture.jpeg"
        },
        "6330f7c46bd83e0bc0ef1d3b": {
        "_id": "6330f7c46bd83e0bc0ef1d3b",
        "firstName": "Karren",
        "lastName": "Siu",
        "email": "karren@email.io",
        "birthDay": "1997-06-11T07:00:00.000Z",
        "events": [],
        "photoUrl": "/KarrenSiu.jpeg"
        },
        "632cfb723fee210de997a88a": {
        "_id": "632cfb723fee210de997a88a",
        "firstName": "Ryan",
        "lastName": "Mullen",
        "photoUrl": "/RyanMullen.jpeg",
        "email": "ryan@email.io",
        "events": []
        },
        "632cf3d7167d8b826aafbc67": {
        "_id": "632cf3d7167d8b826aafbc67",
        "firstName": "Ari",
        "lastName": "Moshe",
        "email": "ari@email.io",
        "photoUrl": "/AriMoshe.jpeg",
        "birthDay": "2022-09-20T07:00:00.000Z",
        "events": []
        },
        "6330f8246bd83e0bc0ef1d43": {
        "_id": "6330f8246bd83e0bc0ef1d43",
        "firstName": "Mimi",
        "lastName": "Ly",
        "email": "mimi@email.io",
        "birthDay": "1993-10-14T07:00:00.000Z",
        "events": [],
        "photoUrl": "/MimiLy.jpeg"
        },
        "6330f7f16bd83e0bc0ef1d3f": {
        "_id": "6330f7f16bd83e0bc0ef1d3f",
        "firstName": "Matt",
        "lastName": "Teh",
        "email": "matt@email.io",
        "birthDay": "1997-02-07T08:00:00.000Z",
        "events": [],
        "photoUrl": "/MattTeh.png"
        }
    },
    comments: {test: "test"},
    eventTime: fourHoursLater,
    photoUrl: "/Boardgames.jpg"
}










const event6 = {
    title: 'Shiba Inu Collective',
    description: "Let's go walk our corgi friends at Central Park together and talk about how great and difficult it can sometimes be to be a Shiba Inu  owner!",
    address: "Central Park Balto Statue",
    lat: 40.76998829213726, 
    lng: -73.97101763962479,
    owner: {
        "_id": "632cfb723fee210de997a88a",
        "firstName": "Ryan",
        "lastName": "Mullen",
        "email": "ryan@email.io",
        "photoUrl": "/RyanMullen.jpeg",
        "events": []
    },
    attendees: {
        "632cfb723fee210de997a88a": {
            "_id": "632cfb723fee210de997a88a",
            "firstName": "Ryan",
            "lastName": "Mullen",
            "email": "ryan@email.io",
            "photoUrl": "/RyanMullen.jpeg",
            "events": []
        },
        "632cf98b142e9e8a7192da52": {
            "_id": "632cf98b142e9e8a7192da52",
            "firstName": "Demo",
            "lastName": "User",
            "email": "demo@user.io",
            "birthDay": "1992-10-26T08:00:00.000Z",
            "events": [],
            "photoUrl": "/female-profile-picture.jpeg"
        },
        "632cf3d7167d8b826aafbc67": {
            "_id": "632cf3d7167d8b826aafbc67",
            "firstName": "Ari",
            "lastName": "Moshe",
            "email": "ari@email.io",
            "birthDay": "2022-09-20T07:00:00.000Z",
            "photoUrl": "/AriMoshe.jpeg",
            "events": []
        },
        "632cf3f9167d8b826aafbc6b": {
            "_id": "632cf3f9167d8b826aafbc6b",
            "firstName": "Jay",
            "lastName": "Reedy",
            "email": "jay@email.io",
            "photoUrl": "/JayReddy.jpeg",
            "birthDay": "1701-04-12T07:52:58.000Z",
            "events": []
        },
        "632cf4d12ce53c50f1ec6ccb": {
            "_id": "632cf4d12ce53c50f1ec6ccb",
            "firstName": "Garret",
            "lastName": "Grant",
            "email": "garret@user.io",
            "photoUrl": "/GarretGrant.png",
            "birthDay": "2022-09-22T23:50:10.127Z",
            "events": []
        }
    },
    comments: { test: "test" },
    eventTime: tomorrow,
    photoUrl: "/Shibe.jpg"
}

const event7 = {
    title: 'Tea Time at Alice\'s',
    description: "From bitter green tea to milky chai, come enjoy your favorite brewed leaf stews with friends!",
    address: "102 W 73rd St, New York, NY 10023",
    lat: 40.77810566564272, 
    lng: -73.9786728916652,
    owner: {

        "_id": "632cf4d12ce53c50f1ec6ccb",
        "firstName": "Garret",
        "lastName": "Grant",
        "email": "garret@user.io",
        "photoUrl": "/GarretGrant.png",
        "birthDay": "2022-09-22T23:50:10.127Z",
        "events": []

    },
    attendees: {
        "632cf4d12ce53c50f1ec6ccb": {
            "_id": "632cf4d12ce53c50f1ec6ccb",
            "firstName": "Garret",
            "lastName": "Grant",
            "email": "garret@user.io",
            "photoUrl": "/GarretGrant.png",
            "birthDay": "2022-09-22T23:50:10.127Z",
            "events": []
        },
        "632cf98b142e9e8a7192da52": {
            "_id": "632cf98b142e9e8a7192da52",
            "firstName": "Demo",
            "lastName": "User",
            "email": "demo@user.io",
            "birthDay": "1992-10-26T08:00:00.000Z",
            "events": [],
            "photoUrl": "/female-profile-picture.jpeg"
        },
        "632cf3f9167d8b826aafbc6b": {
            "_id": "632cf3f9167d8b826aafbc6b",
            "firstName": "Jay",
            "lastName": "Reedy",
            "email": "jay@email.io",
            "photoUrl": "/JayReddy.jpeg",
            "birthDay": "1701-04-12T07:52:58.000Z",
            "events": []
        },
        "632cfb723fee210de997a88a": {
            "_id": "632cfb723fee210de997a88a",
            "firstName": "Ryan",
            "lastName": "Mullen",
            "photoUrl": "/RyanMullen.jpeg",
            "email": "ryan@email.io",
            "events": []
        },
        "632cf3d7167d8b826aafbc67": {
            "_id": "632cf3d7167d8b826aafbc67",
            "firstName": "Ari",
            "lastName": "Moshe",
            "email": "ari@email.io",
            "photoUrl": "/AriMoshe.jpeg",
            "birthDay": "2022-09-20T07:00:00.000Z",
            "events": []
        }
    },
    comments: { test: "test" },
    eventTime: sixHoursLater,
    photoUrl: "/TeaTime.jpg"
}

const event8 = {
    title: 'Pickup Basketball at the Park',
    description: "stop playing 2k and acting like your nice wit it; lace up, scrub",
    address: "Great Lawn Basketball Courts, Central Park",
    lat: 40.78234275634158, 
    lng: -73.96459335236736,
    owner: {

        "_id": "632cf3f9167d8b826aafbc6b",
        "firstName": "Jay",
        "lastName": "Reedy",
        "email": "jay@email.io",
        "photoUrl": "/JayReddy.jpeg",
        "birthDay": "1701-04-12T07:52:58.000Z",
        "events": []

    },
    attendees: {
        "632cf3f9167d8b826aafbc6b": {
            "_id": "632cf3f9167d8b826aafbc6b",
            "firstName": "Jay",
            "lastName": "Reedy",
            "email": "jay@email.io",
            "photoUrl": "/JayReddy.jpeg",
            "birthDay": "1701-04-12T07:52:58.000Z",
            "events": []
        },
        "632cfb723fee210de997a88a": {
            "_id": "632cfb723fee210de997a88a",
            "firstName": "Ryan",
            "lastName": "Mullen",
            "photoUrl": "/RyanMullen.jpeg",
            "email": "ryan@email.io",
            "events": []
        },
        "632cf3d7167d8b826aafbc67": {
            "_id": "632cf3d7167d8b826aafbc67",
            "firstName": "Ari",
            "lastName": "Moshe",
            "email": "ari@email.io",
            "photoUrl": "/AriMoshe.jpeg",
            "birthDay": "2022-09-20T07:00:00.000Z",
            "events": []
        }
    },
    comments: { test: "test" },
    eventTime: fourHoursLater,
    photoUrl: "/HamiltonPark.jpg"
}

const event9 = {
    title: 'VR Hangout at Escape Virtuality',
    description: "Whether you're new to VR games or a seasoned veteran, come play some games down at Escape Virtuality",
    address: "130 W 29th St, New York, NY 10001",
    lat: 40.74704224781423, 
    lng: -73.99160581252131,
    owner: {

        "_id": "632cf98b142e9e8a7192da52",
        "firstName": "Demo",
        "lastName": "User",
        "email": "demo@user.io",
        "birthDay": "1992-10-26T08:00:00.000Z",
        "events": [],
        "photoUrl": "/female-profile-picture.jpeg"

    },
    attendees: {
        "632cf98b142e9e8a7192da52": {
            "_id": "632cf98b142e9e8a7192da52",
            "firstName": "Demo",
            "lastName": "User",
            "email": "demo@user.io",
            "birthDay": "1992-10-26T08:00:00.000Z",
            "events": [],
            "photoUrl": "/female-profile-picture.jpeg"
        },
        "632cf3f9167d8b826aafbc6b": {
            "_id": "632cf3f9167d8b826aafbc6b",
            "firstName": "Jay",
            "lastName": "Reedy",
            "email": "jay@email.io",
            "photoUrl": "/JayReddy.jpeg",
            "birthDay": "1701-04-12T07:52:58.000Z",
            "events": []
        },
        "632cfb723fee210de997a88a": {
            "_id": "632cfb723fee210de997a88a",
            "firstName": "Ryan",
            "lastName": "Mullen",
            "photoUrl": "/RyanMullen.jpeg",
            "email": "ryan@email.io",
            "events": []
        },
        "632cf3d7167d8b826aafbc67": {
            "_id": "632cf3d7167d8b826aafbc67",
            "firstName": "Ari",
            "lastName": "Moshe",
            "email": "ari@email.io",
            "photoUrl": "/AriMoshe.jpeg",
            "birthDay": "2022-09-20T07:00:00.000Z",
            "events": []
        }
    },
    comments: { test: "test" },
    eventTime: twoHoursLater,
    photoUrl: "/Sandbox.jpg"
}


const event10 = {
    title: 'Board Game Night @ App Academy!',
    description: "CODDDEEEEEENAMEEEEEESSSSSSSSSS",
    address: "90 5th Ave, New York, NY 10011",
    lat: 40.736301046598044, 
    lng: -73.9937877107214,
    owner: {

        "_id": "6330f7996bd83e0bc0ef1d37",
        "firstName": "Disnee",
        "lastName": "Tamang",
        "email": "disnee@email.io",
        "birthDay": "1997-04-15T07:00:00.000Z",
        "events": [],
        "photoUrl": "/DisneeTamang.jpeg"

    },
    attendees: {
        "632cf98b142e9e8a7192da52": {
            "_id": "632cf98b142e9e8a7192da52",
            "firstName": "Demo",
            "lastName": "User",
            "email": "demo@user.io",
            "birthDay": "1992-10-26T08:00:00.000Z",
            "events": [],
            "photoUrl": "/female-profile-picture.jpeg"
        },
        "6330f7c46bd83e0bc0ef1d3b": {
            "_id": "6330f7c46bd83e0bc0ef1d3b",
            "firstName": "Karren",
            "lastName": "Siu",
            "email": "karren@email.io",
            "birthDay": "1997-06-11T07:00:00.000Z",
            "events": [],
            "photoUrl": "/KarrenSiu.jpeg"
        },
        "632cfb723fee210de997a88a": {
            "_id": "632cfb723fee210de997a88a",
            "firstName": "Ryan",
            "lastName": "Mullen",
            "photoUrl": "/RyanMullen.jpeg",
            "email": "ryan@email.io",
            "events": []
        },
        "632cf3d7167d8b826aafbc67": {
            "_id": "632cf3d7167d8b826aafbc67",
            "firstName": "Ari",
            "lastName": "Moshe",
            "email": "ari@email.io",
            "photoUrl": "/AriMoshe.jpeg",
            "birthDay": "2022-09-20T07:00:00.000Z",
            "events": []
        },
        "6330f8246bd83e0bc0ef1d43": {
            "_id": "6330f8246bd83e0bc0ef1d43",
            "firstName": "Mimi",
            "lastName": "Ly",
            "email": "mimi@email.io",
            "birthDay": "1993-10-14T07:00:00.000Z",
            "events": [],
            "photoUrl": "/MimiLy.jpeg"
        },
        "6330f7f16bd83e0bc0ef1d3f": {
            "_id": "6330f7f16bd83e0bc0ef1d3f",
            "firstName": "Matt",
            "lastName": "Teh",
            "email": "matt@email.io",
            "birthDay": "1997-02-07T08:00:00.000Z",
            "events": [],
            "photoUrl": "/MattTeh.png"
        }
    },
    comments: { test: "test" },
    eventTime: fourHoursLater,
    photoUrl: "/Boardgames.jpg"
}











const eventsArray = [event1, event2, event3, event4, event5, event6, event7, event8, event9, event10];

module.exports = {eventsArray, updateTime};