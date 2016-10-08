var app = angular.module('myApp', ['ui.bootstrap']);

app.controller('myController',function ($scope,$sce) {

        $scope.save = null;
        $scope.screen = "upload";
        $scope.saveText = "";
        $scope.defaultSaves = window.builtInSaves

        $scope.load = function(){
          console.log("AAAAA")
          $scope.save = parseSave($scope.saveText);
          $scope.screen = "schematic";
        }

        $scope.fileLocations =  $sce.trustAsHtml(`Saves can usually be found in the following locations:
          <ul>
          <li><b>Windows:</b> <pre>C:\\Users\\&lt;you&gt\\Documents\\My Games\\SHENZEN IO\\&lt;steam id&gt;</pre></li>
          <li><b>OSX:</b> <pre>~/Library/Application Support/SHENZHEN IO/&lt;steam id&gt;</pre></li>
          <li><b>Linux:</b> <pre>~/.local/share/SHENZHEN IO/&lt;steam id&gt;</pre></li>
          </ul>`)

        $scope.trace_styles = function(cell){
            var b1 = "1px solid gray";
            var b2 = "2px solid gray";
            return {
                "left":cell.x * 42,
                "top":cell.y *42,
                "border-left": cell.x == 0 ? b2 : b1,
                "border-right":cell.x == 19 ? b2 : b1,
                "border-top": cell.y == 0 ? b2 : b1,
                "border-bottom":cell.y == 11 ? b2 : b1,
            }
        }

        $scope.chip_styles = function(cell){
            return {
                "left": (cell.x * 42)-42,
                "bottom":  (cell.y * 42) - 42,
            }
        }
        $scope.trace_class = function(cell){
           if (cell.trace == "."){
               return "";
           }
           return "trace_"+cell.trace;
        }
});