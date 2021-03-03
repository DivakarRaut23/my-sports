import {Tabs, Tab} from '@material-ui/core';


function Footer({formatHandler}) {



    return (
      <div style={{alignContent:'center'}}>
        <Tabs indicatorColor="primary">
          <Tab value="Twenty20" label="Twenty20" onClick={() => formatHandler('Twenty20')}/>
          <Tab value="ODI" label="ODI" onClick={() => formatHandler('ODI')}/>
          <Tab value="Test" label="Test" onClick={() => formatHandler('Test')}> Test
            </Tab>  
        </Tabs>
      </div>
      
    );
  } 
   
  export default Footer;
  
