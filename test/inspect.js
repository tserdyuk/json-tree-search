var assert = require('assert')
var inspect = require('../src/inspect')

describe('inspect', () => {
  test('number', 1, '1')
  test('string', 'string', '"string"')
  test('boolean', false, 'false')
  test('array', [1, 2, 3], 'Array [3]')
})


function test(name, value, result) {
  it(name, () =>
    assert.deepEqual(inspect(value), result)
  )
}
