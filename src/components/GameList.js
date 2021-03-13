import React, {useState}from 'react';
import Game from './Game';
import Grid from '@material-ui/core/Grid';
import Pagination from './Pagination';




function GameList({handleScore, game=[]}) {

  const [display, setDisplay] = useState(0);

  const handlePagination = page => {

    setDisplay(page)

  }

  const gameList = game.map((g,index) => {
    return (
     <Grid key={g.matchId} item xs={12} md={6} lg={4}>
     <Game
     handleScore={handleScore} 
     uniqueId={game[index].unique_id} 
     homeTeam={game[index]["team-1"]} 
     awayTeam={game[index]["team-2"]}
     date={game[index].date}
     index={index}
     game={game}
     />
     </Grid>

    )
  })

  const displayPage = gameList.slice(display, display +6)

  

  console.log("gameList .>>>", gameList)

  
    return (

      game.length && 
      <div>
        <Grid container direction="row" spacing={2}>
         {displayPage}
           <Grid item xs={12}>
            <Pagination handlePagination={handlePagination} count={game.length} page={Math.ceil(game.length/6)}/>
           </Grid>
            
        </Grid>
      </div>
    );
  }
  
  export default GameList;
  
