import React from 'react';
import { useInitialState } from '../context/InitialStateContext';

declare let window: any;

const Home: React.FC = () => {
  const state = useInitialState();
  
  return (
    <div style={{ padding: 32, textAlign: 'center' }}>
      <h1 onClick={()=>{console.log(state,'1111111111'); }}>{state.title}</h1>
      <p>{state.description}</p>
      <p>11111111111</p>
    </div>
  );
};

export default Home; 