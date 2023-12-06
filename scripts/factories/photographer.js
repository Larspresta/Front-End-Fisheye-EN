function photographerFactory(data) {
    const { name, id, portrait, tagline, city, country, price } = data;
  
    const picture = `assets/photographers/${portrait}`;
  
    function getUserCardDOM() {
      const article = document.createElement('article');
      const img = document.createElement('img');

      img.setAttribute('src', picture);

      const link = document.createElement('a');
      link.setAttribute('href', `photographer.html?id=${id}`);

      const h2 = document.createElement('h2');
      h2.textContent = name;

      const location = document.createElement('h4');
      location.textContent = `${city}, ${country}`;

      const p = document.createElement('p');
      p.textContent = `${tagline}`;

      const span = document.createElement('span');
      span.textContent = `$${price}/hour`;

      link.appendChild(img);
      link.appendChild(h2);

      article.appendChild(link);
      article.appendChild(location);
      article.appendChild(p);
      article.appendChild(span);


      return article;
    }
  
    return { name, id, portrait, tagline, city, country, price, getUserCardDOM };
  }

  function photographerHeaderFactory(data) {
    const { name, id, portrait, tagline, city, country, price } = data;
  
    const picture = `assets/photographers/${portrait}`;
  
    function getInfocardDOM() {
      const userCard = document.createElement('div');
      userCard.setAttribute ('class', 'photograph-wrapper')
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

      const img = document.createElement ('img')
      img.setAttribute("src", picture);
      img.setAttribute("alt", name);
    

      userCard.appendChild(infoBox);
      userCard.appendChild(contactButton);
      userCard.appendChild(img);


      const likeAndRate = document.querySelector(".like-and-price");
      likeAndRate.textContent = `$${price}/hour`;

      return userCard

    }
    return { name, id, portrait, tagline, city, country, price, getInfocardDOM };
}

  