
function tree(element, data) {
  var tree = inspect(data)
  $(element).jstree({
    core: {
      data: [tree]
    }
  })
}
