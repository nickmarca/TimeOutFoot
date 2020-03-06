import React, {createContext, useContext, useReducer} from 'react';
import {IState, initialState, reducer} from '../App';

type action = {type: string; payload: any};

type tReducer = (s: IState, a: action) => IState;

type Props = {
  reducer: tReducer;
  initialState: IState;
};

const initialContext: [IState, React.Dispatch<action>] = [
  initialState,
  (a: action) => {},
];

export const StateContext = createContext(initialContext);

export const StateProvider: React.FC<Props> = ({
  reducer,
  initialState,
  children,
}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
