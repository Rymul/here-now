import { Wrapper } from "@googlemaps/react-wrapper";
import EventIndexMap from "./EventsIndexMap";


function EventsIndexMapWrapper({ apiKey, latlng, events ,pins}) {


    return (
        <>
            {/* <Wrapper apiKey={apiKey}> */}
                <EventIndexMap latlng={latlng} events={events} pins={pins}/>
            {/* </Wrapper> */}
        </>
    )
}

export default EventsIndexMapWrapper