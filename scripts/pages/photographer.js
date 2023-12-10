//Add JavaScript code linked to the photographer.html page
let params = new URL(document.location).searchParams;
let paramsId = params.get("id");
console.log(paramsId);

async function getPhotographersMedia(){
  return fetch ("data/photographers.json").then((response) => response.json());
}

async function init() {
  const {photographers, media} = await getPhotographersMedia();

  const selectedPhotographer = photographers.find(photographer => photographer.id === parseInt(paramsId, 10));
  const selectedPhotographerMedia = media.filter(item => item.photographerId === parseInt(paramsId, 10));

  const photographerModel = photographerHeaderFactory(selectedPhotographer);
  const photographerDetailsDOM = photographerModel.getInfocardDOM();
  document.querySelector('.photograph-header').appendChild(photographerDetailsDOM);

    selectedPhotographerMedia.forEach(item => {
      const photographerModel = photographerMediaFactory(item);
      const photographerDetailsDOM = photographerModel.getUserMediaDOM();
      document.querySelector('.photographer-media').appendChild(photographerDetailsDOM);
    });
  } 

  init();
