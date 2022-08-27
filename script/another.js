function getCaseTotalPrice(totalValue){
    const caseTotal = document.getElementById(totalValue);
    const caseTotalValue = caseTotal.innerText ;
    const caseTotalString = parseFloat(caseTotalValue);
    return caseTotalString ;
}

function setSubTotal(elementId , value){
    const subTotalCostvalue = document.getElementById(elementId);
    subTotalCostvalue.innerText = value ;

}

// subtotal er jonno function 
function subTotalmoney(){
    const totalCostCase = getCaseTotalPrice('case-price');
    const totalCostPhone = getCaseTotalPrice('phone-price');
    const subTotalCost = totalCostCase + totalCostPhone ;
    setSubTotal('sub-total', subTotalCost);

    const subtotaltax = subTotalCost * 0.01 ;
    setSubTotal('tax', subtotaltax);

    const finalTotal = subTotalCost + subtotaltax ;
    setSubTotal('main-total' , finalTotal);

}