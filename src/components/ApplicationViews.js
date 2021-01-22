import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from "./animal/AnimalCard"
import { LocationCard } from "./Location/LocationCard"
import { EmployeeCard } from "./Employee/EmployeeCard"
import { CustomerCard } from "./Customer/CustomerCard"
import { AnimalProvider} from "./animal/AnimalProvider"
import { AnimalList} from "./animal/AnimalList"
import { LocationProvider} from "./Location/LocationProvider"
import { LocationList} from "./Location/LocationList"
import { EmployeeProvider} from "./Employee/EmployeeProvider"
import { EmployeeList} from "./Employee/EmployeeList"
import { CustomerProvider} from "./Customer/CustomerProvider"
import { CustomerList} from "./Customer/CustomerList"


export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
                <AnimalProvider>
            <Route path="/animals">
                <h2>Animals</h2>
                    <AnimalList />
            </Route>
                </AnimalProvider>

                <LocationProvider>
            <Route path="/locations">
                <h2>Locations</h2>
                    <LocationList />
            </Route>
                </LocationProvider>            

                <EmployeeProvider>
            <Route path="/employees">
                <h2>Employees</h2>
                    <EmployeeList />
            </Route>
                </EmployeeProvider>

                <CustomerProvider>
            <Route path="/customers">
                <h2>Customers</h2>
                    <CustomerList />
            </Route>
                </CustomerProvider>
        </>
    )
}
