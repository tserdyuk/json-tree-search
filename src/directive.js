
function tree(element, data) {
  var tree = identify(inspect(data))
  $(element).jstree({
    core: {
      data: [tree]
    }
  })
}
