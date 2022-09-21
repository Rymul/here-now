import { Wrapper } from "@googlemaps/react-wrapper";
import EventIndexMap from "./EventIndexMap";

function EventsIndexMapWrapper({ apiKey, spot }) {


    return (
        <>
            <Wrapper apiKey={apiKey}>
                <EventIndexMap spot={spot} />
            </Wrapper>
        </>
    )
}

export default EventsIndexMapWrapper