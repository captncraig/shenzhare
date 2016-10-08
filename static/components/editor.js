(function(){

var tpl = `<schematic save="save" editable="true"></schematic>`

function EditController($scope, editorData, $location) {
    var txt = editorData.get()
    if (!txt){
        console.log("EMPTY!")
        $location.path("/upload");
        return;
    }
    $scope.txt = txt;
    $scope.save = parseSave(txt);
}

app.component('editor', {
  template: tpl,
  controller: EditController,
});
    
}());