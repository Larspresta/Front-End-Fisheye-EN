function photographerFactory(data) {
    const { name, id, portrait, tagline, city, country, price } = data;
  
    const picture = `assets/photographers/${portrait}`;
  
    function getUserCardDOM() {
      const article = document.createElement('article');
      const img = document.createElement('img');

      img.setAttribute('src', picture);

      const url = document.createElement('a');
      url.setAttribute('href', `photographer.html?id=${id}`);

      const h2 = document.createElement('h2');
      h2.textContent = name;

      const location = document.createElement('h4');
      location.textContent = `${city}, ${country}`;

      const p = document.createElement('p');
      p.textContent = `${tagline}`;

      const span = document.createElement('span');
      span.textContent = `$${price}/hour`;

      url.appendChild(img);
      url.appendChild(h2);

      article.appendChild(url);
      article.appendChild(location);
      article.appendChild(p);
      article.appendChild(span);


      return article;
    }
  
    return { name, id, portrait, tagline, city, country, price, getUserCardDOM };
  }