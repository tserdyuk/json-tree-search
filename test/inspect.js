var assert = require('assert')
var inspect = require('../src/inspect')

describe('inspect', () => {
  test('number', 1, '1')
  test('string', 'string', '"string"')
  test('boolean', false, 'false')
  test('null', null, 'null')
  test('undefined', undefined, 'undefined')
  test('array', [1, 2], 'Array [2]', [
    { text: '0: 1' }, { text: '1: 2' }
  ])
  test('empty object', {}, 'Object', [])
  test('complex object', {
    x: 1,
    arr: [1, 2],
    str: 'str',
    obj: { val: null }
  }, 'Object', [
    { text: 'x: 1' },
    { text: 'arr: Array [2]', children: [
      { text: '0: 1' }, { text: '1: 2' }
    ] },
    { text: 'str: "str"' },
    { text: 'obj: Object', children: [
      { text: 'val: null' }
    ]}
  ])
})

function test(name, object, text, children) {
  const result = children ?
    { text, children } : { text }
  it(name, () =>
    assert.deepEqual(inspect(object), result)
  )
}
