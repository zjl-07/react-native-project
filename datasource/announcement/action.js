export const actionTypes = {
  FETCH_ANNOUNCEMENT: "FETCH_ANNOUNCEMENT",
  SUCCESS_FETCH_ANNOUNCEMENT: "SUCCESS_FETCH_ANNOUNCEMENT",
  FAILED_FETCH_ANNOUNCEMENT: "FAILED_FETCH_ANNOUNCEMENT",
};

export const fetchAnnouncementStart = () => ({
  type: actionTypes.FETCH_ANNOUNCEMENT,
});

export const fetchAnnouncementSuccess = (data) => ({
  type: actionTypes.SUCCESS_FETCH_ANNOUNCEMENT,
  data,
});

export const fetchAnnouncementFailed = (data) => ({
  type: actionTypes.FAILED_FETCH_ANNOUNCEMENT,
  data,
});
