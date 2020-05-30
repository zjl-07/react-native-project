export const actionTypes = {
  FETCH_PREBOOK: "FETCH_PREBOOK",
  SUCCESS_FETCH_PREBOOK: "SUCCESS_FETCH_PREBOOK",
  FAILED_FETCH_PREBOOK: "FAILED_FETCH_PREBOOK",
};

export const fetchPrebookStart = () => ({
  type: actionTypes.FETCH_PREBOOK,
});

export const fetchPrebookSuccess = (data) => ({
  type: actionTypes.SUCCESS_FETCH_PREBOOK,
  data,
});

export const fetchPrebookFailed = (data) => ({
  type: actionTypes.FAILED_FETCH_PREBOOK,
  data,
});
