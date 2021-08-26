module.exports = util => {
	const {
		libObj: { mockjs },
	} = util
	return {
		guard: true, // 异常崩溃是否自动重启
		port: 9000, // http://127.0.0.1:9000 可以打开经过代理的接口
		testPort: 9005, // http://127.0.0.1:9005 可以进行 mockm 的界面式操作
		replayPort: 9001, // http://127.0.0.1:9001 可以返回历史的接口响应
		watch: [],
		proxy: {
			// '/': `http://www.httpbin.org/`, // 要代理的后端接口地址
		},
		api(util) {
			return {
				// 创建接口并使用 mockjs 生成数据
				'get /api/test': mockjs.mock({ // http://127.0.0.1:9000/api/test 可以访问这个接口
					success: true,
					'data|5-20': [{
						userId: `@id`,
						userName: `@cname`,
						email: `@email`,
						address: `@county(true)`,
						img: `@image('200x100')`,
						price: `@integer(60, 100)`,
						pname: `@cparagraph(1)`,
						decs: `@cparagraph(4)`
					}]
				}),
				'get /api/home': mockjs.mock({
					success: true,
					'banners|4-5': [{
						banner: `@image('750x390', '#50B347')`,
																
					}],
					'recommends|4': [{
						recommend: `@image('80x80', '#ff5777' )`,
						'title|+1':['十点推荐','热卖爆款','内购福利','初秋上新']
					}]			
				}),
				'get /api/home/goods': mockjs.mock({
					success: true,
					'pop|30-60': [{
							image:`@image('120x120')`,
							title: `@ctitle`,
							desc:`@cparagraph(2)`,
							price:`@integer(38, 200)`,
							fav:`@integer(10, 100)`,
						}],
					'sell|30-60': [{
						image:`@image('120x120')`,
						title: `@ctitle(10,20)`,
						desc:`@cparagraph(2)`,
						price:`@integer(38, 200)`,
						fav:`@integer(10, 100)`,
					}],
					'new|30-60': [{
						image:`@image('300x300')`,
						title: `@ctitle`,
						price:`@integer(38, 200)`,
						fav:`@integer(10, 100)`,
						desc:`@cparagraph(2)`
					}]
				})
			}
		},
	}
}
