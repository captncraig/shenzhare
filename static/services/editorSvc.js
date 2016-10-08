(function () {
    app.factory("editorData", function () {
       var dat = null;
       return {
           get: function(){
               return dat;
           },
           set: function(d){
               dat = d;
           }
       }
    });
} ())