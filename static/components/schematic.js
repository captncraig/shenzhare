(function () {

    function SchematicController($scope) {
        $scope.save = this.save;
        $scope.canEdit = this.editable === "true";
        $scope.trace_styles = function (cell) {
            var b1 = "1px solid gray";
            var b2 = "2px solid gray";
            return {
                "left": cell.x * 42,
                "top": cell.y * 42,
                "border-left": cell.x == 0 ? b2 : b1,
                "border-right": cell.x == 19 ? b2 : b1,
                "border-top": cell.y == 0 ? b2 : b1,
                "border-bottom": cell.y == 11 ? b2 : b1,
            }
        }

        $scope.chip_styles = function (cell) {
            return {
                "left": (cell.x * 42) - 42,
                "bottom": (cell.y * 42) - 42,
            }
        }
        $scope.trace_class = function (cell) {
            if (cell.trace == ".") {
                return "";
            }
            return "trace_" + cell.trace;
        }
    }

    app.component('schematic', {
        templateUrl: "/static/components/schematic.html",
        controller: SchematicController,
        bindings: {
            save: '<',
            editable: '@',
        }
    });

} ());