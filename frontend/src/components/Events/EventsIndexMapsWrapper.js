import { Wrapper } from "@googlemaps/react-wrapper";
import EventIndexMap from "./EventIndexMap";

function EventsIndexMapWrapper({ apiKey, laglng }) {


    return (
        <>
            <Wrapper apiKey={apiKey} latlng={latlng}>
                <EventIndexMap spot={spot} />
            </Wrapper>
        </>
    )
}

export default EventsIndexMapWrapper