import { actionTypes } from "./action";

export default (
  state = {
    loading: false,
    data: [],
    errorMessage: null,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.FETCH_PREBOOK:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.SUCCESS_FETCH_PREBOOK:
      return { loading: false, errorMessage: null, data: action.data };
    case actionTypes.FAILED_FETCH_PREBOOK:
      return { ...state, loading: false, errorMessage: action.data };
    default:
      return state;
  }
};
