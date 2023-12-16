function orderPhotographerMedia(order) {
  const photographerMedia = document.querySelector('.photographer-media');
  let contentNodes = document.querySelectorAll('.image-container');
  let content = Array.from(contentNodes);

  switch (order) {
    case 'popularity':
      content.sort((item, nextItem) => {
        let firstNumber = parseInt(
          item.querySelector('.like-tally').textContent
        );
        let secondNumber = parseInt(
          nextItem.querySelector('.like-tally').textContent
        );
        return secondNumber - firstNumber;
      });
      break;
    case 'date':
      content.sort((item, nextItem) => {
        let firstDate = new Date(
          item.querySelector('.media-info').dataset.date
        );
        let secondDate = new Date(
          nextItem.querySelector('.media-info').dataset.date
        );
        return secondDate - firstDate;
      });
      break;
    case 'title':
      content.sort((item, nextItem) => {
        let firstString = item
          .querySelector('.media-info h4')
          .textContent.toLowerCase();
        let secondString = nextItem
          .querySelector('.media-info h4')
          .textContent.toLowerCase();
        return firstString.localeCompare(secondString);
      });
      break;
    default:
      break;
  }

  photographerMedia.innerHTML = '';
  content.forEach((mediaContainer) => {
    photographerMedia.appendChild(mediaContainer);
    console.log(content);
  });
}

const selectMenu = document.querySelector('#select-menu');
selectMenu.addEventListener('change', () => {
  const selectedValue = selectMenu.value;
  orderPhotographerMedia(selectedValue);
});

const initialOrder = selectMenu.value;
orderPhotographerMedia(initialOrder);
