import { combineReducers } from 'redux';
import {
  ADD_CHART_ITEM,
  CLEAR_STATE,
} from './actionTypes';

const INITIAL_STATE = {
  chartList: {
    data: [0],
  }
};

const chartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CHART_ITEM: {
      return ({
        ...state,
        chartList: {
          data: [...state.chartList.data, action.payload],
        }
      })
    }
    case CLEAR_STATE: {
      return ({
        ...INITIAL_STATE
      })
    }
    default:
      return state
  }
};

export default combineReducers({
  chart: chartReducer
});