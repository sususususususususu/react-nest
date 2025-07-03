import React from 'react';
import { createRoot } from 'react-dom/client';
import ProdustList from '../../components/ProductListLayout';
import { InitialStateProvider } from '../../context/InitialStateContext';

const initialState = (window as any).__initialState__ || {};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <InitialStateProvider value={initialState}>
      <ProdustList {...initialState} />
    </InitialStateProvider>
  );
} 