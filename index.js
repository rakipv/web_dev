
if(window.XMLHttpRequest)
{
    xhttp=new XMLHttpRequest();
}
else{
    xhttp=new ActiveXObject("Microsoft.XMLHTTP")
}
xhttp.open("GET","/emp.xml",false);
xhttp.send();
var xmlDoc=xhttp.responseXML;





function display() {
    var i;
    var table =
        `<thead class="thead-dark"><tr><th>Vehilce-Name</th><th>vehilce-Make</th><th>vehicle-Type</th>
            <th>Gear-Type</th>
        </tr></thead>`;
        
    var x = xmlDoc.getElementsByTagName("cd");
    

    // Start to fetch the data by using TagName 
    for (i = 0; i < x.length; i++) {
        table += "<tr><td>" +
           x[i].getElementsByTagName("Car-Name")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Car-Make")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Car-Type")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Gear-Type")[0]      
            .childNodes[0].nodeValue + "</td><td>"+
            `<a onclick='javascript:remove(${i})'><i class='fas fa-trash'></i></a></td><td>`+
            `<a onclick='javascript:change(${i})' data-toggle="modal" data-target="#new2"><i class="fas fa-user-edit"></i></a></td></tr>`;
    }
    // Print the xml data in table form
    document.getElementById("id").innerHTML = table;
}
function remove(node){
    y=xmlDoc.getElementsByTagName("cd")[node];
    xmlDoc.documentElement.removeChild(y);
    show(xmlDoc);
    console.log(y);
}

function show(xmlDoc){
    var i;
    var table =
        `<thead class="thead-dark"><tr><th>Vehilce-Name</th><th>vehilce-Make</th><th>vehicle-Type</th>
            <th>Gear-Type</th>
        </tr></thead>`;
        
    var x = xmlDoc.getElementsByTagName("cd");

    // Start to fetch the data by using TagName 
    for (i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("Car-Name")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Car-Make")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Car-Type")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Gear-Type")[0]      
            .childNodes[0].nodeValue + "</td><td>"+
            `<a onclick='javascript:remove(${i})'><i class='fas fa-trash'></i></a></td><td>`+
            `<a onclick='javascript:change(${i})' data-toggle="modal" data-target="#new2"><i class="fas fa-user-edit"></i></a></td></tr>`;
    }
    // Print the xml data in table form
    document.getElementById("id").innerHTML = table;
}

function add(){
    var bill=document.getElementById('bill_id').value;
    var name=document.getElementById('Name').value;
    var type=document.getElementById('type').value;
    var bill_amt=document.getElementById('bill').value;

    var cd = xmlDoc.createElement('cd');

    var bill_id = xmlDoc.createElement('Car-Name');
    newText1=xmlDoc.createTextNode(bill);
    bill_id.appendChild(newText1);

    var pname = xmlDoc.createElement('Car-Make');
    newText2=xmlDoc.createTextNode(name);
    pname.appendChild(newText2);

    var ptype = xmlDoc.createElement('Car-Type');
    newText3=xmlDoc.createTextNode(type);
    ptype.appendChild(newText3);

    var bill_amount = xmlDoc.createElement('Gear-Type');
    newText4=xmlDoc.createTextNode(bill_amt);
    bill_amount.appendChild(newText4);



    cd.appendChild(bill_id);
    cd.appendChild(pname);
    cd.appendChild(ptype);
    cd.appendChild(bill_amount);


    var y = xmlDoc.getElementsByTagName("fleet");
    y[0].appendChild(cd);
    show(xmlDoc);
    
}

var node2;
function change(node1){
    node2=node1;
    y=xmlDoc.getElementsByTagName("cd")[node1];
    document.getElementById('bill_id1').value=y.getElementsByTagName("Car-Name")[0].childNodes[0].nodeValue;
    document.getElementById('Name1').value=y.getElementsByTagName("Car-Make")[0].childNodes[0].nodeValue;
    document.getElementById('type1').value=y.getElementsByTagName("Car-Type")[0].childNodes[0].nodeValue;
    document.getElementById('bill1').value=y.getElementsByTagName("Gear-Type")[0].childNodes[0].nodeValue;
}

function replace(){
    y=xmlDoc.getElementsByTagName("cd")[node2];
    y.getElementsByTagName("Car-Name")[0].childNodes[0].nodeValue=document.getElementById('bill_id1').value;
    y.getElementsByTagName("Car-Make")[0].childNodes[0].nodeValue=document.getElementById('Name1').value;
    y.getElementsByTagName("Car-Type")[0].childNodes[0].nodeValue=document.getElementById('type1').value;
    y.getElementsByTagName("Gear-Type")[0].childNodes[0].nodeValue=document.getElementById('bill1').value;
    show(xmlDoc);
    $('#new2').modal('hide'); 
}