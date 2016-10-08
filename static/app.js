var app = angular.module('myApp', []);

var testData = `[name] New design 1
[puzzle] Sz017
[production-cost] 1200
[power-usage] 232

[traces] 
......................
......................
......................
......................
......................
.....14......14.......
.....1554.15414.......
..94..954.1C.14.......
..355CA....3414.......
....16A......14.......
....156......14.......
......................
......................
......................

[chip] 
[type] ORACLE
[x] 2
[y] 3
[is-puzzle-provided] true

[chip] 
[type] DX3
[x] 12
[y] 3

[chip] 
[type] LCDH
[x] 14
[y] 3
[is-puzzle-provided] true

[chip] 
[type] UC6
[x] 3
[y] 6
[code] 
a:teq p0 0
+ slp 1
+ jmp a
  mov 0 acc  
  teq p1 0
- add 1
  slp 1
  teq p1 0
- add 10
  slp 1
  teq p1 0
- add 100
  mov acc x3
  slp 3

[chip] 
[type] BRIDGE
[x] 6
[y] 6

[chip] 
[type] UC6
[x] 8
[y] 6
[code] 
  slx x1
  mov x1 dat
  slp 1
  mov 0 acc
  teq p0 0
- add 1
  slp 1
  teq p0 0
- add 10
  slp 1
  teq p0 0
- add 100
  mov dat x2
  mov acc x3

[chip] 
[type] DX3
[x] 12
[y] 6

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