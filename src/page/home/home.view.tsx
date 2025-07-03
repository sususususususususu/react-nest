import React from 'react';
import Home from '../../components/HomeLayout';
import { InitialStateProvider } from '../../context/InitialStateContext';

const HomeEntry = (props: any) => (
  <InitialStateProvider value={props}>
    <Home {...props} />
  </InitialStateProvider>
);

export default HomeEntry; 