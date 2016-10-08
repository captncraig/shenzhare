var app = angular.module('myApp', []);

var testData = `[name] New design 1
[puzzle] Sz001
[production-cost] 1100
[power-usage] 201

[traces] 
......................
......................
......................
......................
......................
.........155C.........
............A.........
......94....A.........
......35555CA.........
.......1C..AA94.......
....94..A..AAA........
....354.2..222........
......................
......................

[chip] 
[type] UC4
[x] 5
[y] 3
[code] 
  mov 0 p1
  mov 100 p0
  slp 1
  mov 100 p1
  mov 0 p0
  slp 1

[chip] 
[type] UC4
[x] 14
[y] 4
[code] 
  slp 7
  mov 100 p0
  slp 2
  mov 0 p0
  slp 1

[chip] 
[type] UC6
[x] 7
[y] 6
[code] 
  mov 100 p0
  slp 6
  mov 100 p1
  mov 0 p0
  slp 1
  mov 0 p1
  slp 2
  mov 100 p1
  slp 1
  mov 0 p1
`

app.controller('myController',function ($scope) {
        $scope.save = parseSave(testData);
        console.log($scope.save);
        $scope.trace_styles = function(cell){
            var b1 = "1px solid gray";
            var b2 = "2px solid gray";
            return {
                //"background-color":(cell.x + cell.y) %2 == 0 ? "blue":"red",
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