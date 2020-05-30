import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import newsReducer from "datasource/news/reducer";
import announcementReducer from "datasource/announcement/reducer";
import prebookReducer from "datasource/prebook/reducer";

const rootReducer = combineReducers({
  news: newsReducer,
  announcement: announcementReducer,
  prebook: prebookReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
