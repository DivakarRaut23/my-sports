import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function SportsToggle() {
    return (
      <div>
          <Tabs aria-label="simple tabs example">
            <Tab label="Football" />
            <Tab label="Cricket"  />
          </Tabs>
      </div>
    );
  }
  
  export default SportsToggle;
  
