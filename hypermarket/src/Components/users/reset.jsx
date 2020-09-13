import React from 'react';

import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';
import { toast } from 'react-toastify';

const ResetPassword = (props) => {
  const[gmail,setgmail]=React.useState("")


    return ( 
     
    <Grid container spacing={2}>
          
          <Grid item xs={12} md={6} sm={6}>
            <h3 style={{paddingLeft:"400px"}}>Digital Ecomrce Store</h3>


          </Grid>
      
            <Grid item xs={12} md={12} sm={6}         style={{padding:"30px"}}>
              <TextField
      
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="gmail"
                label="Gmail"
                value={gmail}
          onChange={(e) => {
            setgmail(e.target.value);
          }}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} md={12} sm={6} style={{paddingLeft:"400px"}}>
            <Button  color="primary" variant="contained" >Reset</Button>
            </Grid>
         </Grid>

     );
}
 
export default ResetPassword;