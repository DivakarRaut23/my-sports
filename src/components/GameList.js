import React from 'react';
import Game from './Game';
import Grid from '@material-ui/core/Grid';

function GameList() {
    return (
      <div style={{minHeight:'300px'}}>
        <Grid container spacing={2} style={{backgroundColor:"cornsilk"}}>
            <Grid item xs={12}>
            <Game  homeTeam={'AUD'} awayTeam={'IND'}/>
            </Grid>
            <Grid item xs={12}>
            <Game  homeTeam={'PAK'} awayTeam={'RSA'}/>
            </Grid>
            <Grid item xs={12}>
            <Game  homeTeam={'BAN'} awayTeam={'WI'}/>
            </Grid>
        </Grid>
      </div>
    );
  }
  
  export default GameList;
  
