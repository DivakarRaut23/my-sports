  
  import React, { useState } from 'react';
  import { makeStyles } from '@material-ui/core/styles';
  import AppBar from '@material-ui/core/AppBar';
  import Toolbar from '@material-ui/core/Toolbar';
  import Typography from '@material-ui/core/Typography';
  import Button from '@material-ui/core/Button';
  import IconButton from '@material-ui/core/IconButton';
  import MenuIcon from '@material-ui/icons/Menu';
  import SportsCricketIcon from '@material-ui/icons/SportsCricket';
  import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
  import SportsToggle from './SportsToggle';

  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin : -2,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));


function Header () {

    const classes = useStyles();
    const [title, setTitle] = useState('Sports')

    function selectSports (e) {
        setTitle(`${e.target.value}`)
    }




    return (
        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            { (title === "Cricket") ?  <SportsCricketIcon/> : <SportsSoccerIcon />}
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {`My ${title} Score`}
            </Typography>
            <SportsToggle selectSports={selectSports} title={title} />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  
  export default Header ;

  
  