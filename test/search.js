var assert = require('assert')
var utils = require('../src/utils')

describe('search', () => {
})

function test(name, query, object, result) {
  it(name, () => assert.deepEqual(
    utils.search(query, object), result
  ))
}
