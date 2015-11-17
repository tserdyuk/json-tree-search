
function inspect(object) {
  switch(typeof object) {
    case 'number': return node(object.toString())
    case 'string': return node('"' + object + '"')
    case 'boolean': return node(object.toString())
    case 'undefined': return node('undefined')
    case 'object': return Array.isArray(object) ?
      tree('Array [' + object.length + ']', object.map(inspect)) :
      object != null ?
        tree('Object', []) :
        node('null')
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
