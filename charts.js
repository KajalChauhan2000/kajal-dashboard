function bars(){
    document.getElementById('largeview').style.display = "block";
    document.getElementById('bars').style.display = "none";
    document.getElementById('closebar').style.display = "block";
    document.getElementById('largeview').style.position = "absolute";
    document.getElementById('largeview').style.left = "0px";
}

function closebar(){
    document.getElementById('largeview').style.display = "none";
    document.getElementById('bars').style.display = "block";
    document.getElementById('closebar').style.display = "none";
    
}