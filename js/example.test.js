import { suite } from 'uvu';
import * as assert from 'uvu/assert';

import {make_cool} from './example.js'

const test = suite('example')

test('make_cool', () => {
	assert.is(make_cool('wat'), 'WAT')
	assert.is(make_cool('testing with a sentence'), 'TESTING WITH A SENTENCE')
})

test.run()
