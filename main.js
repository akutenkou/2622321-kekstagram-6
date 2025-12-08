import { generatePhotos } from './js/photos.js';
import { renderThumbnails } from './js/thumbnails.js';

const photos = generatePhotos();
const pictureContainer = document.querySelector('.pictures');

renderThumbnails(photos, pictureContainer);

export { photos };
