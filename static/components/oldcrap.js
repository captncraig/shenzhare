var tpl = `<div ng-show="screen === 'upload'">
        <div class='container'>
            <div class='row'>
                <div class='col-md-6'>
                    <h3>Enter your save data:
                        <span uib-popover-html="fileLocations" popover-class='pop' popover-trigger="'mouseenter'" class="glyphicon glyphicon-question-sign" aria-hidden="true"
                            popover-placement="bottom" style='font-size:70%'>
                            </span>
                    </h3>
                    <textarea class="form-control" rows="25" ng-model='saveText'></textarea>
                </div>
                <div class='col-md-6'>
                    <h3>Or use one of mine:</h3>
                    <ul>
                    <li ng-repeat="(key, value) in defaultSaves"><a ng-click='$parent.saveText = value'>{{key}}</a></li>
                    <ul>
                </div>
            </div>
            <div class='row'>
                <div class='col-md-1'><button class='btn btn-primary' ng-click='load()'>Load</button></div>
            </div>
        </div>
    </div>

    <div ng-show="screen === 'schematic'">
        <div class='container'>
            <h3>{{save.name}}</h3>
        </div>
        <div class='layout'>
            <div class='trace' ng-repeat="seg in save.segments" ng-style="trace_styles(seg)" ng-class="trace_class(seg)"></div>
            <div class='chip' ng-repeat="chip in save.chips" ng-style="chip_styles(chip)" ng-class="'chip_'+chip.type">
                <pre ng-if="chip.code">{{chip.code}}</pre>{{chip.type}}
            </div>
        </div>
    </div>
    </div>`;
app.controller('myController', function ($scope, $sce) {

  $scope.save = null;
  $scope.screen = "upload";
  $scope.saveText = "";
  $scope.defaultSaves = window.builtInSaves

  $scope.load = function () {
    console.log("AAAAA")
    $scope.save = parseSave($scope.saveText);
    $scope.screen = "schematic";
  }

  $scope.fileLocations = $sce.trustAsHtml(`Saves can usually be found in the following locations:
          <ul>
          <li><b>Windows:</b> <pre>C:\\Users\\&lt;you&gt\\Documents\\My Games\\SHENZEN IO\\&lt;steam id&gt;</pre></li>
          <li><b>OSX:</b> <pre>~/Library/Application Support/SHENZHEN IO/&lt;steam id&gt;</pre></li>
          <li><b>Linux:</b> <pre>~/.local/share/SHENZHEN IO/&lt;steam id&gt;</pre></li>
          </ul>`)

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
});


}()