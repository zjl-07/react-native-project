import api from "datasource/apiRequest";
import {
  fetchAnnouncementStart,
  fetchAnnouncementSuccess,
  fetchAnnouncementFailed,
} from "datasource/announcement/action";

import {
  fetchNewsStart,
  fetchNewsSuccess,
  fetchNewsFailed,
} from "datasource/news/action";
import {
  fetchPrebookStart,
  fetchPrebookSuccess,
  fetchPrebookFailed,
} from "datasource/prebook/action";

import customErrorMessage from "utils/customErrorMessage";

export const fetchAnnouncement = () => async (dispatch) => {
  dispatch(fetchAnnouncementStart());
  try {
    const { data } = await api.fetchAnnouncement();
    dispatch(fetchAnnouncementSuccess(data));
  } catch (err) {
    dispatch(fetchAnnouncementFailed(customErrorMessage[err.response.status]));
  }
};

export const fetchNews = () => async (dispatch) => {
  dispatch(fetchNewsStart());
  try {
    const { data } = await api.fetchNews();
    dispatch(fetchNewsSuccess(data));
  } catch (err) {
    dispatch(fetchNewsFailed(customErrorMessage[err.response.status]));
  }
};

export const fetchPrebook = () => async (dispatch) => {
  dispatch(fetchPrebookStart());
  try {
    const { data } = await api.fetchPrebook();
    dispatch(fetchPrebookSuccess(data));
  } catch (err) {
    dispatch(fetchPrebookFailed(customErrorMessage[err.response.status]));
  }
};
