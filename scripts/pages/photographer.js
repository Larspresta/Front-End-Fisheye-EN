//Add JavaScript code linked to the photographer.html page
let params = new URL(document.location).searchParams;
let paramsId = params.get("id");

console.log(paramsId);

async function getPhotographers(){
  return fetch ("data/photographers.json").then((response) => response.json());
}

function photographerMediaFactory(data) {
    const { name, id, portrait, tagline, city, country, price } = data;
  
    const picture = `assets/photographers/${portrait}`;
  
    function getUserCardDOM() {
      const userCard = document.createElement('div');
      userCard.setAttribute("class", "photograph-wrapper");

      const h2 = document.createElement('h2');
      h2.textContent = name;

      const location = document.createElement('h4');
      location.textContent = `${city}, ${country}`;

      const p = document.createElement('p');
      p.textContent = `${tagline}`;

      const infoBox = document.createElement('div');
      infoBox.appendChild(h2);
      infoBox.appendChild(location);
      infoBox.appendChild(p);

      const contactButton = document.querySelector('.contact_button');
      contactButton.setAttribute("aria-label", `Open contact form ${name}`);

      const img = document.createElement('img')
      img.setAttribute("class", "photographer-image")
      img.setAttribute("src", picture);
      img.setAttribute("alt", name);

      userCard.appendChild(infoBox);
      userCard.appendChild(contactButton);
      userCard.appendChild(img);


      const pricerate = document.getElementById("price");
      pricerate.textContent = `$${price}/hour`;

      return userCard

    }
    return { name, id, portrait, tagline, city, country, price, getUserCardDOM };
}

async function init() {
    const {photographers} = await getPhotographers();

    const selectedPhotographer = photographers.find(photographer => photographer.id === parseInt(paramsId, 10));

    const photographerModel = photographerMediaFactory(selectedPhotographer);
    const photographerDetailsDOM = photographerModel.getUserCardDOM();
    document.querySelector('.photograph-header').appendChild(photographerDetailsDOM);
}

window.addEventListener('load', init);
