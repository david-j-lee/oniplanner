import {
  CLEAR_BUILDING_INPUTS,
  COLLAPSE_ALL_BUILDINGS,
  EXPAND_ALL_BUILDINGS,
  SET_BUILDING_QUANTITY,
  SET_BUILDING_UTILIZATION,
  SET_BUILDINGS_LAYOUT,
  SORT_BUILDINGS,
} from '../constants/actionConstants';

export const setBuildingsLayout = () => dispatch => {
  dispatch({
    type: SET_BUILDINGS_LAYOUT,
  });
};

export const collapseBuildingPanels = () => dispatch => {
  dispatch({
    type: COLLAPSE_ALL_BUILDINGS,
  });
};

export const expandBuildingPanels = () => dispatch => {
  dispatch({
    type: EXPAND_ALL_BUILDINGS,
  });
};

export const setBuildingQuantity = (name, quantity) => dispatch => {
  dispatch({
    type: SET_BUILDING_QUANTITY,
    payload: { name, quantity },
  });
};

export const setBuildingUtilization = (name, utilization) => dispatch => {
  dispatch({
    type: SET_BUILDING_UTILIZATION,
    payload: { name, utilization },
  });
};

export const sortBuildings = id => dispatch => {
  dispatch({
    type: SORT_BUILDINGS,
    payload: id,
  });
};

export const clearBuildingInputs = () => dispatch => {
  dispatch({
    type: CLEAR_BUILDING_INPUTS,
  });
};
