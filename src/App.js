import './App.css';
import React, {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GameList from './components/GameList';
import Header from './components/Header';
import MainScore from './components/MainScore';
import Footer from './components/Footer';
import Axios from 'axios';


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
    backgroundColor : "orange" ,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  mainscore : {
    fontSize : 40,
    padding : 0,
    alignContent : 'center',
  },
}));


function App() {

  const API_KEY=  process.env.REACT_APP_CRIC_INFO
  const [matches, setMatches] = useState([])
  const [matchFormat, setMatchFormat] =  useState('Twenty20');
  const [game, setGame] = useState();
  const classes = useStyles();

  useEffect(() => {
    console.log('from use effect')
  
    matchFormat.length && Axios.get(`https://cricapi.com/api/matches?apikey=${API_KEY}`).then(
        (response) => {
        
          setMatches(response.data.matches);
          
        }
      ).catch((error) => console.log('Error: ', error));
  
      console.log("Matches >>>",matches);
    
  
  },[game]);

  const formatHandler = (tabValue) => {
    setMatchFormat(tabValue)

    switch(tabValue) {
      case "Twenty20":
        setGame(matches.filter((match) => match.type==="Twenty20"))
        break;
      case "ODI":
        setGame(matches.filter((match) => match.type==="ODI"))
        break;
      default:
        setGame(matches.filter((match) => match.type===""))
    }

    


  }
   
  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.layout}>
        <Grid item xs={12}>
          <Paper className={classes.paper}><Header /></Paper>
        </Grid>
        <Grid container spacing={2} className={classes.main}>
        <Grid item xs={12} sm={2}>
          <Paper className={classes.paper}><GameList game={game}/></Paper>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Paper className={classes.mainscore}><MainScore /></Paper>
        </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}><Footer  formatHandler={formatHandler}/></Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
