import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function SportsToggle(props) {
    return (
      <div>
          <Tabs value={props.title} onChange={props.selectSports}aria-label="simple tabs example">
            <Tab label="Football" value="Football"/>
            <Tab label="Cricket" value="Cricket" />
          </Tabs>
      </div>
    );
  }
  
  export default SportsToggle;
  
