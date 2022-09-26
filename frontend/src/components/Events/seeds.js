    const rightNow = new Date();
    const tomorrow = new Date(rightNow)
    tomorrow.setDate(tomorrow.getDate() + 1)
    const twoHoursLater = new Date()
    twoHoursLater.setHours(twoHoursLater.getHours() + 2)
    twoHoursLater.setMinutes(0)
    const fourHoursLater = new Date()
    fourHoursLater.setHours(fourHoursLater.getHours() + 4)
    fourHoursLater.setMinutes(0)
    const sixHoursLater = new Date()
    sixHoursLater.setHours(sixHoursLater.getHours() + 6)


    export const event1 = {
        title: 'Corgi Collective',
        description: "Let's go walk our corgi friends at Golden Gate Park together and talk about how great and difficult it can sometimes be to be a Corgi owner!",
        address: "Golden Gate Park Dog Play Area Main Entrance",
        lat: 37.5,
        lng: -122.3,
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
        comments: "hello",
        eventTime: tomorrow,
        photoUrl: "https://dogtime.com/assets/uploads/gallery/pembroke-welsh-corgi-dog-breed-pictures/prance-8.jpg"
    }

    export const event2 = {
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
        comments: "hello",
        eventTime: sixHoursLater,
        photoUrl: "https://catercow.imgix.net/uploads/photo/image/54247/Q5b0fcCxRECPn7BiiJLf_2Bpackages-9390-rQVkQwZLTO4RQm8ZHnSZ_Frozen_20Fruit_20Teas_010.jpg?q=80&fit=crop&crop=faces&mark-align=right&mark-pad=0&mark-y=10&mark-h=0.11&mark=https%3A%2F%2Fcatercow.s3.amazonaws.com%2Fverifiedphoto%402x.png&w=639&h=426&auto=compress%2Cformat&s=ee4a7351fc9ca660f05df9159051046b"
    }

    export const event3 = {
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
        comments: "hello",
        eventTime: fourHoursLater,
        photoUrl: "https://townsquare.media/site/801/files/2015/09/White-Men-Cant-Jump-basketball-scene.jpg?w=980&q=75"
    }

    export const event4 = {
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
        comments: "hello",
        eventTime: twoHoursLater,
        photoUrl: "https://pbs.twimg.com/media/E93Q3K1WYAAFs-J.jpg"
    }