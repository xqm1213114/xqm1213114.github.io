function showPic(whichpic){
var source=whichpic.href;
document.getElementById("placeholder").src=source;
var text=whichpic.getAttribute("title");
}