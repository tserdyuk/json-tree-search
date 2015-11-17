var assert = require('assert')
var utils = require('../src/utils')

describe('identify', () => {
  it ('works', () => {
    assert.deepEqual(utils.identify({
      children: [
        {},
        { children: [] },
        { children: [
          {}, {}
        ]}
      ]
    }), {
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
