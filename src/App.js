import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GameList from './components/GameList';
import Header from './components/Header';
import SportsToggle from './components/SportsToggle';
import MainScore from './components/MainScore';
import Footer from './components/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  layout: {
    marginLeft : 2,
    marginRight : 10,
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
        <Grid item xs={12} sm={2}>
          <Paper className={classes.paper}>xs=12 sm=2</Paper>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Paper className={classes.paper}>xs=12 sm=10</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}><Footer /></Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
