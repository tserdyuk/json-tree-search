var assert = require('assert')
var match = require('../src/match')

describe('match', () => {
  test('contains', 'b', 'abc', true)
  test('not contains', 'd', 'abc', false)
  test('lower-upper case', 'ab', 'AB', true)
  test('upper-lower case', 'AB', 'ab', true)
  test('mixed case', 'aB', 'aB', true)
  test('contains number', '4', 43, true)
  test('not contains number', '5', 43, false)
})

function test(name, string, value, result) {
  it(name, () =>
    assert.equal(match(string, value), result)
  )
}
