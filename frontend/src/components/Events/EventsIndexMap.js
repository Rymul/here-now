
const EventIndexMap = () => {
    const [map, setMap] = useState(null)
    const mapRef = useRef(null)

    useEffect(() => {
        if (mapRef.current && !map) {
            setMap(new window.google.maps.Map(mapRef.current, {
                center: { lat: spot.latitude, lng: spot.longitude },
                zoom: 10,
                disableDefaultUI: true,
                zoomControl: true,
                gestureHandling: 'cooperative'
            }));
        }
    }, [mapRef, map, spot.latitude, spot.longitude])

    return (
        <div className="googleMap" ref={mapRef} >Map</div>
    )
}