(function(){

var fileHelp = `Saves can usually be found in the following locations:
          <ul>
          <li><b>Windows:</b> <pre>C:\\Users\\&lt;you&gt\\Documents\\My Games\\SHENZEN IO\\&lt;steam id&gt;</pre></li>
          <li><b>OSX:</b> <pre>~/Library/Application Support/SHENZHEN IO/&lt;steam id&gt;</pre></li>
          <li><b>Linux:</b> <pre>~/.local/share/SHENZHEN IO/&lt;steam id&gt;</pre></li>
          </ul>`

function UploadController($scope, $sce, editorData, $location) {
    editorData.set(null);
    $scope.text = "";
    $scope.fileHelp = $sce.trustAsHtml(fileHelp)
    $scope.defaultSaves = window.builtInSaves
    $scope.loadBuiltIn = function(txt){
        $scope.text = txt;
        $scope.load();
    }
    $scope.load = function(){
        editorData.set($scope.text);
        $location.path("/edit");
    }
}

app.component('upload', {
  templateUrl: "/static/components/upload.html",
  controller: UploadController,
});
    
}());