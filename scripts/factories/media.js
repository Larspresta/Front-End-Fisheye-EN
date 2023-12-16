function photographerMediaFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;
  
    const imgVideos = `assets/images/${photographerId}/${video}`;
    const images = `assets/images/${photographerId}/${image}`;
  
    function getUserMediaDOM() {
      const imageContainer = document.createElement('div');
      imageContainer.setAttribute('data-id', id);
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
        media.setAttribute ('class', 'lightbox-media');

      imageContainer.appendChild(media);
  
      const mediaInfo = document.createElement('div');
      mediaInfo.setAttribute('class', 'media-info');
      mediaInfo.setAttribute('data-title', title);
      mediaInfo.setAttribute('data-date', date)

      const mediaName = document.createElement('h4');

      const likesBox = document.createElement('div');
      likesBox.setAttribute('class', 'likes-box not-liked');
      likesBox.ariaLabel = "likes";
      likesBox.setAttribute("onclick", "likeMedia(event)");
      likesBox.setAttribute("role", "button");

      const mediaLikeNumber = document.createElement ('span');
      mediaLikeNumber.setAttribute('class', 'like-tally');
      mediaLikeNumber.textContent = likes;
      likesBox.appendChild(mediaLikeNumber);

      const likeHeartImg = document.createElement ('img');
      likeHeartImg.className = 'heart-icon';
      likeHeartImg.src = `assets/icons/heart.svg`;
      likesBox.appendChild(likeHeartImg);

      mediaName.textContent = `${title}`;

      mediaInfo.appendChild(mediaName);
      mediaInfo.appendChild(likesBox);
  
      imageContainer.appendChild(mediaInfo);
  
      return imageContainer;
    }
  
    return { id, photographerId, title, image, video, likes, date, price, getUserMediaDOM };
  }