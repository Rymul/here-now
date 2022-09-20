export const updatePayload = (payload) => {
    const updatedLoad = {};
    payload.forEach(object => {
        updatedLoad[object._id] = object
    });
    return updatedLoad
}