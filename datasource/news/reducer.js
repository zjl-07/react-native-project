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
    case actionTypes.FETCH_NEWS:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.SUCCESS_FETCH_NEWS:
      return { loading: false, errorMessage: null, data: action.data };
    case actionTypes.FAILED_FETCH_NEWS:
      return { ...state, loading: false, errorMessage: action.data };
    default:
      return state;
  }
};
