const bill = document.getElementById("bill");
const tip = document.getElementById("tip");

const total = document.getElementById("total");

const add = document.querySelector(".add");
const minus = document.querySelector(".minus");
const num = document.querySelector(".num");
let totalPerson = Number(num.innerText);

add.addEventListener("click", () => {
  totalPerson++;
  calculateTotal();
  num.innerText = totalPerson;
});

minus.addEventListener("click", () => {
  if (totalPerson > 0) {
    totalPerson--;
    calculateTotal();
    num.innerText = totalPerson;
  }
});

bill.addEventListener("input", () => {
  calculateTotal();
});

tip.addEventListener("input", () => {
  calculateTotal();
});

const calculateTotal = () => {
  let billValue = Number(bill.value);
  const tipValue = Number(tip.value);

  if (billValue >= 0 && tipValue >= 0) {
    let totalPay = (billValue * tipValue) / 100;

    let perHeadPay = (billValue + totalPay) / totalPerson;

    total.innerText = `$${perHeadPay.toFixed(2).toLocaleString("en-US")}`;
  } else {
    alert("Invalid input");
  }
};
