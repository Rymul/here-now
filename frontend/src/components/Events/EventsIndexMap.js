import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const EventIndexMap = ({latlng}) => {
    const [map, setMap] = useState(null)

    const eventsObj = useSelector(state => state.events)
    let events;
    if (eventsObj) {
        events = Object.values(eventsObj);
    }



    const mapRef = useRef(null)

    useEffect(() => {
        if (mapRef.current && !map) {
            setMap(new window.google.maps.Map(mapRef.current, {
                center: { lat: latlng.lat, lng: latlng.lng },
                zoom:12,
                disableDefaultUI: true,
                zoomControl: true,
                gestureHandling: 'cooperative'
            }));
        }
        new window.google.maps.Marker({
            position: { lat: latlng.lat, lng: latlng.lng },
            map: map,
            icon: {
                url: '/locationMarker.svg',
                scaledSize: new window.google.maps.Size(60, 60),
                anchor: new window.google.maps.Point(30, 30),
            },
        });
    }, [latlng])

    

    if (!events) {
        return null;
    }

    return (
        <div className="googleMap" ref={mapRef} >Map</div>
    )
}

export default EventIndexMap