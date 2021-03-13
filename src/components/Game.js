  import React from 'react';
  import { makeStyles } from '@material-ui/core/styles';
  import Card from '@material-ui/core/Card';
  import CardActions from '@material-ui/core/CardActions';
  import CardContent from '@material-ui/core/CardContent';
  import Button from '@material-ui/core/Button';
  import Typography from '@material-ui/core/Typography';

  
  const useStyles = makeStyles({
    root: {
      Width: 243,
      Height : 110,
      backgroundColor: "#90caf9",
    },
    title: {
      fontSize: 14,
    },
    button: {
      padding: 5,
    },
  });
  
  export default function Game({homeTeam,awayTeam, handleScore,uniqueId,game, date,index}) {
    const classes = useStyles();

    
      
    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
           {homeTeam}
          </Typography>
          <Typography variant="h5" component="h2">
           VS
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          {awayTeam}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          {date.slice(0,10)} / {game[index].matchStarted ? "Yes" : "No"} 
        {console.log(`${homeTeam} >>`,game[index].matchStarted)}
          </Typography>
        
        </CardContent>
        <CardActions className={classes.button}>
          <Button  disabled={(!game[index].matchStarted)} onClick={()=>handleScore(uniqueId)}size="small" color="primary" variant="contained">Check Score</Button>
        </CardActions>
      </Card>
    );
  }
  






  
