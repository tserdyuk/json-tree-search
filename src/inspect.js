function inspect(object) {
  switch(typeof object) {
    case 'number': return object.toString()
    case 'string': return '"' + object + '"'
    case 'boolean': return object.toString()
    case 'object': return Array.isArray(object) ?
      'Array [' + object.length + ']' : 'Object'
  }
}

if (module)
  module.exports = inspect
