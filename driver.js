
if(window.XMLHttpRequest)
{
    xhttp=new XMLHttpRequest();
}
else{
    xhttp=new ActiveXObject("Microsoft.XMLHTTP")
}
xhttp.open("GET","driver.xml",false);
xhttp.send();
var xmlDoc=xhttp.responseXML;





function display() {
    var i;
    var table =
        `<thead class="thead-dark"><tr><th>Name</th><th>Age</th><th>Gender</th>
            <th>Phone</th> <th>Email</th> <th>License Number</th> <th>Aadhar Number</th> <th>User Name</th> <th>Password</th>
        </tr></thead>`;
        
    var x = xmlDoc.getElementsByTagName("cd");
    

    // Start to fetch the data by using TagName 
    for (i = 0; i < x.length; i++) {
        table += "<tr><td>" +
           x[i].getElementsByTagName("Name")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Age")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("gender")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Phone")[0]      
            .childNodes[0].nodeValue + "</td><td>"+
            x[i].getElementsByTagName("Email")[0]      
            .childNodes[0].nodeValue + "</td><td>"+
            x[i].getElementsByTagName("License_no")[0]      
            .childNodes[0].nodeValue + "</td><td>"+
            x[i].getElementsByTagName("Aadhar_No")[0]      
            .childNodes[0].nodeValue + "</td><td>"+
            x[i].getElementsByTagName("Username")[0]      
            .childNodes[0].nodeValue + "</td><td>"+
            x[i].getElementsByTagName("Password")[0]      
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
         `<thead class="thead-dark"><tr><th>Name</th><th>Age</th><th>Gender</th>
            <th>Phone</th> <th>Email</th> <th>License Number</th> <th>Aadhar Number</th> <th>User Name</th> <th>Password</th>
        </tr></thead>`;
        
    var x = xmlDoc.getElementsByTagName("cd");

    // Start to fetch the data by using TagName 
    for (i = 0; i < x.length; i++) {
        table += 
          "<tr><td>" +
           x[i].getElementsByTagName("Name")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Age")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("gender")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Phone")[0]      
            .childNodes[0].nodeValue + "</td><td>"+
            x[i].getElementsByTagName("Email")[0]      
            .childNodes[0].nodeValue + "</td><td>"+
            x[i].getElementsByTagName("License_no")[0]      
            .childNodes[0].nodeValue + "</td><td>"+
            x[i].getElementsByTagName("Aadhar_No")[0]      
            .childNodes[0].nodeValue + "</td><td>"+
            x[i].getElementsByTagName("Username")[0]      
            .childNodes[0].nodeValue + "</td><td>"+
            x[i].getElementsByTagName("Password")[0]      
            .childNodes[0].nodeValue + "</td><td>"+
            `<a onclick='javascript:remove(${i})'><i class='fas fa-trash'></i></a></td><td>`+
            `<a onclick='javascript:change(${i})' data-toggle="modal" data-target="#new2"><i class="fas fa-user-edit"></i></a></td></tr>`;
    }
    // Print the xml data in table form
    document.getElementById("id").innerHTML = table;
}

function add(){
    var bill=document.getElementById('Name').value;
    var name=document.getElementById('Age').value;
    var type=document.getElementById('Gender').value;
    var bill_amt=document.getElementById('Phone').value;
      var aa=document.getElementById('email').value;
        var bb=document.getElementById('ll').value;
          var cc=document.getElementById('aad').value;
            var dd=document.getElementById('un').value;
              var ee=document.getElementById('pass').value;

    var cd = xmlDoc.createElement('cd');

    var bill_id = xmlDoc.createElement('Name');
    newText1=xmlDoc.createTextNode(bill);
    bill_id.appendChild(newText1);

    var pname = xmlDoc.createElement('Age');
    newText2=xmlDoc.createTextNode(name);
    pname.appendChild(newText2);

    var ptype = xmlDoc.createElement('gender');
    newText3=xmlDoc.createTextNode(type);
    ptype.appendChild(newText3);

    var bill_amount = xmlDoc.createElement('Phone');
    newText4=xmlDoc.createTextNode(bill_amt);
    bill_amount.appendChild(newText4);

     var a = xmlDoc.createElement('Email');
    newText5=xmlDoc.createTextNode(aa);
    a.appendChild(newText5);

      var b = xmlDoc.createElement('License_no');
    newText6=xmlDoc.createTextNode(bb);
    b.appendChild(newText6);

      var c = xmlDoc.createElement('Aadhar_No');
    newText7=xmlDoc.createTextNode(cc);
    c.appendChild(newText7);

  var d = xmlDoc.createElement('Username');
    newText8=xmlDoc.createTextNode(dd);
    d.appendChild(newText8);

      var e = xmlDoc.createElement('Password');
    newText9=xmlDoc.createTextNode(ee);
    e.appendChild(newText9);









    cd.appendChild(bill_id);
    cd.appendChild(pname);
    cd.appendChild(ptype);
    cd.appendChild(bill_amount);
     cd.appendChild(a);
      cd.appendChild(b);
       cd.appendChild(c);
        cd.appendChild(d);
         cd.appendChild(e);


    var y = xmlDoc.getElementsByTagName("fleet");
    y[0].appendChild(cd);
    show(xmlDoc);
    
}

var node2;
function change(node1){
    node2=node1;
    y=xmlDoc.getElementsByTagName("cd")[node1];
    document.getElementById('Name1').value=y.getElementsByTagName("Name")[0].childNodes[0].nodeValue;
    document.getElementById('Age1').value=y.getElementsByTagName("Age")[0].childNodes[0].nodeValue;
    document.getElementById('Gender1').value=y.getElementsByTagName("gender")[0].childNodes[0].nodeValue;
    document.getElementById('Phone1').value=y.getElementsByTagName("Phone")[0].childNodes[0].nodeValue;
        document.getElementById('email1').value=y.getElementsByTagName("Email")[0].childNodes[0].nodeValue;
    document.getElementById('ll1').value=y.getElementsByTagName("License_no")[0].childNodes[0].nodeValue;
    document.getElementById('aad1').value=y.getElementsByTagName("Aadhar_No")[0].childNodes[0].nodeValue;
    document.getElementById('un1').value=y.getElementsByTagName("Username")[0].childNodes[0].nodeValue;
    document.getElementById('pass1').value=y.getElementsByTagName("Password")[0].childNodes[0].nodeValue;

}

function replace(){
    y=xmlDoc.getElementsByTagName("cd")[node2];
    y.getElementsByTagName("Name")[0].childNodes[0].nodeValue=document.getElementById('Name1').value;
    y.getElementsByTagName("Age")[0].childNodes[0].nodeValue=document.getElementById('Age1').value;
    y.getElementsByTagName("gender")[0].childNodes[0].nodeValue=document.getElementById('Gender1').value;
        y.getElementsByTagName("Phone")[0].childNodes[0].nodeValue=document.getElementById('Phone1').value;
            y.getElementsByTagName("Email")[0].childNodes[0].nodeValue=document.getElementById('email1').value;
                y.getElementsByTagName("License_no")[0].childNodes[0].nodeValue=document.getElementById('ll1').value;
                    y.getElementsByTagName("Aadhar_No")[0].childNodes[0].nodeValue=document.getElementById('aad1').value;
                        y.getElementsByTagName("Username")[0].childNodes[0].nodeValue=document.getElementById('un1').value;
                            y.getElementsByTagName("Password")[0].childNodes[0].nodeValue=document.getElementById('pass1').value;






    show(xmlDoc);
    $('#new2').modal('hide'); 
}