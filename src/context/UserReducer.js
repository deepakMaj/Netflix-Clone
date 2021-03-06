import { SET_USER, CLEAR_USER } from './types';

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      }
    case CLEAR_USER:
      return {
        ...state,
        user: null,
        loading: false
      }
    default:
      return state;
  }
}