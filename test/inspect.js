var assert = require('assert')
var inspect = require('../src/inspect')

describe('inspect', () => {
  it('number', () => {
    assert.equal(inspect(1), '1')
  })
  it('string', () => {
    assert.equal(inspect('string'), '"string"')
  })
  it('boolean', () => {
    assert.equal(inspect(false), 'false')
  })
  it('array', () => {
    assert.equal(inspect([1, 2, 3]), 'Array [3]')
  })
})
