import {Tabs, Tab} from '@material-ui/core';


function Footer({formatHandler}) {



    return (
      <div style={{alignContent:'center'}}>
        <Tabs indicatorColor="primary">
          <Tab label="Twenty20" onClick={() => formatHandler('Twenty20')}/>
          <Tab label="ODI" onClick={() => formatHandler('ODI')}/>
          <Tab label="Test" onClick={() => formatHandler('Test')}/>
        </Tabs>



      </div>
      
    );
  }
   
  export default Footer;
  
