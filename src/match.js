
function match(string, value) {
  return value.toString().toLowerCase()
    .indexOf(string.toLowerCase()) != -1
}

if (module)
  module.exports = match
