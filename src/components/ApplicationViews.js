import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider} from "./animal/AnimalProvider"
import { AnimalList} from "./animal/AnimalList"
import { LocationProvider} from "./Location/LocationProvider"
import { LocationList} from "./Location/LocationList"
import { EmployeeProvider} from "./Employee/EmployeeProvider"
import { EmployeeList} from "./Employee/EmployeeList"
import { CustomerProvider} from "./Customer/CustomerProvider"
import { CustomerList} from "./Customer/CustomerList"
import { AnimalForm } from "./animal/AnimalForm"
import { AnimalDetail} from "./animal/AnimalDetail"
import { EmployeeDetail} from "./Employee/EmployeeDetail"
import { LocationDetail } from "./Location/LocationDetail"


export const ApplicationViews = () => {
    return (
        <>
        <AnimalProvider>
            <Route exact path="/animals">
                <AnimalList />
            </Route>

        <Route exact path="/animals/detail/:animalId(\d+)">
            <AnimalDetail />
        </Route>
        
        <CustomerProvider>
            <Route exact path="/customers">
                <CustomerList />
            </Route>
        </CustomerProvider>

        <EmployeeProvider> 
            <Route exact path="/employees">
                <EmployeeList />
            </Route>
            <Route exact path="/employees/detail/:employeeId(\d+)">
            <EmployeeDetail />
        </Route>
        </EmployeeProvider>

        <LocationProvider>
            <Route exact path="/locations">
                <LocationList />
            </Route>
        <Route exact path="/locations/detail/:locationId(\d+)">
            <LocationDetail />
        </Route>
        </LocationProvider>

        <Route exact path="/">
            <Home />
        </Route>
        
            <CustomerProvider>
                <LocationProvider>
                    <Route exact path="/animals/create">
                        <AnimalForm />
                    </Route>
                </LocationProvider>
            </CustomerProvider>
        </AnimalProvider>
        </>
    )
}
            {/* Render the location list when http://localhost:3000/ }
            <Route exact path="/">
                <Home />
            </Route>

            { Render the animal list when http://localhost:3000/animals }
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
*/
            }