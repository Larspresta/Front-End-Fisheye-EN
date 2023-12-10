const lightboxActive = document.querySelectorAll('.photographer-media');
const lightboxGallery = document.querySelector('.lightbox-container');
const lightboxWrapper = document.querySelector('.lightbox-wrapper');
const lightboxBtns = document.querySelectorAll('.lightbox-btn');
const lightboxBtnRight = document.querySelector('#right');
const lightboxBtnLeft = document.querySelector('#left');
const lightboxBtnClose = document.querySelector('#close');

const lightboxImage = document.createElement('img');
const lightboxVideo = document.createElement('video');

lightboxWrapper.appendChild(lightboxImage);
lightboxWrapper.appendChild(lightboxVideo);

let currentMediaIndex = 0;

function showImage(imageSrc) {
    lightboxImage.src = imageSrc;
    lightboxVideo.style.display = 'none';
    lightboxImage.style.display = 'block';
}

// Function to show a video in the lightbox
function showVideo(videoSrc) {
    lightboxVideo.src = videoSrc;
    lightboxImage.style.display = 'none';
    lightboxVideo.controls = true;
    lightboxVideo.style.display = 'block';
}

lightboxActive.forEach((image, index) => {
    image.addEventListener('click', (e) => {
        const media = e.target;
        lightboxGallery.classList.add('active');
        currentMediaIndex = index;

        if (media.tagName === 'IMG') {
            showImage(media.src);
        }

        if (media.tagName === 'VIDEO') {
            showVideo(media.currentSrc);
        }
    });
});

lightboxBtnClose.addEventListener('click', () => {
    lightboxGallery.classList.remove('active');
    lightboxVideo.pause();
});

