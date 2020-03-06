import React from 'react';

import {StateProvider} from './src/useStateValue';
import Main from './src/Main';

interface IUser {
  name: string;
  email: string;
}

export interface IState {
  currentUser?: IUser;
}

export const initialState: IState = {
  currentUser: undefined,
};

export const reducer = (state: IState, action: {type: string; payload: any}): IState => {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        currentUser: action.payload.user,
      };
    case 'logout':
      return {
        ...state,
        currentUser: undefined,
      };
    default:
      return state;
  }
};

const App = () => {
    return (
      <StateProvider reducer={reducer} initialState={initialState}>
        <Main />
      </StateProvider>
    );
}

export default App;
