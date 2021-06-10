export const read = async key => {
	const item = localStorage.getItem(key)
	if (item === null) {
		return null
	} else {
		return JSON.parse(item)
	}
}

export const write = async(key, value) => {
	localStorage.setItem(key, JSON.stringify(value))
}
