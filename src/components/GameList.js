import React from 'react';
import Game from './Game';
import Grid from '@material-ui/core/Grid';

function GameList({handleScore, game=[]}) {

  
    return (

      game.length && 
      <div>
        <Grid container direction="row" spacing={2}>
            <Grid item xs={3}>
            <Game handleScore={handleScore} uniqueId={game[0].unique_id} homeTeam={game[0]["team-1"]} awayTeam={game[0]["team-2"]}/>
            </Grid>
            <Grid item xs={3}>
            <Game handleScore={handleScore} uniqueId={game[1].unique_id} homeTeam={game[1]["team-1"]} awayTeam={game[1]["team-2"]}/>
            </Grid>
            <Grid item xs={3}>
            <Game handleScore={handleScore} uniqueId={game[2].unique_id} homeTeam={game[2]["team-1"]} awayTeam={game[2]["team-2"]}/>
            </Grid>
            <Grid item xs={3}>
            <Game handleScore={handleScore} uniqueId={game[3].unique_id} homeTeam={game[3]["team-1"]} awayTeam={game[3]["team-2"]}/>
            </Grid>
            <Grid item xs={3}>
            <Game handleScore={handleScore} uniqueId={game[4].unique_id} homeTeam={game[4]["team-1"]} awayTeam={game[4]["team-2"]}/>
            </Grid>
            <Grid item xs={3}>
            <Game handleScore={handleScore} uniqueId={game[5].unique_id} homeTeam={game[5]["team-1"]} awayTeam={game[5]["team-2"]}/>
            </Grid>
            <Grid item xs={3}>
            <Game handleScore={handleScore} uniqueId={game[6].unique_id} homeTeam={game[6]["team-1"]} awayTeam={game[6]["team-2"]}/>
            </Grid>
            
        </Grid>
      </div>
    );
  }
  
  export default GameList;
  
