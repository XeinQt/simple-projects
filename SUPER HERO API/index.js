const getNewHero = document.querySelector(".getHero");
const search = document.querySelector(".search");

const baseURL =
  "https://superheroapi.com/api.php/52ecec8fdd9429dc581dfd8ba54364ef";
const searching = document.getElementById("search");
const getHero = document.querySelector(".getHero");

const getSuperHero = (name) => {
  fetch(`${baseURL}/search/${name}`)
    .then((response) => response.json())
    .then((json) => {
      const hero = json.results[0];
      console.log(hero);

      document.querySelector(
        ".heroImages"
      ).innerHTML = `<img src="${hero.image.url}"/>`;
    });
};

getHero.addEventListener("click", () => {
  getSuperHero(searching.value);
});
