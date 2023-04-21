function parking() {
    let name = document.getElementById("name").value;
    let bike_no = document.getElementById("bike_no").value;
    let check_in = document.getElementById("check_in").value;
    let check_out = document.getElementById("check_out").value;
    function Master(name, bike_no, check_in, check_out)
    {
        // this.sno =sno;
        this.name = name;
        this.bike_no = bike_no;
        this.check_in = check_in;
        this.check_out = check_out;
    }
    var obj1 = new Master(name, bike_no, check_in, check_out);
    console.log(obj1);
    
    let table = document.createElement("table");
    document.body.append(table);
    table.setAttribute("style", `border : 1px solid; border-collapse : collapse`);
    let tHead = document.createElement("thead");
    table.appendChild(tHead);
    let tr = document.createElement("tr");
    tHead.appendChild(tr)

    for (const [key] of Object.entries(obj1))
    {
        let th = document.createElement("th");
            th.setAttribute("style", `border : 1px solid green; padding : 5px`);
                th.textContent = key;
                tr.appendChild(th);
    }      

    var tBody = document.createElement("tbody");
    table.appendChild(tBody);

    for (let i = 0; i < 1; i++)
    {
        let tr = document.createElement("tr");
        tHead.appendChild(tr)
        for (const [key,value] of Object.entries(obj1))
        {
            let td = document.createElement("td");
                td.setAttribute("style", `border : 1px solid red; padding : 5px`);
                    td.textContent = value;
                    tr.appendChild(td);
        }   
    }
}