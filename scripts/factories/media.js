function photographerMediaFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;
  
    const imgVideos = `assets/photographers/${photographerId}/${video}`;
    const images = `assets/photographers/${photographerId}/${image}`;
  
    function getUserMediaDOM() {
      const imageContainer = document.createElement('div');
      imageContainer.setAttribute('class', 'image-container');
  
      let media;
  
      if (image !== undefined) {
        media = document.createElement('img');
        media.setAttribute('src', images);
        media.setAttribute('alt', title);
      } else if (video !== undefined) {
        media = document.createElement('video');
        media.setAttribute('src', imgVideos);
        media.setAttribute('alt', title);
      }
  
      imageContainer.appendChild(media);
  
      const mediaInfo = document.createElement('div');
      mediaInfo.setAttribute('class', 'media-info');
      const mediaName = document.createElement('h2');
      mediaName.textContent = `${title}`;
      mediaInfo.appendChild(mediaName);
  
      imageContainer.appendChild(mediaInfo);
  
      return imageContainer;
    }
  
    return { id, photographerId, title, image, video, likes, date, price, getUserMediaDOM };
  }