import React, { useState ,useEffect} from 'react';
import Axios from 'axios';

const Api = (props) => {

const API_KEY=  process.env.REACT_APP_CRIC_INFO





useEffect(() => {

  console.log('test')

    Axios.get(`https://cricapi.com/api/matches?apikey=${API_KEY}`).then(
      (response) => {
      
        props.setMatches(response.data.props.matches);
        
      }
    ).catch((error) => console.log('Error: ', error));

    console.log("Matches >>>",props.matches);
  

},[]);

let d = new Date();
let year = d.getFullYear();
console.log("Date >>>", d)


return (
    <div>
     {props.matches.map(upcomingMatch => (
    <li>
      {upcomingMatch.homeTeam}
    </li>
  ))}
    </div>


);

}



export default Api ;
