import React from 'react';
import Box from '@material-ui/core/Box'
import Selectors from './Components/Selectors';
import RadioSelectors from './Components/RadioSelectors';
import TitleInput from './Components/TitleInput';

function App() {
  return (
    <div>
     <TitleInput></TitleInput>
     <Selectors></Selectors>
     <RadioSelectors></RadioSelectors>
    </div>
  );
}

export default App;
