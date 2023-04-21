var div = document.getElementById("div");
div.setAttribute("style", `border : 1px solid; height : 500px; width : 500px; margin : 110px 400px`);
var select = document.getElementById("select");
select.setAttribute("style", `margin : 220px 220px; padding : 5px`);

// var red = document.getElementById("red");
// var green = document.getElementById("green");
// var blue = document.getElementById("blue");

function color(choose) {
    // let choose = "red";
switch (choose) {
    case "red":
            div.style.backgroundColor = "red";
        break;
    case "green":
            div.style.backgroundColor = "green";
        break;
    case "blue":
            div.style.backgroundColor = "blue";
        break;
    default:
        break;
}
}