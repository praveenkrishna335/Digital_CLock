var div1 = document.getElementById("div1");
div1.setAttribute("style", `border : 0px solid ; height : 400px; text-align : center; width : 400px; margin : 9% 35%; background-color : rgb(138,211,184); color : black; `);
var div2 = document.getElementById("div2");
div2.setAttribute("style", `display : none`)
var login_h1 = document.getElementById("login_h1");
login_h1.setAttribute("style", `color : green`)
var uname_table1 = document.getElementById("uname_table1");
uname_table1.setAttribute("style", `margin : 18% 15% 0%`);
var pwd_table1 = document.getElementById("pwd_table1");
pwd_table1.setAttribute("style", `margin : 8% 15% 0%`);

function signup() {
    // var div1 = document.getElementById("div1");
    // div1.style.display = "none";
    div1.setAttribute("style", `display : none`);

    var div2 = document.getElementById("div2");
    document.body.append(div2);
    div2.setAttribute("style", `border : 0px solid; text-align : center; height : 400px; width : 400px; margin : 9% 35%; background-color : rgb(254,222,165); color : green`);

    var signup_h1 = document.getElementById("signup_h1");
    signup_h1.setAttribute("style", `color : darkblue`);

    var uname_table2 = document.getElementById("uname_table2");
    uname_table2.setAttribute("style", `margin : 8% 15% 0%`);
    var uname = document.getElementById("uname").value;
    uname.required = true;
    var uname_para2 = document.getElementById("uname_para2");

    // if (isNaN(uname)) {
    //     uname_para2.textContent = "Username format is correct";
    //     uname_para2.setAttribute("style", `color : green`);
    // } else {
    //     uname_para2.textContent = "Please enter in correct format";
    //     uname_para2.setAttribute("style", `color : red`);
    // }   
    


    var email_table2 = document.getElementById("email_table2");
    email_table2.setAttribute("style", `margin : 8% 15% 0%`);

    var pwd_table2 = document.getElementById("pwd_table2");
    pwd_table2.setAttribute("style", `margin : 8% 15% 0%`);

    var cnf_pwd_table2 = document.getElementById("cnf_pwd_table2");
    cnf_pwd_table2.setAttribute("style", `margin : 8% 15% 0%`);
}