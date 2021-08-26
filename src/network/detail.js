import {request} from "./request";

export function getDetail(id) {
	return request({
		url: '/detail',
		params: {
			id
		}
	})
}
export function getRecommend() {
	return request({
		url: '/recommend'
	})
}
// 此处目的是把后端传来的杂乱无章的数据进行进一步的整合方便使用，参数只是举例。
export class Goods {
	constructor(data1, data2) {
		this.title = data1.title;
		this.price = data2.price;
		this.desc = data1.desc;
	}
}
// 同上整合店铺数据
export class Shop {
	constructor(shopData) {
		this.logo = shopData.logo;
		this.name = shopData.name;
		this.fans = shopData.fans;
	}
}
