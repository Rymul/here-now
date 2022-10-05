

const EventsIndexNoEvents = ({filter}) => {

    const message = () => {
        if (filter === "owned") {
            return ('You are not hosting any events.')
        } else if (filter === "attending") {
            return ('You are not attending any events.')
        }
        else {
            return (<>No events have been created near you. <br /> Please login as the demo user to see example events.</>)
        }
    }

    return (
        <>
        <div className="events-index-no-event-container">
            {message()}
        </div>
        </>
    )
}

export default EventsIndexNoEvents; 