import './App.css';
import React, {useEffect} from 'react';

import Head from './component/Head';
import Intro from './component/Intro';
import Axios from "axios";

function App() {
  useEffect(()=> {
    Axios.get('http://localhost:3001/api/get').then((response)=>{
      console.log(response.data)
    })
  })


  return(
    <div className="App">
      <Head></Head>
      <Intro></Intro>
    </div>
  )
  
}

export default App;
