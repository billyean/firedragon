function localFunc() {
    var i = "a string";
    
    if (true) {
        var i = 7;
    }
    
    console.log(i);
}

localFunc();