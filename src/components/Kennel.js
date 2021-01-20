import React from "react"
import { Animal } from "./animal/Animal"
import "./Kennel.css"
import { Customer } from "./Customer/Customer"
import { Employee } from "./Employee/Employee"
import { Location } from "./Location/Location"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
            <Animal />
            <Animal />
            <Animal />
        </article>
        
        <h2>Employees</h2>
        <article className="employee">
            <Employee />
            <Employee />
            <Employee />
        </article>
        
        <h2>Locations</h2>
        <article className="location">
            <Location />
            <Location />
        </article>
        
        <h2>Customer</h2>
        <article className="customers">
            <Customer />
            <Customer />
            <Customer />
            <Customer />
        </article>

    </>
)