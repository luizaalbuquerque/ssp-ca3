/* Code Reference: https://github.com/mikhail-cct/ssp-practical by Mikhail. Accessed on 28th of December 2021. */

// creating variable
var gEntreeCount = 0;

// returns a number that represents the sum of all the selected menu
// item prices.
function calculateTotal(idTechTable) {
    var fTotal = 0.0;
    var i = 0;
    // find the table tag
    var oTable = document.getElementById(idTechTable);
    // go through the table and add up the prices of all
    // the selected items. The code takes advantage of the 
    // fact that each checkbox has a corresponding row in
    // the table, and the only INPUT tags are the checkboxes.
    var aCBTags = oTable.getElementsByTagName('INPUT');
    for (i = 0; i < aCBTags.length; i++) {
        // is this menu item selected? it is if the checkbox is checked
        if (aCBTags[i].checked) {
            // get the checkbox' parent table row
            var oTR = getParentTag(aCBTags[i], 'TR');

            // retrieve the price from the price column, which is the third column in the table
            var oTDPrice = oTR.getElementsByTagName('TD')[2];
            // the first child text node of the column contains the price
            fTotal += parseFloat(oTDPrice.firstChild.data);
        };
    };
    // return the price as a decimal number with 2 decimal places
    return Math.round(fTotal * 100.0) / 100.0;
};

// This function either turns on or off the row highlighting for sales
// items (depending on the value of bShowSales)
function highlightSales(idTable, bShowSales) {
    // if bShowSales is true, then we're highlighting sales
    //	products, otherwise we're unhighlighting them.
    var i = 0;
    var oTable = document.getElementById(idTable);
    var oTBODY = oTable.getElementsByTagName('TBODY')[0];
    var aTRs = oTBODY.getElementsByTagName('TR');
    // walk through each of the table rows and see if it has a 
    // "sales" attribute on it.
    for (i = 0; i < aTRs.length; i++) {
        if (aTRs[i].getAttribute('sales') && aTRs[i].getAttribute('sales') == "true") {
            if (bShowSales) {
                aTRs[i].style.backgroundColor = "lightBlue";
            } else {
                aTRs[i].style.backgroundColor = "";
            };
        };
    };
};
// Utility function for getting the parent tag of a given tag
// but only of a certain type (i.e. a TR, a TABLE, etc.)
function getParentTag(oNode, sParentType) {
    var oParent = oNode.parentNode;
    while (oParent) {
        if (oParent.nodeName == sParentType)
            return oParent;
        oParent = oParent.parentNode;
    };
    return oParent;
};
// eventListener to give functionality to the functions above 
window.addEventListener("load", function () {
    document.forms[0].txtAmt.value = calculateTotal('TechTable');
    document.querySelector("#calcTotal").addEventListener("click", function () {
        document.forms[0].txtAmt.value = calculateTotal('TechTable');
    });
    document.querySelector("#showSales").addEventListener("click", function () {
        highlightSales('TechTable', this.checked);
    });
});