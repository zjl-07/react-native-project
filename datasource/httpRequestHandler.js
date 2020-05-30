import httpRequest from "datasource/api";

export default {
  get: (path, arg) => httpRequest.get(path, { arg }),
  post: (path, arg) => httpRequest.post(path, { arg }),
  delete: (path, arg) => httpRequest.delete(path, { arg }),
  update: (path, arg) => httpRequest.patch(path, { arg }),
};
