
var tree_data = null

function tree(element, data) {
  tree_data = identify(inspect(data))
  $(element).jstree({
    core: {
      data: [tree_data]
    }
  })
}

function highlight(element, query) {
  $(element).jstree('select_nodes', matches(query, tree_data.children))
}
