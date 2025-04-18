const selectTag = document.querySelectorAll(".js-select-convertors");
const convertButton = document.querySelector(".js-convert-button");
const displayValue = document.querySelector('.js-display-value');
const displayConvertedValue = document.querySelector('.js-display-convertd-value');

let selectType = "";
selectTag.forEach((temp) => {
  temp.addEventListener("change", () => {
    selectType = temp.value;
  });
});

function calculateTemperature() {
  const temperatureInput = document.querySelector(
    ".js-input-temperature-value"
  );
  // console.log(temperatureInput);
  const temperatureValue = temperatureInput.value;
  console.log(selectType);
  let temperatureValues = 0;

  if (selectType === "celsius") {
    temperatureValues = ((temperatureValue - 32) * 5) / 9;
  } else if (selectType === "fahrenheit") {
    temperatureValues = (temperatureValue * 9) / 5 + 32;
  }
  console.log(temperatureValues);
  displayValue.innerHTML = `Temparature Value : <span class="temp">${temperatureValue}</span>`;
  displayConvertedValue.innerHTML = `${selectType} : <span class="converted">${temperatureValues}</span>`


  temperatureInput.value = "";
}

convertButton.addEventListener("click", () => {
  calculateTemperature();
});
