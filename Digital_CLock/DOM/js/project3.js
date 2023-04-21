var div1 = document.getElementById("div1");
div1.setAttribute("style", `border : 0px solid; height : 400px; width : 400px; margin : 9% 35%; background-color:  rgb(138,211,184); background-image : url("https://blog.hubspot.com/hs-fs/hubfs/Google%20Drive%20Integration/The%2021%20Best%20Color%20Combinations%20to%20Try%20on%20Your%20Website%20%5BBookmarkable%20Guide%5D%20(update)-Aug-13-2020-01-02-53-56-PM.jpeg?width=1500&name=The%2021%20Best%20Color%20Combinations%20to%20Try%20on%20Your%20Website%20%5BBookmarkable%20Guide%5D%20(update)-Aug-13-2020-01-02-53-56-PM.jpeg");
width : 400px; height : 400px;`)
var btn1 = document.getElementById("btn1");
btn1.setAttribute("style", `border-radius: 0%; border : 0px solid; height : 50px; width : 198px; background-Color : blue; color : white`);

var btn2 = document.getElementById("btn2");
btn2.setAttribute("style", `border-radius: 0%; border : 0px solid; height : 50px; width : 198px; background-Color : green; color : white`);

function signup() {
    var div2 = document.getElementById("div2");
    div1.appendChild(div2);
    div3.style.display = "none";
    div2.setAttribute("style", `border : 0px solid ; height : 350px; width : 400px; margin : 20% 10%; color : rgb(207,1,10); display : block`);
    let btn3 = document.getElementById("btn3");
    btn3.setAttribute("style", `margin : 20px 100px; border : 0px solid; border-radius: 25px; background-color : rgb(254,114,107)`);
}

function login() {
    var div3 = document.getElementById("div3");
    div1.appendChild(div3);
    div2.style.display = "none";
    div3.setAttribute("style", `border : 0px solid ; height : 350px; width : 400px; margin : 20% 10%; color : rgb(207,1,10); display : block`);
    let btn4 = document.getElementById("btn4");
    btn4.setAttribute("style", `margin : 20px 100px; border : 0px solid; border-radius: 25px; background-color : rgb(254,114,107)`);
}