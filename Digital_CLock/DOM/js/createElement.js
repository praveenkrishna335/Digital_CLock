// var myDiv = document.createElement("div");
// myDiv.textContent = "This is my div from document";
// document.body.append(myDiv);

// myDiv.style.border = "1px solid";

// // // Set Attributes...
// myDiv.id = "my_div1";
// myDiv.className = "division";
// console.log(myDiv);

// myDiv.setAttribute("id", "my_div1");
// myDiv.setAttribute("class", "division");
// myDiv.style.textAlign = "center";
// console.log(myDiv);

// var para1 = document.createElement("p");
// para1.textContent = "Am a 1st child of Div";
// myDiv.appendChild(para1);

// // Set Attributes...
// para1.id = "para1";
// para1.className = "para";
// console.log(para1);

// para1.setAttribute(
//     "style",
//     `background-Color : cyan; border : 1px solid`
// );

// var para2 = document.createElement("p");
// para2.textContent = "Am a 2nd child of Div";
// myDiv.appendChild(para2);

// // Set Attributes...
// para2.id = "para2";
// para2.className = "para";
// console.log(para2);
// console.log(myDiv);

// para2.setAttribute(
//     "style",
//     `background-Color : cyan; border : 1px solid`
// );

// *********************************************************************************

// var myDiv = document.createElement("div");
// document.body.appendChild(myDiv);

// myDiv.style.border = "1px solid";

// var heading1 = document.createElement("h1");
// heading1.textContent = "Name : " + prompt("Enter Name").toUpperCase();
// myDiv.append(heading1);

// var heading2 = document.createElement("h1");
// heading2.textContent = "Location : " + prompt("Enter Location").toUpperCase();
// myDiv.append(heading2);

// *********************************************************************************
// var myDiv = document.createElement("div");
// document.body.append(myDiv);

// myDiv.style.border = "1px solid";


// var ul = document.createElement("ul");
// var choice = Number(prompt("How many LI elements do you want ? "));
// var Arr = new Array();
// for (let i = 0; i < choice; i++) {
//     var li = document.createElement("li");
//     ul.appendChild(li);
//     li.textContent = prompt("Enter Animal Name : ")
//     Arr.push(li.textContent);    
// }
// myDiv.appendChild(ul);
// console.log(Arr);

// *********************************************************************************

// var table = document.createElement("table");
// document.body.append(table);

// table.style.border = "1px solid cyan";
// table.style.borderCollapse = "Collapse";

// var tHead = document.createElement("thead");
// table.appendChild(tHead);

// let rows = prompt("How many rows do you want ? ");
// let columns = prompt("How many columns do you want ? ");
// var tr = document.createElement("tr");
//     tHead.appendChild(tr)
// for (let i = 0; i < rows; i++) {
    
//     let th = document.createElement("th");
//             th.style.border = "1px solid green";
//             th.style.padding = "5px";
//             th.textContent = prompt(`Enter ${i + 1} value for Th : `);
//             tr.appendChild(th);       
// }

// var tBody = document.createElement("tbody");
// table.appendChild(tBody);

// for (let i = 0; i < columns; i++) {
//     var tr = document.createElement("tr");
//     tHead.appendChild(tr)
//     for (let i = 0; i < columns; i++) {
        
//         let td = document.createElement("td");
//             td.style.border = "1px solid red";
//             td.style.padding = "5px";
//             td.textContent = prompt(`Enter ${i + 1} value for Td${i + 1} : `);
//             tr.appendChild(td);       
//     }    
// }


// sNo	Name	Location
// 1	Smith	Coimbatore
// 2	Bennie	Coimbatore
// 3	Charles	Coimbatore

// *********************************************************************************

// var my_div1 = document.createElement("div");
// var heading1 = document.createElement("h1");
// heading1.textContent = "Heading";
// my_div1.appendChild(heading1);
// my_div1.style.textAlign = "center";
// my_div1.style.border = "1px solid ";
// my_div1.style.lineHeight = "50px";
// my_div1.style.backgroundColor = "cyan";
// document.body.append(my_div1);


// var nav = document.createElement("nav");
// document.body.append(nav);

// var a1 = document.createElement("a");
// nav.appendChild(a1);
// a1.textContent = ("Content1 Content2 Content3");
// a1.setAttribute("style", "word-spacing : 200px;")



// nav.setAttribute("style", `text-Align : center;  line-Height : 50px; border : 1px solid; background-Color : yellow`);

// var div = document.createElement("div");
// document.body.append(div);
// div.style.display = "flex";

// var div1 = document.createElement("div");
// div.appendChild(div1);
// div1.setAttribute("style", `height : 397px; width : 700px; border : 1px solid; background-Repeat : no-repeat;background-size: cover; background-image : url("https://cdn.pixabay.com/photo/2021/10/01/18/53/corgi-6673343__340.jpg")`);


// var div2 = document.createElement("div");
// div.appendChild(div2);
// div2.setAttribute("style", `height : 397px; width : 700px; border : 1px solid`);

// var videos = document.createElement("video");
// div2.appendChild(videos);
// videos.setAttribute("style", `height : 397px; width : 700px; `);
// videos.controls = true;
// videos.autoplay = true;
// videos.loop = true;

// var src1 = document.createElement("source");
// videos.appendChild(src1);
// src1.setAttribute("src", "../../../workspace/video/19195.mp4");
// src1.setAttribute("type", "video/mp4");


// var footer = document.createElement("footer");
// document.body.append(footer);

// var foot = document.createElement("h1");
// foot.textContent = "The End";
// footer.appendChild(foot);
// footer.setAttribute("style", `text-align : center; border : 1px solid; line-height : 50px; background-color : cyan`);