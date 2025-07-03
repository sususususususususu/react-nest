import React from 'react';
import { useInitialState } from '../context/InitialStateContext';

declare let window: any;

const ProdustList: React.FC = () => {
  const state = useInitialState();
  
  return (
    <div style={{ padding: 32, textAlign: 'center' }}>
      <h1 onClick={()=>{console.log(state,'22222222222'); }}>{state.title}</h1>
      <p>{state.description}</p>
      <p>2222222222222</p>
    </div>
  );
};

export default ProdustList; 