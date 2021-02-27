import {useState} from 'react';
import {Tabs, Tab} from '@material-ui/core';


function Footer({formatHandler}) {

  // const [value, setValue] = useState(0);

// const changeHandler = (e,value) => {
//       setValue(value);
// }

    return (
      <div style={{alignContent:'center'}}>
        <Tabs indicatorColor="primary">
          <Tab label="Twenty20" onClick={() => formatHandler('Twenty20')}/>
          <Tab label="One Day" onClick={() => formatHandler('One Day')}/>
          <Tab label="Test" onClick={() => formatHandler('Test')}/>
        </Tabs>



      </div>
      
    );
  }
   
  export default Footer;
  
