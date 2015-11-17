var assert = require('assert')
var utils = require('../src/utils')

describe('inspect', () => {
  node('number', 1, '1')
  node('string', 'string', '"string"')
  node('boolean', false, 'false')
  node('null', null, 'null')
  node('undefined', undefined, 'undefined')
  tree('array', [1, 2], 'Array [2]', [
    { text: '0: 1' }, { text: '1: 2' }
  ])
  tree('empty object', {}, 'Object', [])
  tree('complex object', {
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

function node(name, object, text) {
  test(name, object, { text })
}
function tree(name, object, text, children) {
  test(name, object, { text, children })
}
function test(name, object, result) {
  it(name, () => assert.deepEqual(
      utils.inspect(object), result
  ))
}
