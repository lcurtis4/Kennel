import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"

export const AnimalCard = ({ animal }) => (
    <section className="animal">
        {/* <h3 className="animal_name">{animal.name}</h3> */}           
            <Link to={`/animals/detail/${animal.id}`}>
                { animal.name }
            </Link>
        <div className="animal_breed">Breed: {animal.breed}</div>
    </section>
)