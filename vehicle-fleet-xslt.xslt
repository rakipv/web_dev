<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>
  <h2>Our Vehicle Fleet</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th style="text-align:left">Vehilce-Name</th>
      <th style="text-align:left">vehilce-Make</th>
 <th style="text-align:left">vehicle-Type</th>
 <th style="text-align:left">Gear-Type</th>
    </tr>
    <xsl:for-each select="catalog/cd">
    <tr>
      <td><xsl:value-of select="Car-Name"/></td>
      <td><xsl:value-of select="Car-Make"/></td>
     <td><xsl:value-of select="Car-Type"/></td>
     <td><xsl:value-of select="Gear-Type"/></td>
    </tr>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>

