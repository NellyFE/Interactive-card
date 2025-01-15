const nameInputValue = document.getElementById("cardName");
const cardNumberValue = document.getElementById("cardNumber");
const monthExpValue = document.getElementById("cardExp_mm");
const yearExpValue = document.getElementById("cardExpYy");
const cvcCardValue = document.getElementById("cvc");
const confirmBtn = document.getElementById("confirmBtn");

function validation() {
  const numberValue = cardNumberValue.value;
  const monthValue = parseInt(monthExpValue.value);
  const yearValue = parseInt(yearExpValue.value);
  const cvcValue = parseInt(cvcCardValue.value);

  let isValid = true;

  //error message
  const numberError = document.getElementById("number-error");
  const monthError = document.getElementById("month-error");
  const yearError = document.getElementById("year-error");
  const cvcError = document.getElementById("cvc-error");

  const errorMessage = (text) => {
    cardNumberValue.style.borderColor = "red";
    numberError.style.display = "block";
    numberError.innerText = text;
    isValid = false;
  };

  const monthErrorMessage = (texts) => {
    monthError.style.display = "flex";
    monthError.innerText = texts;
    monthExpValue.style.borderColor = "red";
    isValid = false;
  };

  const yearErrorMessage = (texts) => {
    yearError.style.display = "flex";
    yearError.innerText = texts;
    yearExpValue.style.borderColor = "red";
    isValid = false;
  };

  const cvcErrorMessage = (texts) => {
    cvcError.style.display = "flex";
    cvcError.innerText = texts;
    cvcCardValue.style.borderColor = "red";
    isValid = false;
  };

  //number validation
  if (isNaN(numberValue) || numberValue.length !== 16) {
    errorMessage("Wrong format, number must be 16 ");
  } else {
    cardNumberValue.style.borderColor = "grey";
    numberError.style.display = "none";
  }

  //month exp validation
  if (monthExpValue.value.trim() === "") {
    monthErrorMessage("Can't be blank");
  } else if (monthValue < 1 || monthValue > 12 || isNaN(monthValue)) {
    monthErrorMessage("Invalid month");
  } else {
    monthExpValue.style.borderColor = "grey";
    monthError.style.display = "none";
  }

  //Year validation
  if (yearExpValue.value.trim() === "") {
    yearErrorMessage("Can't be blank");
  } else if (yearValue < 1 || isNaN(yearValue)) {
    yearErrorMessage("Invalid month");
  } else {
    yearExpValue.style.borderColor = "grey";
    yearError.style.display = "none";
  }

  //cvc validation
  if (cvcCardValue.value.trim() === "") {
    cvcErrorMessage("Can't be blank");
  } else if (isNaN(cvcValue)|| cvcValue.length !== 3) {
    cvcErrorMessage("Invalid number");
  } else {
    cvcCardValue.style.borderColor = "grey";
    cvcError.style.display = "none";
  }
  return isValid;
}

function cardDetails() {
  if (!validation()) {
    return;
  }

  //getting card number to show
  const nameValue = nameInputValue.value;
  const names = document.getElementById("holderName");
  names.innerText = nameValue;

  console.log({ cardNumberValue, nameValue, nameInputValue, names });

  //getting card nameto show
  const numberValue = cardNumberValue.value;
  const numbers = document.getElementById("numbers");
  numbers.innerHTML = numberValue;

  //getting MM to show
  const monthValue = monthExpValue.value;
  const month = document.getElementById("theMM");
  month.innerText = monthValue;

  //getting the YY to show
  const yearValue = yearExpValue.value;
  const year = document.getElementById("theYY");
  year.innerText = yearValue;

  //getting cvc to show
  const cvcValue = cvcCardValue.value;
  const cvc = document.getElementById("cvcCard");
  cvc.innerText = cvcValue;
}

confirmBtn.addEventListener("click", cardDetails);
