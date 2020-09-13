import React from "react"
import {Link} from "react-router-dom"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Button,  Avatar, IconButton } from "@material-ui/core";
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import ControlCameraIcon from '@material-ui/icons/ControlCamera';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { withStyles } from "@material-ui/styles";
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Site from './sites';
import Menu from '@material-ui/core/Menu';
import Divider from '@material-ui/core/Divider';




const useStyles = makeStyles((theme) => ({
    linke: {
       color:"white",
       paddingRight:"1rem"
    },
    add_space:{
      
    },
    title: {
      flexGrow: 1,
    },

  }));
  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      padding: '0 4px',
    },
  }))(Badge);
const TopMenue = () => {
    const classes=useStyles();
    const[count,setcount]=React.useState([])
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  function counts(items) {
    return items.map(({ quantity }) => quantity).reduce((sum, i) => sum + i, 0);
  }
  

  


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    return ( 
    
      
        <AppBar position="static" style={{background:"grey"}}>
      
         <Toolbar>
         <Typography>
          <Link to="/" className={classes.linke} > Home</Link>
        </Typography>   
        
         <Typography component="h1" variant="h5" color="inherit" noWrap className={classes.title}>
          <img src='https://admin.yelo.red/en/assets/images/yelo-logo.png' alt='logo'></img>
         
          </Typography>
          <Site/>
          <IconButton color="inherit">
            
              < ContactSupportIcon />
          
          </IconButton>
          <IconButton color="inherit">
          
              <ControlCameraIcon />
          
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
       
        
    <Typography>
      
          <Link to="/login" className={classes.linke}>Login</Link>
        </Typography> 
        <Typography>
          <Link to="/register" className={classes.linke}>Register</Link>
        </Typography> 
         
        
          <div>
            <IconButton
              aria-label="U"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              
             
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              
              <Divider />
              
              <Button color="primary" onClick={handleClose}>Profile</Button> 
              <Button color="primary" 
         >Logout</Button>
            </Menu>
          </div>
        




        



  

      









    {/*  {!userService.isLoggedIn () ? ( <>
        <Typography>
          <Link to="/login" className={classclr.linke}>Login</Link>
        </Typography> 
        <Typography>
          <Link to="/register" className={classclr.linke}>Register</Link>
        </Typography> 
        </>    ):(
        <Button  variant="contained" 
        onClick={(e) => {
          userService.logout();
          window.location.reload()
          
        }}


        
        
        
        >Logout {userService.getLoggedInUser().username +" "+ userService.getLoggedInUser().role}
        
        
        </Button>
                   
        )}
        
      */}
     
        </Toolbar>   
        </AppBar>
       
       

        
     );
  
}
 
export default TopMenue;