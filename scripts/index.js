// @todo: Темплейт карточки

// @todo: DOM узлы
const ContainerPicture = document.querySelector('.places__list')
// @todo: Функция создания карточки
function AddPictures(PictureData, DeletePicture) {
  const PictureTemplate = document.querySelector('#card-template').content;
  const PictureElement = PictureTemplate.querySelector('.card').cloneNode(true);

  const AddImage = PictureElement.querySelector('.card__image');
  const AddTitle = PictureElement.querySelector('.card__title');
  const DeleteButton = PictureElement.querySelector('.card__delete-button');

  AddImage.src = PictureData.link;
  AddImage.alt = PictureData.name;
  AddTitle.textContent = PictureData.name;


  DeleteButton.addEventListener('click', () => DeletePicture(PictureElement));

  return PictureElement;
}

// Функция удаления карточки
function DeletePicture(PictureElement) {
  PictureElement.remove();
}

initialCards.forEach(PictureData => {
  const Picture = AddPictures(PictureData, DeletePicture);
  ContainerPicture.append(Picture);
});

// Добавление новой карточки при клике на кнопку

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
