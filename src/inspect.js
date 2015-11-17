function inspect(object) {
  switch(typeof object) {
    case 'number': return object.toString()
    case 'string': return '"' + object + '"'
    case 'boolean': return object.toString()
    case 'array': return 'Array [' + object.length + ']'
  }
}

if (module)
  module.exports = inspect
