import React, { useEffect, useReducer } from 'react';
import UserContext from './UserContext';
import UserReducer from './UserReducer';
import { auth } from '../firebase';
import { SET_USER, CLEAR_USER } from './types';

const UserState = props => {

  const initialState = { user: null, loading: true };
  const [state, dispatch] = useReducer(UserReducer, initialState);

  useEffect(() => {
    auth.onAuthStateChanged(() => {
      const getUser = auth.currentUser;
      if (getUser) {
        dispatch({ type: SET_USER, payload: getUser });
      }
      else {
        dispatch({ type: CLEAR_USER });
      }
    });
  }, []);

  const clearUser = () => {
    dispatch({ type: CLEAR_USER });
  }

  const { user, loading } = state;

  return (
    <UserContext.Provider value={{
      user,
      loading,
      clearUser
    }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState;
