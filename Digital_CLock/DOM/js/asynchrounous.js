setInterval(showtime, 1000);

function showtime() {
    var date1 = new Date();
    var hour = date1.getHours();
    var min = date1.getMinutes();
    var sec = date1.getSeconds();
    var am_pm = "AM";

    if(hour >= 12){
        hour = hour - 12;
        am_pm = "PM";
    }

    if (hour == 0) {
        hour = 12;
    }
    
    var hours = hour < 10 ? "0" + hour : hour;

    var mins = min < 10 ? "0" + min : min;

    var secs = sec < 10 ? "0" + sec : sec;

    // var para = document.getElementById("para");
    // para.textContent = `${hours}.${mins}.${secs} : ${am_pm}`;

    var div = document.getElementById("div");
    div.setAttribute("style", `display : flex; margin-top: 300px; margin-left: 400px`)

    var hour1 = document.getElementById("hour");
    hour1.setAttribute("style", `height : 100px; width : 100px; border-radius: 10px; margin-left : 50px; background-color: rgb(41, 233, 236); line-height: 100px; text-align : center`);
    hour1.textContent = hours;

    var min1 = document.getElementById("min");
    min1.setAttribute("style", `height : 100px; width : 100px; border-radius: 10px; margin-left : 50px;background-color: rgb(41, 233, 236); line-height: 100px; text-align : center`);
    min1.textContent = mins;

    var sec1 = document.getElementById("sec");
    sec1.setAttribute("style", `height : 100px; width : 100px; border-radius: 10px; margin-left : 50px; background-color: rgb(41, 233, 236); line-height: 100px; text-align : center`);
    sec1.textContent = secs;

    var am_pm1 = document.getElementById("am_pm");
    am_pm1.setAttribute("style", `height : 50px; width : 50px; border-radius: 10px; margin-left : 50px; margin-top : 50px; background-color: rgb(41, 233, 236); line-height: 50px; text-align : center`);
    am_pm1.textContent = am_pm;
}