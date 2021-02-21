import './App.css';
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GameList from './components/GameList';
import Header from './components/Header';
import MainScore from './components/MainScore';
import Footer from './components/Footer';
import Api from './api/Api';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginRight: "40px",
    paddingRight: "-40px",
  },
  main: {
    marginLeft : 2,
    marginRight: 4,
  },
 
  layout: {
    marginLeft : 2,
    marginRight : 10,
    backgroundColor : "green" ,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function App() {

  const classes = useStyles();
   
  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.layout}>
        <Grid item xs={12}>
          <Paper className={classes.paper}><Header /></Paper>
        </Grid>
        <Grid container spacing={2} className={classes.main}>
        <Grid item xs={12} sm={2}>
          <Paper className={classes.paper}><GameList /></Paper>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Paper className={classes.paper}><MainScore /></Paper>
        </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}><Footer/></Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
