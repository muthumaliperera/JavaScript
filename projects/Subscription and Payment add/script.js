const myCheckBox =document.getElementById("myCheckBox");
const visaBtn =document.getElementById("visaBtn");
const payPalBtn =document.getElementById("payPalBtn");
const masterCardBtn =document.getElementById("masterCardBtn");
const submitBtn =document.getElementById("submitBtn");
const subResult =document.getElementById("subResult");
const paymentResult=document.getElementById("paymentResult");

submitBtn.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent=`Thank you for your Subscription!`
    }else{
        subResult.textContent =`*Please subscribe to our news letter!`
    }
    if(visaBtn.checked){
        paymentResult.textContent = `Thank you for paying with your Visa`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = `Thank you for paying with your Master Card`;
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = `Thank you for paying with your PayPal`;
    }
    else{
        paymentResult.textContent = `*Please select a payment method`;
    }
}
