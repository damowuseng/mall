import { request } from "./request";

export function getHomeData() {
  return request({
    url: '/api/home'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: 'api/home/goods',
    params: {
      type,
      page
    }
  })

}
