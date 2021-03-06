window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const initialAmount = document.getElementById("loan-amount");
  const initialYears = document.getElementById("loan-years");
  const initialRate = document.getElementById("loan-rate");
  initialAmount.value = 25000;
  initialYears.value = 5;
  initialRate.value = 3.5;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const valuesForCalculate = getCurrentUIValues();
  const montlyPayment = calculateMonthlyPayment(valuesForCalculate);
  updateMonthly(montlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  var montlyAmount = 0;
  const P = parseFloat(values.amount);
  const i = (parseFloat(values.rate) / 100) / 12;
  const n = parseInt(values.years) * 12;
  montlyAmount = (P * i) / (1 - Math.pow(1 + i, -n));
  montlyAmount = montlyAmount.toFixed(2);
  return montlyAmount;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayShow = document.getElementById("monthly-payment");
  monthlyPayShow.innerText = "$" + monthly;
}
