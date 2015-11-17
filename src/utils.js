
function inspect(object) {
  switch(typeof object) {
    case 'number': return node(object.toString())
    case 'string': return node('"' + object + '"')
    case 'boolean': return node(object.toString())
    case 'undefined': return node('undefined')
    case 'object': return Array.isArray(object) ?
      tree('Array [' + object.length + ']', object.map(field)) :
      object != null ?
        tree('Object', fields(object)) :
        node('null')
  }
  function fields(object) {
    var result = []
    for (var prop in object) {
      result.push(field(object[prop], prop))
    }
    return result
  }
  function field(object, name) {
    var result = inspect(object)
    result.text = name + ': ' + result.text
    return result
  }
  function node(text) {
    return { text: text, value: object }
  }
  function tree(text, children) {
    return { text: text, children: children }
  }
}

function match(query, value) {
  return value.toString().toLowerCase()
    .indexOf(query.toLowerCase()) != -1
}

function matches(query, children) {
  return children ?
    [].concat(children.map(function(node) {
      return match(query, node)
    })) : []
}

function identify(object) {
  var index = 1
  _identify(object)
  return object
  function _identify(object) {
    object.id = index++
    if (object.children)
      object.children.forEach(_identify)
  }
}

// Emulating CommonJS for tests
if (module) {
  module.exports = {
    inspect: inspect,
    match: match,
    identify: identify
  }
}
var module
