
const bigPictureElement = document.querySelector('.big-picture');
const closeButtonElement = bigPictureElement.querySelector('#picture-cancel');
const bigImageElement = bigPictureElement.querySelector('.big-picture__img img');
const likesCounterElement = bigPictureElement.querySelector('.likes-count');
const commentsCounterElement = bigPictureElement.querySelector('.comments-count');
const commentsListElement = bigPictureElement.querySelector('.social__comments');
const photoDescriptionElement = bigPictureElement.querySelector('.social__caption');
const commentCountBlockElement = bigPictureElement.querySelector('.social__comment-count');
const loadMoreButtonElement = bigPictureElement.querySelector('.comments-loader');

const createCommentElement = ({ avatar, name, message }) => {
  const commentElement = document.createElement('li');
  commentElement.className = 'social__comment';

  const avatarImg = new Image();
  avatarImg.className = 'social__picture';
  avatarImg.src = avatar;
  avatarImg.alt = name;
  avatarImg.width = 35;
  avatarImg.height = 35;

  const commentText = document.createElement('p');
  commentText.className = 'social__text';
  commentText.textContent = message;

  commentElement.append(avatarImg, commentText);
  return commentElement;
};

const renderComments = (comments) => {
  commentsListElement.innerHTML = '';

  const fragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const commentElement = createCommentElement(comment);
    fragment.appendChild(commentElement);
  });

  commentsListElement.appendChild(fragment);

  commentCountBlockElement.classList.add('hidden');
  loadMoreButtonElement.classList.add('hidden');
};

const openFullPhoto = (photo) => {
  bigImageElement.src = photo.url;
  bigImageElement.alt = photo.description;
  likesCounterElement.textContent = photo.likes;
  commentsCounterElement.textContent = photo.comments.length;
  photoDescriptionElement.textContent = photo.description;

  renderComments(photo.comments);

  bigPictureElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const closeFullPhoto = () => {
  bigPictureElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

closeButtonElement.addEventListener('click', closeFullPhoto);

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape' && !bigPictureElement.classList.contains('hidden')) {
    closeFullPhoto();
  }
});

export { openFullPhoto };
