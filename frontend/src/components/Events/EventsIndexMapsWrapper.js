import { Wrapper } from "@googlemaps/react-wrapper";
import EventIndexMap from "./EventsIndexMap";


function EventsIndexMapWrapper({ apiKey, latlng, events }) {


    return (
        <>
            {/* <Wrapper apiKey={apiKey}> */}
                <EventIndexMap latlng={latlng} events={events}/>
            {/* </Wrapper> */}
        </>
    )
}

export default EventsIndexMapWrapper