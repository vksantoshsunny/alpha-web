import _ from 'lodash';

import { actionTypes } from '../actions/addContentActions';

const initialState = { isClicked: false };

export default (state = initialState, action) => {
  const newState = _.clone(state);
  switch (action.type) {
    case actionTypes.TOGGLE_CONTENT_TYPE:
      newState.isClicked = !newState.isClicked;
      return newState;

    case actionTypes.RESET_CONTENT_TYPE:
      return initialState;

    default:
      return state;
  }
};
