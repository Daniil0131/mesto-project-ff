// @todo: Темплейт карточки

// @todo: DOM узлы
const containerCard = document.querySelector('.places__list')
// @todo: Функция создания карточки
function addCard(cardData, deleteCard) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  const addImage = cardElement.querySelector('.card__image');
  const addTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');

  addImage.alt = cardData.name;
  addImage.src = cardData.link;
  addTitle.textContent = cardData.name;


  deleteButton.addEventListener('click', () => deleteCard(cardElement));

  return cardElement;
}

// Функция удаления карточки
function deleteCard(cardElement) {
  cardElement.remove();
}

initialCards.forEach(cardData => {
  const card = addCard(cardData, deleteCard);
  containerCard.append(card);
});

// Добавление новой карточки при клике на кнопку

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
