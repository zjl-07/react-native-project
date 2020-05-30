export const actionTypes = {
  FETCH_NEWS: "FETCH_NEWS",
  SUCCESS_FETCH_NEWS: "SUCCESS_FETCH_NEWS",
  FAILED_FETCH_NEWS: "FAILED_FETCH_NEWS",
};

export const fetchNewsStart = () => ({
  type: actionTypes.FETCH_NEWS,
});

export const fetchNewsSuccess = (data) => ({
  type: actionTypes.SUCCESS_FETCH_NEWS,
  data,
});

export const fetchNewsFailed = (data) => ({
  type: actionTypes.FAILED_FETCH_NEWS,
  data,
});
