import httpRequest from "datasource/api";

export default {
  fetchAnnouncement: () => httpRequest.get("announcements"),
};
