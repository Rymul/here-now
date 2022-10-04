export const updatePayload = (payload) => {
    const updatedLoad = {};
    payload.forEach(object => {
        updatedLoad[object._id] = object
    });
    return updatedLoad
}

export const createdAgoTimeParser = (timeAsString) => {
    const rightNow = new Date();
    const timeDiffInSeconds = Math.ceil((rightNow -  (new Date(timeAsString)))/1000)
    if (timeDiffInSeconds < 0) return String(0) + " seconds";
    if (timeDiffInSeconds < 60) return String(timeDiffInSeconds) + " seconds";
    if (timeDiffInSeconds < 3600) return String(Math.ceil(timeDiffInSeconds/60)) + " minutes";
    if (timeDiffInSeconds < 216000) return String(Math.ceil(timeDiffInSeconds/3600)) + " hours";
    if (timeDiffInSeconds < 5184000) return String(Math.ceil(timeDiffInSeconds/86400)) + " days";
    if (timeDiffInSeconds < 155520000) return String(Math.ceil(timeDiffInSeconds/5184000)) + " months"
    if (timeDiffInSeconds >= 1866240000) return String(Math.ceil(timeDiffInSeconds/155520000)) + " years"
}

export const calcAge = (birthDay) => {
    let diff = new Date() - new Date(birthDay)
    const age = Math.floor(diff/(1000 * 3600 * 24 * 365))
    return age
}

export const  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// takes in a boolean for tomorrow, returns either todays date or
//tomorrows date with time in Date Time format 
export const getNewDate = (tomorrow, eventTime) => {
    const dateObj = new Date();
    let month = dateObj.getMonth() + 1; //months from 1-12
    if (month < 10) month = '0' + month;
    let day = !tomorrow ? dateObj.getDate() : dateObj.getDate()+ 1 ;
    if (day < 10) day = '0' + day;
    const year = dateObj.getFullYear();
    
    return year + "-" + month + "-" + day + 'T' + eventTime + ':00Z';

}


