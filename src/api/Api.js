import React, { useState ,useEffect} from 'react';
import Axios from 'axios';

const Api = () => {

const API_KEY="MSj48ezblpQglbbk4Km1ovX8gX33"

const [matches, setMatches] = useState([])



useEffect(() => {

    Axios.get(`https://cricapi.com/api/matches?apikey=${API_KEY}`).then(
      (response) => {
        // console.log(response);
        setMatches(response.data.matches);
        console.log("Matches >>>",matches);
      }
    ).catch((error) => console.log('Error: ', error));
  

});

let d = new Date();
let year = d.getFullYear();
console.log("Date >>>", d)


return (
    <div>
     {matches.filter(match => (match.matchStarted === 'false')).map(upcomingMatch => (
    <li>
      {upcomingMatch.unique_idr}
    </li>
  ))}
    </div>


);

}



export default Api ;
