var assert = require('assert')
var inspect = require('../src/inspect')

describe('inspect', () => {
  test('number', 1, '1')
  test('string', 'string', '"string"')
  test('boolean', false, 'false')
  test('array', [1, 2, 3], 'Array [3]')
  test('null', null, 'null')
  test('undefined', undefined, 'undefined')
  test('object', {}, 'Object')
})


function test(name, object, result) {
  it(name, () =>
    assert.deepEqual(inspect(object), result)
  )
}
