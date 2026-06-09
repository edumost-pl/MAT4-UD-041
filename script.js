// document
// .getElementById("openLesson")
// .addEventListener("click", () => {

// window.location.href =
// "indexMat.html";

// });



// Переход на Экран 2
function openLine(line) {
  document.querySelector(".city-screen").classList.add("hide");

  document.querySelector(".metro-screen").classList.remove("hide");
}

const guide = document.querySelector(".guide-box");
const owlBtn = document.querySelector(".owl-button");

function hideGuide() {
  setTimeout(() => {
    guide.classList.add("hide");
    owlBtn.style.display = "flex";
  }, 8000);
}

// Первый запуск
hideGuide();

owlBtn.addEventListener("click", () => {
  guide.classList.remove("hide");
  owlBtn.style.display = "none";

  hideGuide(); // запускаем таймер заново
});

// ЗДАНИЯ
const districts = {
  numbers: {
    title: "DZIELNICA LICZB",

    content: `
            <p>✅ Cyfry</p>
            <p>✅ Liczby naturalne</p>
            <p>✅ Porównywanie liczb</p>
            <p>✅ Kolejność liczb</p>
        `,
  },

  measures: {
    title: "DZIELNICA WIELKOŚCI",

    content: `
        <p>✅ Długość</p>
        <p>✅ Masa</p>
        <p>✅ Czas</p>
        <p>✅ Pieniądze</p>
        <p>✅ Jednostki miar</p>
    `,
  },
  operations: {
    title: "DZIELNICA DZIAŁAŃ",

    content: `
            <p>✅ Dodawanie</p>
            <p>✅ Odejmowanie</p>
            <p>✅ Mnożenie</p>
            <p>✅ Dzielenie</p>
        `,
  },

  fractions: {
    title: "DZIELNICA UŁAMKÓW",

    content: `
            <p>✅ Ułamki zwykłe</p>
            <p>🟡 Ułamki dziesiętne</p>
            <p>⏳ Procenty</p>
            <p>⏳ Liczby ujemne</p>
        `,
  },

  geometry: {
    title: "DZIELNICA GEOMETRII",

    content: `
            <p>⏳ Figury płaskie</p>
            <p>⏳ Kąty</p>
            <p>⏳ Pole figur</p>
            <p>⏳ Bryły</p>
        `,
  },

  data: {
    title: "DZIELNICA DANYCH",

    content: `
            <p>⏳ Tabele</p>
            <p>⏳ Wykresy</p>
            <p>⏳ Średnia</p>
        `,
  },

  algebra: {
    title: "DZIELNICA ALGEBRY",

    content: `
            <p>⏳ Wyrażenia</p>
            <p>⏳ Równania</p>
            <p>⏳ Potęgi</p>
        `,
  },
};

const card = document.querySelector(".district-card");
const title = document.querySelector("#districtTitle");
const content = document.querySelector("#districtContent");
let cardTimer;
let currentDistrict = null;

// Функция показа зданий
function showDistrict(name) {

    // если нажали на уже открытую карточку
    if(currentDistrict === name && !card.classList.contains("hidden")){

        card.classList.add("hidden");
        currentDistrict = null;

        clearTimeout(cardTimer);

        return;
    }

    title.innerHTML = districts[name].title;
    content.innerHTML = districts[name].content;

    card.classList.remove("hidden");

    currentDistrict = name;

    clearTimeout(cardTimer);

    cardTimer = setTimeout(() => {

        card.classList.add("hidden");
        currentDistrict = null;

    }, 8000);
}
// Привязка кнопок
document
  .querySelector("#numbersMarker")
  .addEventListener("click", () => showDistrict("numbers"));

document
  .querySelector("#operationsMarker")
  .addEventListener("click", () => showDistrict("operations"));

  document
  .querySelector("#measuresMarker")
  .addEventListener("click", () => showDistrict("measures"));

document
  .querySelector("#fractionsMarker")
  .addEventListener("click", () => showDistrict("fractions"));

document
  .querySelector("#geometryMarker")
  .addEventListener("click", () => showDistrict("geometry"));

document
  .querySelector("#dataMarker")
  .addEventListener("click", () => showDistrict("data"));

document
  .querySelector("#algebraMarker")
  .addEventListener("click", () => showDistrict("algebra"));
