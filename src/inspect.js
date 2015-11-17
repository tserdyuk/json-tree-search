function inspect(object) {
  switch(typeof object) {
    case 'number': return object.toString()
    case 'string': return '"' + object + '"'
    case 'boolean': return object.toString()
    case 'undefined': return 'undefined'
    case 'null': return 'null'
    case 'object': return Array.isArray(object) ?
      'Array [' + object.length + ']' :
      object == null ? 'null' : 'Object'
  }
}

if (module)
  module.exports = inspect
