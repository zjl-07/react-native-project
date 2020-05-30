import announcement from "datasource/announcement/apiRequest";
import news from "datasource/news/apiRequest";
import prebook from "datasource/prebook/apiRequest";

export default { ...announcement, ...news, ...prebook };
