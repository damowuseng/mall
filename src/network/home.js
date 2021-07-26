import { request } from "./request";

export function getHomeData() {
  return request({
    url: '/home/api'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '',
    params: {
      type,
      page
    }
  })

}