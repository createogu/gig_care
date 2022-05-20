import { useState } from 'react';
import './App.css';
import Main from './pages/main.js';

import PageFooter from './components/page-footer/index.js';
import Data from './data/data.js';


function App() {
  const [value, setValue] = useState('home');
  const menuList = [...Data];

  return (
    <div className="App">
      
      <Main menuList={menuList} value={value} setValue={setValue}>
      </Main>
      <PageFooter value={value} setValue={setValue} />
    </div>
  );
}

export default App;
