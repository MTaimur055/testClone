import React from 'react';
import TopMenue from './Components/topmenu';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Components/home';
import Contact from './Components/contact';

import NotFound from './Components/Notfound'

import Login from './Components/users/login';
import Register from './Components/users/register';
import { ToastContainer } from 'react-toastify';
import Analytics from './Components/Analytics'
import Customers from './Components/customers';

import OrderData from './Components/ordersdata'
import Lastmonth from './Components/lastmonth';
import ResetPassword from './Components/users/reset';
import Newpassword from './Components/users/newpassord';
import index from './Components/DashboardView/index';
import CustomerListView from './Components/Restaurants/index1';
import { Grid } from '@material-ui/core';

import StickyFooter from './Components/footer';

function App() {
  return (
    
    <Router>
      <div>
      <ToastContainer />
      
      
      
      <TopMenue />
    

     
      <Switch>

      <Route path="/register"exact component={Register} />
     <Route path="/login" exact component={Login} />
     <Route path="/reset"exact component={ResetPassword} />
     <Route  path="/reset/:token" exact component={Newpassword} />
     <Route path="/"exact component={Home} />
    <Route path="/Home1" component={index} />
    <Route path="/Analytics" component={Analytics} />
       <Route path="/customers" component={Customers}        />
       <Route path="/ordersdata" component={OrderData}     />
       <Route path="/lastmonth" component={Lastmonth}   />
      <Route path="/contact-us" component={Contact} />
      <Route path="/index1" component={CustomerListView} />
    
      <Route path="/not-found" component={NotFound} />

      <Redirect to="/not-found" />
      

      </Switch>
      <StickyFooter />
      </div>
    </Router>
    
  );
}

export default App;
