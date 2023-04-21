function add() {
    var num1 =Number(document.getElementById("num1").value);
    var num2 =Number(document.getElementById("num2").value);
    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Enter only Numbers...");
    } else {
        let p = document.createElement("p");
        document.body.append(p);
        p.textContent = `Addition of ${num1} & ${num2} is : ` + (num1 + num2);   
    }
}

function sub() {
    var num1 =Number(document.getElementById("num1").value);
    var num2 =Number(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Enter only Numbers...");
    } else {
        let p = document.createElement("p");
        document.body.append(p);
        p.textContent = `Subtraction of ${num1} & ${num2} is : ` + (num1 - num2);  
    }
}

function div() {
    var num1 =Number(document.getElementById("num1").value);
    var num2 =Number(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Enter only Numbers...");
    } else {
        let p = document.createElement("p");
        document.body.append(p);
        p.textContent = `Division of ${num1} & ${num2} is : ` + (num1 / num2);  
    }
}

function mul() {
    var num1 =Number(document.getElementById("num1").value);
    var num2 =Number(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Enter only Numbers...");
    } else {
        let p = document.createElement("p");
        document.body.append(p);
        p.textContent = `Multiplication of ${num1} & ${num2} is : ` + (num1 * num2); 
    }
}