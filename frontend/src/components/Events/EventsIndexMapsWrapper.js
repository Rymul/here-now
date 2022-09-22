import { Wrapper } from "@googlemaps/react-wrapper";
import EventIndexMap from "./EventsIndexMap";


function EventsIndexMapWrapper({ apiKey, latlng }) {


    return (
        <>
            <Wrapper apiKey={apiKey} latlng={latlng}>
                <EventIndexMap latlng={latlng} />
            </Wrapper>
        </>
    )
}

export default EventsIndexMapWrapper