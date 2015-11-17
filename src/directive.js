
var tree_data = null

function tree(element, data) {
  tree_data = utils.identify(utils.inspect(data))
  $(element).jstree({
    core: {
      data: [tree_data]
    }
  })
}

function highlight(element, query) {
  var ids = utils.search(query, tree_data)
  $(element).jstree('select_node', ids)
}
