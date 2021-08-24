// 对refresh刷新频繁问题，进行防抖操作

export function debounce (func, delay) {
	let timer = null
	return function() {
		if(timer) clearTimeout(timer)
		timer = setTimeout( () => {
			func.apply(this, arguments)
		}, delay)
	}
}
