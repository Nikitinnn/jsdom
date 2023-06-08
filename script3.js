const depositAmountInput = document.getElementById('deposit-amount');
const interestRateInput = document.getElementById('interest-rate');
const timePeriodInput = document.getElementById('time-period');
const calculateBtn = document.getElementById('calculate-btn');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
  const depositAmount = +depositAmountInput.value;
  const interestRate = +interestRateInput.value;
  const timePeriod = +timePeriodInput.value;

  const interest = (depositAmount * (interestRate / 100)) * timePeriod;
  const totalAmount = depositAmount + interest;

  resultDiv.innerText = `Через ${timePeriod} год на вашем животе будет ${totalAmount.toFixed(2)} кубика.`;
});
const myDiv = document.getElementById('my-div');
const myButton = document.getElementById('my-button');

myButton.addEventListener('click', () => {
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  myDiv.style.backgroundColor = randomColor;
});