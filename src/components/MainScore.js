import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function MainScore({mainScore,setMainScore}) {
  const classes = useStyles();
  console.log("from Main Score >>" ,mainScore)

 let cricScore = {
   teamOneScore : "Scores Not Available",
  teamTwoScore : "Scores Not Available"
 }

 if(mainScore.score){




  let score = mainScore.score && mainScore.score.split("/");
  let score2 = score.length && score[1].split("v");

  cricScore.teamOneScore = score[0].match(/\d+/g) + "/" + score2[0]
  console.log("Team One Score >>", cricScore.teamOneScore)

  cricScore.teamTwoScore = score2[1].match(/\d+/g) + "/" + score[2]
  console.log("Team Two Score >>", cricScore.teamTwoScore)
  console.log("From Main score Split",score)
  
 }

 console.log("Team Scores >>>>" , cricScore)


  

  
  
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         {mainScore['team-1']}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         {cricScore.teamOneScore && cricScore.teamOneScore}
        </Typography>
        <Typography variant="h5" component="h2">
        VS
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        {mainScore['team-2']}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        {cricScore.teamTwoScore && cricScore.teamTwoScore}
        </Typography>
        </CardContent>
      <CardActions>
        <Button onClick={() => setMainScore() }size="small">Go Back</Button>
      </CardActions>
    </Card>
  );
}

  
