var assert = require('assert')
var utils = require('../src/utils')

describe('identify', () => {
  it ('works', () => {
    const object = {
      children: [
        {},
        { children: [] },
        { children: [
          {}, {}
        ]}
      ]
    }
    utils.identify(object)
    assert.deepEqual(object, {
      id: 1,
      children: [
        { id: 2 },
        { id: 3, children: [] },
        { id: 4, children: [
          { id: 5 }, { id: 6 }
        ]}
      ]
    })
  })
})
