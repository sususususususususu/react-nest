import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from '../../components/HomeLayout';
import { InitialStateProvider } from './../../context/InitialStateContext';

const initialState = (window as any).__initialState__ || {};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <InitialStateProvider value={initialState}>
      <Home {...initialState} />
    </InitialStateProvider>
  );
} 