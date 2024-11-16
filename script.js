var a=Math.floor(Math.random()*6)+1;
var b="dice" + a + ".png";
var c="./image/"+ b;
var d=document.querySelectorAll("img")[0];
d.setAttribute("src",c);

var e=Math.floor(Math.random()*6)+1;
var f="dice" + e + ".png";
var g="./image/"+ f;
var h=document.querySelectorAll("img")[1];
h.setAttribute("src",g);

if(a>e)
{
    var ab=document.querySelector("h2");
    ab.innerHTML="Player-1 Won the Game "
}
else
{
    var cd=document.querySelector("h2");
    cd.innerHTML="Player-2 Won the Game " 
}