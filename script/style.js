function getElementByPhonePrice(element , eliment1 ){
    const getElement = document.getElementById('input-value');
    const getElementvalue = getElement.value ;
    const getElementvalueString = parseInt(getElementvalue)
    let newElement ;
    if(element === true){
        newElement =getElementvalueString + 1 
    }
    else(
        newElement =getElementvalueString - 1
    );
     
    getElement.value = newElement ;

    return newElement ;
}


// buying a phone 

function updateCaseTotal(getElement){
    const totalPrice = getElement * 1200;
    const getElementTotal = document.getElementById('phone-price');
    // getElementTotal = totalPrice ;
    getElementTotal.innerText = totalPrice;


}
// total price er value ber kore take numaric banano  

function getPhonePriceTotal (elimentId){
    const totalPhonePrice = document.getElementById(elimentId)
    const totalPhonePriceValue = totalPhonePrice.innerText ;
    const totalCasePriceValueString = parseFloat(totalPhonePriceValue);
    return totalCasePriceValueString ;
} 

function subTotalFinalPrice() {
    const getTotalPhonePrice = getPhonePriceTotal('phone-price');
    const getTotalCasePrice = getPhonePriceTotal('case-price');
    const subTotalPrice = getTotalPhonePrice + getTotalCasePrice ;
    const subTotalAria = document.getElementById('sub-total');
    subTotalAria.innerText = subTotalPrice ;
}


document.getElementById('phone-plus-icon').addEventListener('click', function(){
    const getElement = getElementByPhonePrice(   true );
    updateCaseTotal(getElement);

    subTotalFinalPrice();

})
document.getElementById('phone-minus-icon').addEventListener('click', function(){
    const getElement = getElementByPhonePrice(false );
    updateCaseTotal(getElement);
    subTotalFinalPrice()
})

