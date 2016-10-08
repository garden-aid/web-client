
import {
  HOURS_UPDATE,
} from '../actions';

const defaultState = {
  hours: 1,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case HOURS_UPDATE:
      return {
        ...state,
        hours: action.hours,
      };
    default:
      return state;
  }
};
