var assert = require('assert')
var match = require('../src/match')

describe('match', () => {
  test('lower-upper case', 'ab', 'AB', true)
  test('upper-lower case', 'AB', 'ab', true)
  test('mixed case', 'aB', 'Ba', true)
})

function test(name, string, value, result) {
  it(name, () =>
    assert.equal(match(string, value), result)
  )
}
