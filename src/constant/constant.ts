export const CatalogsIDMap = {
  '创意场': '1',
  '智慧泊': '2',
  '活力吊': '3',
  '寻宝站': '4',
  '时光锚': '5',
}
export enum CatalogsRouteTag  {
  List,
  Card,
  BusinessCard,
  Video
}
export const CatalogsInfo = {
  [CatalogsIDMap['创意场']] : [
    {title: '论文集', id: 19115, routetag: CatalogsRouteTag.List},
    {title: '课题集', id: 19116},
    {title: '专辑', subtitle: '新质生产力', id: 19117},
  ],
  [CatalogsIDMap['智慧泊']] : [
    {title: '知识库', id: 19118, routetag: CatalogsRouteTag.Card},
    {title: '考题库', id: 19119},
    {title: '心得库', id: 19120},
  ],
  [CatalogsIDMap['活力吊']] : [
    {title: '调研活动', id: 19121},
    {title: '研讨活动', id: 19122},
    {title: '专活动发布辑', id: 19123},
  ],
  [CatalogsIDMap['寻宝站']] : [
    {title: '专家解答', id: 19124},
    {title: '技能分享', id: 19125, routetag: CatalogsRouteTag.Video},
    {title: '职场解忧', id: 19126},
  ],
  [CatalogsIDMap['时光锚']] : [
    {title: '境外班历史', id: 19127},
    {title: '阶段汇报/简报', id: 19128},
    {title: '习惯养成', id: 19129},
  ],
}

export function getCatalogItemNameById(id) {
  for (const category in CatalogsInfo) {
    const items = CatalogsInfo[category];
    console.log(items)
    const item = items.find(item => item.id === parseInt(id));
    if (item) {
      return item.title; // 返回找到的标题
    }
  }
  return null; // 如果没有找到，返回null
}

export function getCatalogNameById(id) {
  for (const name in CatalogsIDMap) {
    const catalogId = CatalogsIDMap[name];
    if (catalogId === id) {
      return name; // 返回找到的标题
    }
  }
  return null; // 如果没有找到，返回null
}

export const FILE_HOST = 'https://portal.nbport.com.cn/jwb/'