var assert = require('assert')
var inspect = require('../src/inspect')

describe('inspect', () => {
  test('number', 1, '1')
  test('string', 'string', '"string"')
  test('boolean', false, 'false')
  test('null', null, 'null')
  test('undefined', undefined, 'undefined')
  test('array', [1, 2, 3], 'Array [3]', [
    { text: '1' }, { text: '2' }, { text: '3' }
  ])
  test('object', {}, 'Object', [])
})


function test(name, object, text, children) {
  it(name, () =>
    assert.deepEqual(inspect(object), {
      text, children
    })
  )
}
