import http from  './http'
import { articleInfo, articleListApiData, columnList, newsList } from './mockData';

export const getNewsList = () => {
  return newsList;
}

export const getUserToken = () =>  {
  return http.get('/token?username=yz0314&password=yz0314');
}

/** 获得栏目的信息 */
export const getArticleColumns = () => {
  return columnList;
}

/** 获得栏目下文章列表的信息 */
export const getArticleList = (catalogID = 19115, siteID = 219 ) => {
  return http.get('/articles', {params: {
    catalogID,
    siteID,
    pageSize: 10000,
  }});
}

export const getArticleContent = (cid) => {
  return http.get(`/articles/${cid}`);
}