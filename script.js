const nameInputValue = document.getElementById("cardName");
const cardNumberValue = document.getElementById("cardNumber");
const monthExpValue = document.getElementById("cardExp_mm");
const yearExpValue = document.getElementById("cardExpYy");
const cvcCardValue = document.getElementById("cvc");
const confirmBtn = document.getElementById("confirmBtn");
const inputBox = document.getElementById("input-box");
const thankYou = document.getElementById("thank-you-section");
const continueBtn = document.getElementById("continueBtn");
const cvc = document.getElementById("cvcCard");
const names = document.getElementById("holderName");
const numbers = document.getElementById("numbers");
const month = document.getElementById("theMM");
const year = document.getElementById("theYY");

//Validations
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
  } else if (isNaN(cvcValue) || cvcValue.length < 3) {
    cvcErrorMessage("Invalid number");
  } else {
    cvcCardValue.style.borderColor = "grey";
    cvcError.style.display = "none";
  }
  return isValid;
}

const hideElement = (type) => {
  type === "form"
    ? (inputBox.style.display = "none")
    : (thankYou.style.display = "none");
};

const showElement = (type) => {
  type === "form"
    ? (inputBox.style.display = "block")
    : (thankYou.style.display = "block");
};

function cardDetails() {
  if (!validation()) {
    return;
  }

  // Getting cardholder name to show
  const nameValue = nameInputValue.value;
  names.innerText = nameValue;

  // Getting card number to show
  const numberValue = cardNumberValue.value;
  numbers.innerText = numberValue;

  // Getting MM to show
  const monthValue = monthExpValue.value;
  month.innerText = monthValue;

  // Getting YY to show
  const yearValue = yearExpValue.value;
  year.innerText = yearValue;

  // Getting CVC to show
  const cvcValue = cvcCardValue.value;
  cvc.innerText = cvcValue;

  // // show success message
  hideElement("form");
  showElement("thanks");

  // inputContainer.innerHTML =
  // "<div id='thank-you-section'  text-align: center;'><i class='fa-solid fa-circle-check' id='thankYouIcon'></i>  <h2>Thank You!</h2><p>We've added your card details.</p><button iconst '>Continue</button></div>";
}

resetInputs = () => {
  nameInputValue.value = "";
  cardNumberValue.value = "";
  monthExpValue.value = "";
  yearExpValue.value = "";
  cvcCardValue.value = "";

  // Reset the displayed card values to their initial state
  names.innerText = "Jane Appleseed";
  numbers.innerText = "0000 0000 0000 0000";
  month.innerText = "00";
  year.innerText = "00";
  cvc.innerText = "000";
};

// Adding the event listener for the Confirm button
confirmBtn.addEventListener("click", cardDetails);
continueBtn.addEventListener("click", () => {
  hideElement("thankyou");
  showElement("form");
  resetInputs();
});
