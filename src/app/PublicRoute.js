
import { Route,Redirect } from "react-router-dom"

const PublicRoute = ({component : Component,isAuthenticated,...children}) => {
    return(
        <Route
            render ={
                props => {
                    // isAuthenticated  ?  ( <Redirect to="/"/>) : (<Component {...props} {...children}  />)
                    <Component {...props} { ...children}/>
                }
            }
        />
    )
}

export default PublicRoute;