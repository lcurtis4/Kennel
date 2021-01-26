import React from "react"
import "./Location.css"
import { Link } from "react-router-dom"

export const LocationCard = (props) => (
    <section className="location">
        <h3 className="location_name">
            <Link to={`/locations/detail/${props.location.id}`}>
                { props.location.name }
            </Link>
        </h3>
        <address className="location_address">{props.location.address}</address>
    </section>
)