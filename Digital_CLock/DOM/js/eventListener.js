// function alert_user() {
//     alert("Hey!... This is Alert from Event");
// }

// *******************************************************************

// var h1 = prompt("Enter a String : ");
// var heading = document.createElement("h1");
// document.body.append(heading);
// heading.id = "heading_tag";
// heading.textContent = "Here your content will get display";

// function fun() {
//     document.getElementById("heading_tag").textContent = h1;
// }

// *******************************************************************

// function fun() {
//     var count = Number(prompt("How many animal do you want ? "));
//     var arr = new Array(count);
//     var ul = document.createElement("ul");
//     document.body.append(ul);
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = prompt("Enter Animal Name : " + (i + 1));
//         if (arr[i] != "" && isNaN(arr[i])) {
//             var li = document.createElement("li");
//             ul.appendChild(li);
//             li.textContent = arr[i];
//         } else {
//             alert("Please Enter Proper Value...");
//             i--;
//         }
//     }
// }

// *******************************************************************


// // 13/04/2023...

// // Add Event Listener...

// let btn = document.getElementById("My_Div");
// btn.addEventListener("click", function () {
//     let div = document.createElement("div");
//     document.body.append(div);
//     let h1 = document.createElement("h1");
//     div.appendChild(h1);
//     h1.textContent = `Name : Pk`;
//     let h2 = document.createElement("h1");
//     div.appendChild(h2);
//     h2.textContent = `Location : Chennai`;
// });

// *******************************************************************

var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    var num1 =Number(document.getElementById("num1").value);
    var num2 =Number(document.getElementById("num2").value);
    var p = document.createElement("p");
    document.body.append(p);
    p.textContent = num1 + num2;
});
