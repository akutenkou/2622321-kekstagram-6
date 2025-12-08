import { generatePhotos } from './photos.js';

const pictureTemplate = document.querySelector('#picture');
const picturesContainer = document.querySelector('.pictures');

export const renderThumbnails = (photos) => {
  const fragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const thumbnail = pictureTemplate.content.querySelector('.picture').cloneNode(true);

    const img = thumbnail.querySelector('.picture__img');
    const likes = thumbnail.querySelector('.picture__likes');
    const comments = thumbnail.querySelector('.picture__comments');

    img.src = photo.url;
    img.alt = photo.description;
    likes.textContent = photo.likes;
    comments.textContent = photo.comments.length;

    fragment.appendChild(thumbnail);
  });

  picturesContainer.innerHTML = '';
  picturesContainer.appendChild(fragment);
};
