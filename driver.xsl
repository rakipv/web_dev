<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
   <body>
      <style>
    a{
  margin: 0;
  position: absolute;
  top: 120%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

a:link, a:visited {
  background-color: #f44336;
  color: white;
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

a:hover, a:active {
  background-color: red;
}
    

    h2{
    position:relative; font-size:20px; font-weight:700;  letter-spacing:0px; text-transform:uppercase; width:300px; text-align:center; margin:auto; white-space:nowrap; border:2px solid #222;padding:5px 11px 3px 11px;
  }

    

     h2:before {
  
 text-align: center;
    background-color: #c50000;
    border-radius: 0.25rem;
    content: '';
    display: block;
    height: 0.25rem;
    width: 42px;
    margin-bottom: 1.25rem;
}
   
                   table {
                    font-family: Arial,Univers,sans-serif;
                 
                    text-align: center;
                    align-content: center; 
                   overflow-x:auto;
                     border: 2px solid blue;
                     border-collapse: collapse;
                     
                     


                     }


                     th,td{
                        font-size: 20px ;
                        padding: 15px;
                         border-bottom: 1px solid #ffff;
  text-align: left;

                     }

                     tr:hover {
                     background-color:#AEFEFF ;
                     }


                    .center {
                      margin-left: auto;
                     margin-right: auto;
                     border-radius: 5px;
    font-size: 12px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    background-color: white;

                     }
                     .container{
                       margin: 10px 70px 70px;
    box-shadow: 0px 35px 50px rgba( 0, 0, 0, 0.2 );

                     }
                      thead th {
    color: #ffffff;
    background: #4FC3A1;
}


 thead th:nth-child(odd) {
    color: #ffffff;
    background: #324960;
}

.fl-table tr:nth-child(even) {
    background: #F8F8F8;
}
  </style>
      <div class="container">
         <h2>Our Driving Instructors</h2>
         <table border="1" class="center">
            <thead>
               <tr bgcolor="#9acd32">
                  <th style="text-align:left">Name</th>
                  <th style="text-align:left">Age</th>
                  <th style="text-align:left">gender</th>
                  <th style="text-align:left">Phone</th>
                  <th style="text-align:left">Email</th>
                  <th style="text-align:left">License_no</th>
                  <th style="text-align:left">Aadhar_No</th>
                  <th style="text-align:left">Username</th>
                  <th style="text-align:left">Password</th>
               </tr>
            </thead>
           <xsl:for-each select="fleet/cd">
          
    <tr>
      <td><xsl:value-of select="Name"/></td>
      <td><xsl:value-of select="Age"/></td>
     <td><xsl:value-of select="gender"/></td>
     <td><xsl:value-of select="Phone"/></td>

     <td><xsl:value-of select="Email"/></td>
     <td><xsl:value-of select="License_no"/></td>
     <td><xsl:value-of select="Aadhar_No"/></td>
     <td><xsl:value-of select="Username"/></td>
     <td><xsl:value-of select="Password"/></td>
    </tr>
  
    </xsl:for-each>
         </table>
      </div>
      <a href="/dom/dom.html">Add New Instructor</a>
   </body>
</html></xsl:template></xsl:stylesheet>