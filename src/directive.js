
angular.module('jts', [])
  .directive('json', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attr) {
        var data = null
        scope.$watch(attr.json, function(value) {
          data = utils.identify(utils.inspect(value))
          $(element).jstree({
            core: {
              data: [data]
            }
          })
        })
        attr.$observe('search', function(value) {
          var ids = utils.search(value, data)
          $(element).jstree('select_node', ids)
        })
      }
    }
  })
