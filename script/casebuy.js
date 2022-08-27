function getElementByCasePrice( eliment1 ){
    const getCaseElement = document.getElementById('input-value-case');
    const getCaseElementValue = getCaseElement.value ;
    const getCaseElementString = parseInt(getCaseElementValue);
    let getTotalValue ;
    if( eliment1 == true ){
        getTotalValue = getCaseElementString +1 

    }
    else(
        getTotalValue = getCaseElementString - 1 
    )
    getCaseElement.value = getTotalValue ;
    return getTotalValue ;
}


// phone total section 
function totalCasePriceValue(phoneCaseEliment){
    const totalvalue  = phoneCaseEliment * 50 ;
    const totalvaluePrice = document.getElementById('case-price');
    totalvaluePrice.innerText = totalvalue;

}


// case total section 
document.getElementById('case-plus-button').addEventListener('click', function(){
    const phoneCaseEliment = getElementByCasePrice(true);
    totalCasePriceValue(phoneCaseEliment);
    subTotalmoney();
    
})


document.getElementById('case-minus-button').addEventListener('click', function(){
    const phoneCaseEliment = getElementByCasePrice(false);
    totalCasePriceValue(phoneCaseEliment);
    subTotalmoney();

})


