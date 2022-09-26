import { Wrapper } from "@googlemaps/react-wrapper";
import EventIndexMap from "./EventsIndexMap";


function EventsIndexMapWrapper({ apiKey, latlng }) {


    return (
        <>
            {/* <Wrapper apiKey={apiKey}> */}
                <EventIndexMap latlng={latlng} />
            {/* </Wrapper> */}
        </>
    )
}

export default EventsIndexMapWrapper