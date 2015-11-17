var assert = require('assert')
var utils = require('../src/utils')

describe('search', () => {
  test('number', '10', 100, [1])
  test('not number', 'a', 100, [])
  test('string', 'str', 'string', [1])
  test('array', 'a', ['a', 'ab', 'cd'], [2, 3])
})

function test(name, query, object, result) {
  const data = utils.identify(utils.inspect(object))
  it(name, () => assert.deepEqual(
    utils.search(query, data), result
  ))
}
