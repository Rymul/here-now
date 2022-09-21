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
    
    if (timeDiffInSeconds < 60) return String(timeDiffInSeconds) + "s";
    if (timeDiffInSeconds < 3600) return String(Math.ceil(timeDiffInSeconds/60)) + "m";
    if (timeDiffInSeconds < 86400) return String(Math.ceil(timeDiffInSeconds/3600)) + "h";
    if (timeDiffInSeconds >= 86400) return String(Math.ceil(timeDiffInSeconds/86400)) + "d";

}