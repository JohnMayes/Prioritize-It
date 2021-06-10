export default array => {
	const pairs = []
	for (let i = 0; i < array.length - 1; i++) {
		for (let j = i + 1; j < array.length; j++) {
			pairs.push([ array[i], array[j] ])
		}
	}
	return pairs
}

