var nameInput = document.getElementById("floatingNameInput");
var emailInput = document.getElementById("floatingEmailInput");
var companyInput = document.getElementById("floatingCompanyNameInput");
var messageInput = document.getElementById("floatingMessage");

var sumbitButton = document.getElementById("submitionButton");

function clearInputs(){
    nameInput.value = "";
    emailInput.value = "";
    companyInput.value = "";
    messageInput.value = "";
}

sumbitButton.addEventListener("click", function(){
    clearInputs();
})
