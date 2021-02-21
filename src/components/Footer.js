import {useState} from 'react';
import {Tabs, Tab} from '@material-ui/core';


function Footer() {

  const [value, setValue] = useState(0);

const changeHandler = (e,value) => {
      setValue(value);
}

    return (
      <div style={{alignContent:'center'}}>
        <Tabs value={value} onChange={changeHandler} indicatorColor="primary">
          <Tab label="Twenty20" />
          <Tab label="One Day" />
          <Tab label="Test" />
        </Tabs>
      </div>
    );
  }
   
  export default Footer;
  
