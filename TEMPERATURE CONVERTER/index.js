const input_number = document.getElementById("input-number");
const toFarenheit = document.getElementById("toFarenheit-checkedbox");
const toCelcius = document.getElementById("toCelcius-checkedbox");

const btn_converter = document.getElementById("btn-converter");
const p_converter = document.getElementById("p-converter");
let temp;

function convert() {
  temp = Number(input_number.value);

  if (toCelcius.checked) {
    const celsius = (5 / 9) * (temp - 32);
    p_converter.innerText = `${celsius.toFixed(1)}°C`;
  } else if (toFarenheit.checked) {
    const fahrenheit = (temp * 9) / 5 + 32;
    p_converter.innerText = `${fahrenheit.toFixed(1)}°F`;
  } else {
    p_converter.innerText = "Please select an option.";
  }
}

btn_converter.addEventListener("click", () => {
  convert();
});
