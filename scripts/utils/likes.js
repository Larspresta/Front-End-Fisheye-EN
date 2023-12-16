let totalLikes = 0;
async function getTotalLikesPhotographerID(photographerId) {
    try {
      const response = await fetch("data/photographers.json");
      const jsonData = await response.json();
  
      const targetPhotographerId = Number(photographerId);
  
      jsonData.media.forEach(item => {
        if (item.photographerId === targetPhotographerId) {
          totalLikes += item.likes;
        }
      });
  
      console.log(`Total Likes for photographerId ${photographerId}:`, totalLikes);
  
      const LikesCounter = document.querySelector('#likes');
      LikesCounter.textContent = totalLikes;
  
      return totalLikes;
    } catch (error) {
      console.error('Error fetching or parsing JSON:', error);
      throw error;
    }
  }
  
  if (paramsId) {
    getTotalLikesPhotographerID(paramsId)
      .then(totalLikes => {
        console.log(`Total likes for photographer ID ${paramsId}: ${totalLikes}`);
      })
      .catch(error => {
        console.error(`Error could not get likes: ${error.message}`);
      });
  } else {
    console.error('PhotographerId not found in the URL parameters.');
  }

  function likeMedia(e) {
    const target = e.currentTarget;
    if (target.classList.contains('not-liked')) {
      target.classList.add('liked');
      target.classList.remove('not-liked');
      target.querySelector(".like-tally").textContent = parseInt(target.textContent) + 1;
      totalLikes += 1;
      getTotalLikesPhotographerID();
    }
  }

