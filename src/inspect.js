
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
    return { text: text }
  }
  function tree(text, children) {
    return { text: text, children: children }
  }
}

if (module)
  module.exports = inspect
