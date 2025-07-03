import React, { createContext, useContext } from 'react';

export type InitialState = Record<string, any>;

export const InitialStateContext = createContext<InitialState>({});

export const useInitialState = () => useContext(InitialStateContext);

export const InitialStateProvider = InitialStateContext.Provider; 