import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams } from "react-router-dom"

export const LocationDetail = () => {
    const {getLocationById } = useContext(LocationContext)

        const [location, setLocation] = useState({})

        const {locationId} = useParams();
    
    useEffect(() => {
        console.log("useEffect", locationId)
        getLocationById(locationId)
        .then((response) => {
            setLocation(response)
        })
    }, [])
debugger
    return (
        <section className="location">
            <h3 className="location__name">{location.name}</h3>
            <div className="location__address">Address: {location.address}</div>
        </section>
    )
}