import { Route ,Redirect} from "react-router-dom";

const PrivateRoute = ({ component : Component,isAuthenticated,...children}) => {    
    if(isAuthenticated === true){
        return(<Route {...children} render={props => <Component {...props} />} />);
    }
    else{
    return(<Redirect to="login"/>)
    } 
}
export default PrivateRoute;