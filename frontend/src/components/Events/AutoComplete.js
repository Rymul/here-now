import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import './AutoComplete.css'


const AutoComplete = ({ setAddress, setLat, setLng })  => {

    const latlng = useSelector(state => state.geolocation)

    const AutoCompleteRef = useRef();
    const auto = useRef(null)
    let bounds = new window.google.maps.LatLngBounds();
    bounds.extend(new window.google.maps.LatLng(latlng.lat + 1, latlng.lng + 1))
    bounds.extend(new window.google.maps.LatLng(latlng.lat + 1, latlng.lng - 1))
    bounds.extend(new window.google.maps.LatLng(latlng.lat - 1, latlng.lng + 1))
    bounds.extend(new window.google.maps.LatLng(latlng.lat - 1, latlng.lng - 1))

    const options = {
        types: ['establishment'],
        fields: ['formatted_address', 'geometry', 'photos'],
        bounds: bounds,
        componentRestrictions: { 'country': ['US'] }
    }

    useEffect(()=>{
        AutoCompleteRef.current = new window.google.maps.places.Autocomplete(
            auto.current,
            options
        );

        AutoCompleteRef.current.addListener("place_changed", async function () {
            const place = await AutoCompleteRef.current.getPlace();
            setAddress(place.formatted_address)
            setLat((place.geometry.viewport.Ab.hi + place.geometry.viewport.Ab.lo)/2)
            setLng((place.geometry.viewport.Va.hi + place.geometry.viewport.Va.lo) / 2)
        })
    },[])


    return (
        <>
            <input className="autocomplete" ref={auto} />
        </>
    )

}

export default AutoComplete;