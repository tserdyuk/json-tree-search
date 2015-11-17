function inspect(object) {
  switch(typeof object) {
    case 'number': return node(object.toString())
    case 'string': return node('"' + object + '"')
    case 'boolean': return node(object.toString())
    case 'undefined': return node('undefined')
    case 'null': return node('null')
    case 'object': return Array.isArray(object) ?
      node('Array [' + object.length + ']') :
      object != null ?
        node('Object', []) :
        node('null')
  }
  function node(text, children) {
    return {
      text: text,
      children: children
    }
  }
}

if (module)
  module.exports = inspect
