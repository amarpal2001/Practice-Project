// import logo from './logo.svg';
import React from 'react'
import './App.css';
// import AmarReduce from './Components/AmarReduce';
import DarkMode from './Components/useContext/DarkMode';
// import ComX from './Components/useContext/ComX';
// import Form from './Components/Form';
// import Com1 from './Components/useContext/Com1';
// import Time from './Components/useContext/Time';
// import ComA from './Components/useContext/ComA';
// import AmarReduce from './Components/AmarReduce';
import AmarReduce2 from './Components/AmarReduce2'
import Hero from './Components/ErrorBoundary/Hero';
import ErrorB from './Components/ErrorBoundary/ErrorB';
import Rahul from './Components/Hoc/Rahul';
import Sonam from './Components/Hoc/Sonam';
import Pure from './Components/Pure';
// import ThapaReducer from './Components/ThapaReducer';



function App() {
  return (
    <div className="App">
      {/* <DarkMode/> */}
      {/* <Time/> */}
      {/* <Form/> */}
      {/* <ComA/> */}
      {/* <ComX/> */}
      {/* <Com1/> */}
      {/* <AmarReduce/> */}
      {/* <AmarReduce2/> */}
      {/* <ThapaReducer/> */}
      {/* <ErrorB>
        <Hero heroName="Batman"/>
        </ErrorB>
      <ErrorB>
      <Hero heroName="Superman"/>

      </ErrorB>
      <ErrorB>
      <Hero heroName="Joker"/>

      </ErrorB> */}
      <Rahul camp="120"/>
      <Sonam camp="140"/>
      {/* <Pure/> */}
    </div>
  );
}
export default App;
