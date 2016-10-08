function parseSave(dat){
    var reg = /^\[([a-z\-]+)\]/
    root = {chips:[]}
    obj = root
    var done = false
    while(!done){
        dat = dat.trim()
        var m = dat.match(reg)
        if (m == null){
            throw "Error parsing input. Tag Error. Please contact site owner";
        }
        dat = dat.substr(m[0].length).trim()
        var tag = m[1];
        if (tag == "chip"){
            obj = {}
            root.chips.push(obj)
            continue
        }
        next = dat.indexOf("[")
        val = ""
        if (next == -1){
            val = dat
            done = true
        }else{
            val = dat.substr(0,next).trim();
            dat = dat.substr(next).trim();
        }
        if (val == ""){
            throw "Error parsing input. Empty Value. Please contact site owner";
        }
        obj[tag] = val;
    
    }
    var ts = [];
    var split = root.traces.split("\n");
    //TODO: check length
    for(var i = 1; i<13; i++){
        for (j = 1; j<21; j++){
            ts.push({x:j-1, y:i-1, trace:split[i][j]})
        }
    }
    root.segments=ts;
    return root;
}