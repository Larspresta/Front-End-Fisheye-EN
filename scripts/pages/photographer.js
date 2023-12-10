//Add JavaScript code linked to the photographer.html page
let params = new URL(document.location).searchParams;
let paramsId = params.get("id");
console.log(paramsId);

async function getPhotographersMedia(){
  return fetch ("data/photographers.json").then((response) => response.json());
}

let selectedPhotographerMedia;

async function init() {
  const {photographers, media} = await getPhotographersMedia();
  
  const selectedPhotographer = photographers.find(photographer => photographer.id === parseInt(paramsId, 10));
  selectedPhotographerMedia = media.filter(item => item.photographerId === parseInt(paramsId, 10));

  const photographerModel = photographerHeaderFactory(selectedPhotographer);
  const photographerDetailsDOM = photographerModel.getInfocardDOM();
  document.querySelector('.photograph-header').appendChild(photographerDetailsDOM);

    selectedPhotographerMedia.forEach(item => {
      const photographerModel = photographerMediaFactory(item);
      const photographerDetailsDOM = photographerModel.getUserMediaDOM();
      document.querySelector('.photographer-media').appendChild(photographerDetailsDOM);
    });

    const lightboxMedia = document.querySelectorAll('.lightbox-media');
    const lightboxArray = Array.from (lightboxMedia);
    const lightboxGallery = document.querySelector('.lightbox-container');
    const lightboxWrapper = document.querySelector('.lightbox-wrapper');
    const lightboxBtnRight = document.querySelector('#right');
    const lightboxBtnLeft = document.querySelector('#left');
    const lightboxBtnClose = document.querySelector('#close');
    const mediaTitle = document.querySelectorAll ('.data-title');

    const lightboxImage = document.createElement('img');
    const lightboxVideo = document.createElement('video');
    const lightboxTitle = document.createElement('h4');
    
    lightboxVideo.classList.add('lightbox-media')
    lightboxImage.classList.add('lightbox-media')
  
    lightboxWrapper.appendChild(lightboxImage);
    lightboxWrapper.appendChild(lightboxVideo);
    lightboxWrapper.appendChild(lightboxTitle);
  
    console.log(lightboxArray);

    console.log (mediaTitle);
  
    let activeImage = 0;

function setActiveImage(media) {
  activeImage = lightboxArray.indexOf(media);
}

function updateTitle(media) {
  const mediaInfo = media.parentElement.querySelector('.media-info');
  const title = mediaInfo ? mediaInfo.getAttribute('data-title') : '';
  lightboxTitle.textContent = title;
}

function showImage(imageSrc) {
  lightboxImage.src = imageSrc;
  lightboxVideo.style.display = 'none';
  lightboxImage.style.display = 'block';
  
}

function showVideo(videoSrc) {
  lightboxVideo.src = videoSrc;
  lightboxImage.style.display = 'none';
  lightboxVideo.controls = true;
  lightboxVideo.style.display = 'block';
}

function showlightbox() {
  lightboxMedia.forEach((image) => {
    image.addEventListener('click', (e) => {
      const media = e.target;
      lightboxGallery.classList.add('active');
      setActiveImage(media);

      if (media.tagName === 'IMG') {
        showImage(media.src);
      }

      if (media.tagName === 'VIDEO') {
        showVideo(media.currentSrc);
      }

      updateTitle(media);
    });
  });

  lightboxBtnRight.addEventListener('click', () => {
    navigate('next');
  });

  lightboxBtnLeft.addEventListener('click', () => {
    navigate('prev');
  });
}

function navigate(direction) {
  if (direction === 'next') {
    activeImage = (activeImage + 1) % lightboxArray.length;
  } else if (direction === 'prev') {
    activeImage = (activeImage - 1 + lightboxArray.length) % lightboxArray.length;
  }

  const media = lightboxArray[activeImage];

  if (media.tagName === 'IMG') {
    showImage(media.src);
  }

  if (media.tagName === 'VIDEO') {
    showVideo(media.currentSrc);
  }

  updateTitle(media);
}

showlightbox();

const closeLightbox = () => {
  lightboxGallery.classList.remove('active');
  lightboxVideo.pause();
  window.removeEventListener('keydown', handleKeydown);
};

const handleKeydown = (e) => {
  console.log(e.key);

  if (!lightboxGallery.classList.contains('active')) return;

  if (e.key.includes('Left')) {
    e.preventDefault();
    navigate('prev');
  }

  if (e.key.includes('Right')) {
    e.preventDefault();
    navigate('next');
  }

  if (e.key.includes('Escape')) {
    e.preventDefault();
    closeLightbox();
  }
};

lightboxBtnClose.addEventListener('click', closeLightbox);

window.addEventListener('keydown', handleKeydown);

}

init();
