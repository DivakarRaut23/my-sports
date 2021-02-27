import React, {useEffect, useState} from 'react';
import Game from './Game';
import Grid from '@material-ui/core/Grid';

function GameList({ game=[]}) {

  
    return (

      game.length && 
      <div style={{minHeight:'300px'}}>
        <Grid container spacing={2} style={{backgroundColor:"cornsilk"}}>
            <Grid item xs={12}>
            <Game  homeTeam={game[0]["team-1"]} awayTeam={game[0]["team-2"]}/>
            </Grid>
            <Grid item xs={12}>
            <Game  homeTeam={game[1]["team-1"]} awayTeam={game[1]["team-2"]}/>
            </Grid>
            <Grid item xs={12}>
            <Game  homeTeam={game[2]["team-1"]} awayTeam={game[2]["team-2"]}/>
            </Grid>
            
        </Grid>
      </div>
    );
  }
  
  export default GameList;
  
