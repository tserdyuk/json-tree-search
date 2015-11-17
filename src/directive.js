
angular.module('jts', [])
  .directive('json', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attr) {
        var tree = $(element)
        var data = null
        scope.$watch(attr.json, function(value) {
          data = utils.identify(utils.inspect(value))
          tree.jstree({
            core: {
              data: [data]
            }
          })
        })
        attr.$observe('search', function(value) {
          if (data) {
            tree.jstree('deselect_all')
            tree.jstree('close_all')
            var ids = utils.search(value, data)
            tree.jstree('select_node', ids)
          }
        })
      }
    }
  })
