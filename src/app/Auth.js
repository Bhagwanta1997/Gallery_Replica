import { Route , Redirect} from "react-router-dom";

export const PublicRoute = ({component : Component,isAuthenticated,...children}) => {
        return(
            <Route
                render ={
                    props => {
                        isAuthenticated  ?  ( <Redirect to="/"/>) : (<Component {...props} {...children}  />)
                    }
                }
            />
        )
}

export const PrivateRoute = ({ component : Component,isAuthenticated,...children}) => {    
    if(isAuthenticated === true){
        return(<Route {...children} render={props => <Component {...props} />} />);
    }
    return(<Redirect to="login"/>)
} 