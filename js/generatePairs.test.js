import { suite } from 'uvu'
import * as assert from 'uvu/assert'

import generatePairs from './generatePairs.js'

const test = suite('generatePairs')

test('first use case that pops into my head', () => {
	const output = generatePairs([
		'a',
		'b',
		'c',
	])

	assert.equal(output, [
		[ 'a', 'b' ],
		[ 'a', 'c' ],
		[ 'b', 'c' ],
	])
})

test('Empty input array', () => {
	const output = generatePairs([])

	assert.equal(output, [])
})

test.run()
