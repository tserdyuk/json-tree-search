var assert = require('assert')
var utils = require('../src/utils')

describe('match', () => {
  test('contains', 'b', 'abc', true)
  test('not contains', 'd', 'abc', false)
  test('lower-upper case', 'ab', 'AB', true)
  test('upper-lower case', 'AB', 'ab', true)
  test('mixed case', 'aB', 'aB', true)
  test('contains number', '4', 43, true)
  test('not contains number', '5', 43, false)
  test('boolean', 'al', false, true)
  test('null', 'null', null, false)
  test('undefined', 'DEF', undefined, false)
  test('not null', 'not', null, false)
})

function test(name, query, value, result) {
  it(name, () => assert.equal(
    utils.match(query, value), result
  ))
}
