const TOKEN = "122097240728003181";
const BASE_URL = `https://www.superheroapi.com/api.php/${TOKEN}`;

const herobtn = document.getElementById("heroButton");
const heroImgDiv = document.getElementById("heroImg");
const searchDiv = document.getElementById("Search");
const inputValue= document.getElementById('searchInput')


const wrapperElement = document.querySelector('.wrapper');
wrapperElement.classList.add('wrapper');

const getSuperHero = (id, name) => {
  //pass name : base_url/search/batman
  //json.results[0].image.url

  //id : base_url/id
  fetch(`${BASE_URL}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      const name = `<h2>${json.name}</h2>`
      heroImgDiv.innerHTML = ` ${name} <img src="${json.image.url}" heigth=200 width=200/>`;
    });
};

const getSerachSuperHero = (name) => {
console.log(`${inputValue.value} here` )
  fetch(`${BASE_URL}/search/${name}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      const hero = json.results[0]
      console.log(hero)
      heroImgDiv.innerHTML = `<img src="${hero.image.url}" heigth=200 width=200/>`;
    });
};

const randomHero = () => {
  const noOfHerod = 731;
  return Math.floor(Math.random() * noOfHerod) + 1;
};
//const randonNumber = Number(Math.floor(Math.random() * 731))
herobtn.onclick = () => getSuperHero(randomHero());
searchDiv.onclick = () => getSerachSuperHero(inputValue.value);
