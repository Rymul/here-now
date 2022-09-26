import { Wrapper } from "@googlemaps/react-wrapper";
import EventShowMap from "./EventsShowMap";



function EventShowMapWrapper({ apiKey, event }) {
    const latlng = { lat: event.lat, lng: event.lng }

    return (
        <>
            {/* <Wrapper apiKey={apiKey} latlng={latlng}> */}
                <EventShowMap latlng={latlng} />
                {/* <EventIndexMap latlng={latlng} /> */}
            {/* </Wrapper> */}
        </>
    )
}

export default EventShowMapWrapper