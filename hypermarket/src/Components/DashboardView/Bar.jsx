import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(2),
      width: theme.spacing(180),
      height: theme.spacing(16),
    },
  },
}));

export default function Variants() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper variant="outlined" style={{backgroundColor:'cyan'}}>
      
  <div>
    <img  src="https://admin.yelo.red/en/assets/images/cfo-banner.gif"/>
  </div>
  <div>
    <span>We noticed that you haven't tried placing an order yet. Go ahead and explore your customer's journey. </span>
    <a href='https://www.youtube.com'>Place Your First Order </a>
  </div>
      </Paper>
       </div>
  );}