import {
  ADD_CHART_ITEM,
  CLEAR_STATE,
} from './actionTypes'


export const addChartItem = (value) => ({
  type: ADD_CHART_ITEM,
  payload: value
})


export const clearChart = () => ({
  type: CLEAR_STATE
})