import React from 'react';
import userService from '../../Service/userService';
import { withRouter } from 'react-router-dom';





const Auth = (props) => {
    

return ( <> {props.children}</> );
}
 
export default withRouter(Auth);