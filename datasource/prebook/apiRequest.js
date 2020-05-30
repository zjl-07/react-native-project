import httpRequest from "datasource/api";

export default {
  fetchPrebook: () => httpRequest.get("prebook"),
};
