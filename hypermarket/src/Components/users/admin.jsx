import React from 'react';

import { withRouter } from 'react-router-dom';
const Admin = (props) => {
  

return ( <> {props.children}</> );
}
 
export default withRouter(Admin);