import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landingpage from './Component/Landingpage/Landingpage';
import Logininpage from './Component/Logininpage/Logininpage';
import Signuppage from './Component/Signuppage/Signuppage';
import htmlQuest from './Datas/htmlQuest';
import cssQuest from './Datas/cssQuest';
import javaQuest from './Datas/javaQuest';


const App = () => {
  return (
    <div >
      <Routes>
        <Route exact path='/' Component={Landingpage}/>
        <Route exact path='/Logininpage' Component={Logininpage}/>
        <Route exact path='/Signuppage' Component={Signuppage}/>
        <Route exact path='/htmlQuest' Component={htmlQuest}/>
        <Route path='/cssQuest' element={cssQuest}/>
        <Route path='/javaQuest' element={javaQuest}/>
      </Routes>
    </div>
  );
}

export default App;
