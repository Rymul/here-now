import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const EventIndexMap = ({latlng, events}) => {
    const [map, setMap] = useState(null);
    const [pinsDropped, setPinsDropped] = useState(false);

    
    // const eventsObj = useSelector(state => state.events)
    // let events;
    // if (eventsObj) {
    //     events = Object.values(eventsObj);
    // }
    const marker = useRef(null)

    const pins = useRef([]);

    window.pins = pins;

    const mapRef = useRef(null)

    const handleNavigateBack = () => {
        
    }

    useEffect(() => {
        document.addEventListener('popstate', handleNavigateBack);
        return () => {
            document.removeEventListener('popstate', handleNavigateBack)
        }
    }, [handleNavigateBack])

    
    useEffect(() => {
        // alert(pinsDropped)
        if (mapRef.current && !map) {
            setMap(new window.google.maps.Map(mapRef.current, {
                center: { lat: 39.8283, lng: -98.5795 },
                zoom:3,
                disableDefaultUI: true,
                zoomControl: true,
                gestureHandling: 'cooperative'
            }));
        }
        let bounds = new window.google.maps.LatLngBounds();
        if (latlng.lat && !!map) {
            if (pins.current.length === 0) {
                map.panTo({ lat: latlng.lat, lng: latlng.lng }) ;
                bounds.extend(new window.google.maps.LatLng(latlng.lat, latlng.lng));
            }
            if (map.getZoom() === 3) {map.setZoom(12);}
            if (pins.current.length === 0 && !pinsDropped) {
                setPinsDropped(true);
                // setTimeout(
                //     () => { 
                        
                        events.map((event) => {
                            let marker;
                            marker = new window.google.maps.Marker({
                                position: {
                                    lat: event.lat,
                                    lng: event.lng
                                },
                                map: map,
                                animation: window.google.maps.Animation.DROP,
                                icon: {
                                    url: '/pin.svg',
                                    scaledSize: new window.google.maps.Size(40, 40),
                                    anchor: new window.google.maps.Point(20, 40)
                                },
                            });
                            pins.current.push(marker);
                            marker.addListener("click", () => {
                                Array.from(document.getElementsByClassName('event-list-item-container')).map((element)=>element.classList.remove("active"))
                                const domElement=document.getElementById(event._id)
                                domElement.classList.add("active");
                                domElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            })
                            bounds.extend(new window.google.maps.LatLng(event.lat, event.lng))
                        })
                        if (pins.current.length > 0 ) {
                            map.fitBounds(bounds);
                            
                        }
                //     }, 500
                // )

            }
        }
        if (marker.current !== null) {
            marker.current.setMap(null);
            marker.current = null;
        }

        if (marker.current === null && !!map) {

            marker.current = new window.google.maps.Marker({
                position: { lat: latlng.lat, lng: latlng.lng },
                map: map,
                icon: {
                    url: '/locationMarker.svg',
                    scaledSize: new window.google.maps.Size(60, 60),
                    anchor: new window.google.maps.Point(30, 30),
                },
            })
        }
        // new window.google.maps.Marker({
        //     position: { lat: latlng.lat, lng: latlng.lng },
        //     map: map,
        //     icon: {
        //         url: '/locationMarker.svg',
        //         scaledSize: new window.google.maps.Size(60, 60),
        //         anchor: new window.google.maps.Point(30, 30),
        //     },
        // });
    }, [latlng, events])

    

    if (!events) {
        return null;
    }

    return (
        <div className="googleMap" ref={mapRef} >Map</div>
    )
}

export default EventIndexMap