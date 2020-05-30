import httpRequest from "datasource/api";

export default {
  fetchNews: () => httpRequest.get("news"),
};
