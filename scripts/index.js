// @todo: Темплейт карточки

// @todo: DOM узлы
const containerPicture = document.querySelector('.places__list')
// @todo: Функция создания карточки
function addPictures(pictureData, deletePicture) {
  const pictureTemplate = document.querySelector('#card-template').content;
  const pictureElement = pictureTemplate.querySelector('.card').cloneNode(true);

  const addImage = pictureElement.querySelector('.card__image');
  const addTitle = pictureElement.querySelector('.card__title');
  const deleteButton = pictureElement.querySelector('.card__delete-button');

  addImage.src = pictureData.link;
  addImage.alt = pictureData.name;
  addTitle.textContent = pictureData.name;


  deleteButton.addEventListener('click', () => deletePicture(pictureElement));

  return pictureElement;
}

// Функция удаления карточки
function deletePicture(pictureElement) {
  pictureElement.remove();
}

initialCards.forEach(pictureData => {
  const picture = addPictures(pictureData, deletePicture);
  containerPicture.append(picture);
});

// Добавление новой карточки при клике на кнопку

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
