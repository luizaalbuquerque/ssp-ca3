<?xml version="1.0"?> 
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/">
    <html>
        <head>
            <title>Tech Shop options</title>
<meta http-equiv="Content-Type" content="text/html" charset="utf-8" />
            <link rel="stylesheet" href="../css/TechShop.css" />
          
        </head>
            <body>


<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">

            <a class="navbar-brand" href="#"> Tech Shop</a>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Home</a></li>
                 
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">Store</a>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Sales Products</a></li>
                            <li><a class="dropdown-item" href="#"> Delete or Add</a></li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>
                            <li><a class="dropdown-item" href="#">Total in the Bag</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>



                    <img src="../img/TechShop.gif" alt="Tech logo" width="58" height="100"  onclick="doSomething()"/>
                  <h2>  Welcome to the Tech Shop</h2>
                <p>Select your products from the options below. To calculate the total, click the "Calculate Total" button.</p> 
                <p> Check the "Highlight Sales" box to highlight sales products.
                <input type="checkbox" name="cbOpts" value="isSales" id="showSales" />
               <label for="showSales">Highlight Sales Products</label></p>
                <table id="TechTable" border="1" class="indent">
                    <thead>
                        <tr>
                            <th colspan="3">Tech Shop Options</th>
                        </tr>
                        <tr>
                            <th>Select</th>
                            <th>Item</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:for-each select="//section">
                            <tr>
                                <td colspan="3">
                                    <xsl:value-of select="@name" />
                                </td>
                            </tr>
                            <xsl:for-each select="entry">
                                <tr>
                                    <xsl:attribute name="sales">
                                        <xsl:value-of select="boolean(@sales)" />
                                    </xsl:attribute>
                                    <td align="center">
                                        <input name="item0" type="checkbox" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="item" />
                                    </td>
                                    <td align="right">
                                        <xsl:value-of select="price" />
                                    </td>
                                </tr>
                            </xsl:for-each>
                        </xsl:for-each>
                    </tbody>
                </table>
                <form class="indent" onsubmit="return calculate('TechTable');">
                    <p> Total: € <input type="text" name="txtAmt" /></p>
                  <input type="button" name="btnCalcTotal" value="Calculate Total" id="calcTotal" />
                </form>
                  <script src="../js/TechShop.js">x</script>


                  
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>