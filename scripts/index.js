const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const profileEditButton = document.querySelector(".profile__edit-btn");
const profileNameElement = document.querySelector(".profile__name");
const profileJobElement = document.querySelector(".profile__description");

const editModal = document.querySelector("#edit-modal");
const editFormElement = document.forms["edit-profile"];
const editModalCloseBtn = editModal.querySelector(".modal__close-btn");
const nameInput = editModal.querySelector("#profile-name-input");
const jobInput = editModal.querySelector("#profile-description-input");

const cardTemplate = document.querySelector("#card-template");
const cardList = document.querySelector(".cards__list");

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardNameEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");

  cardNameEl.textContent = data.name;
  cardImageEl.setAttribute("src", data.link);
  cardImageEl.setAttribute("alt", data.name);

  return cardElement;
}

function openModal() {
  nameInput.value = profileNameElement.textContent;
  jobInput.value = profileJobElement.textContent;
  editModal.classList.add("modal_opened");
}

function closeModal() {
  editModal.classList.remove("modal_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = nameInput.value;
  profileJobElement.textContent = jobInput.value;
  closeModal();
}

profileEditButton.addEventListener("click", openModal);
editModalCloseBtn.addEventListener("click", closeModal);
editFormElement.addEventListener("submit", handleProfileFormSubmit);

for (let i = 0; i < initialCards.length; i++) {
  const cardElement = getCardElement(initialCards[i]);
  cardList.prepend(cardElement);
}
