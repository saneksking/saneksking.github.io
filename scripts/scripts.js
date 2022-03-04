var mess=new Array(
 "Ты уверен что ты в безопасности?",
 "Твоя система больше не безопасна...",
 "Потому что в ней был Я!");

var size = 32;
var txtcol = "#C0C0C0";
var lastcol = "#00CC00";
var pause = 2500;
var speed = 170;
var i = i_str = 0;
var msg = msgpre = msgafter = "";

function get_text() {
 msgpre = mess[i].substring(0, i_str-1);
 msgafter = mess[i].substring(i_str-1, i_str);
 msg = "<span style='position: relative; color:" + txtcol + "; font-size: " +
 size + "px;'>" + msgpre + "<span style='color:" + lastcol + ";'>" + msgafter +
 "</span></span>";
}

function go() {
if (i_str<=mess[i].length-1) {
 i_str++;
 get_text();
 if (document.all) typewriter.innerHTML = msg;
 else if (document.layers) {
  document.typewriter.document.write(msg);
  document.typewriter.document.close();
 }
 else document.getElementById("typewriter").innerHTML = msg;
 var timer = setTimeout("go()", speed);
}
else {
 clearTimeout(timer);
 var timer = setTimeout("changemess()", pause);
}
}

function changemess() {
 i++;
 i_str = 0;
 if (i>mess.length-1) i = 0;
 go();
}
