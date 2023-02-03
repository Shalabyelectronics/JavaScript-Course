const addMovieBtn = document.querySelector("header").lastElementChild;
const addMovieModal = document.getElementById("add-modal");
const deleteMovieModal = document.getElementById("delete-modal");
const addMovieDataBtn = document.querySelector(".btn--success");
const movieTitleInput = document.querySelector("#title");
const movieImageInput = document.querySelector("#image-url");
const movieRatingInput = document.querySelector("#rating");
const addCancelBtn = document.querySelectorAll(".btn--passive")[0];
const deleteCancelBtn = document.querySelectorAll(".btn--passive")[1];
const removeBtn = (cardId) => document.getElementById(`remove-btn-${cardId}`);
const addConfirmClass = document
  .querySelector(".btn--danger")
  .classList.add("confirmation");
const confirmationBtn = document.querySelector(".confirmation");
const movieListParent = document.getElementById("movie-list");
const backDrop = document.getElementById("backdrop");
const activeModal = () => document.querySelector(".modal.visible");
const entrySection = document.getElementById("entry-text");
const moviesList = [];
const movieRemoveTemp = [];
let cardId = 0;
const checkIfMovie = () =>
  moviesList.length
    ? (entrySection.style.display = "none")
    : (entrySection.style.display = "block");

const addMovieHandler = () => {
  if (addMovieModal.style.display !== "block") {
    addMovieModal.classList.toggle("visible");
    backDropToggle();
  } else {
    alert("Please Add Your Favorate Move Data!!");
  }
};

const backDropToggle = () => {
  backDrop.classList.toggle("visible");
};

const getMovieInputData = () => {
  if (
    movieTitleInput.value.trim() === "" ||
    movieImageInput.value.trim() === "" ||
    movieRatingInput.value < 1 ||
    movieRatingInput.value > 5
  ) {
    alert("You Need to fill All Fields, and Rating must be between (1 and 5)");
    return;
  }
  const movieData = {
    movieTitle: movieTitleInput.value.trim(),
    movieImage: movieImageInput.value.trim(),
    movieRating: movieRatingInput.value,
  };
  // console.log(movieData);
  cancelHandler(activeModal);
  moviesList.push(movieData);
  createMovieCard(movieData);
  restUserInput();

  console.log(moviesList);
};

const restUserInput = () => {
  movieTitleInput.value = "";
  movieImageInput.value = "";
  movieRatingInput.value = "";
};

const createMovieCard = (data) => {
  checkIfMovie();
  const movieCardNumber = `card--${cardId}`;
  console.log(cardId);
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.classList.add(movieCardNumber);
  newMovieElement.innerHTML = `
  <div class="movie-element__image">
  <img src="${data.movieImage}" alt="${data.movieTitle}"/>
  </div>
  <div class="movie-element__info">
  <h1>${data.movieTitle}</h1>
  <p>${data.movieRating}/5 Stars</p>
  <br>
  <hr>
  <button class="btn btn--danger" id="remove-btn-${cardId}">Remove</button>
  </div>
  `;
  movieListParent.append(newMovieElement);
  // console.log(removeBtn(cardId));
  removeBtn(cardId).addEventListener(
    "click",
    removeMoveCardHandler.bind(this, movieCardNumber)
  );
  cardId++;
};
const cancelHandler = (modal) => {
  console.log(modal);
  console.log(modal());
  modal().classList.toggle("visible");
  restUserInput();
  backDropToggle();
  if (!movieRemoveTemp) return;
  movieRemoveTemp.pop();
};
const removeMovieConfirmation = () => {
  console.log(movieRemoveTemp[0]);
  document.querySelector(`.movie-element.${movieRemoveTemp[0]}`).remove();
  moviesList.pop();
  cancelHandler(activeModal);
  checkIfMovie();
  movieRemoveTemp.pop();
};
const removeMoveCardHandler = (cardClass) => {
  console.log("Remove Movie clicked");
  deleteMovieModal.classList.toggle("visible");
  backDropToggle();
  if (movieRemoveTemp.includes(cardClass)) return;
  movieRemoveTemp.push(cardClass);
  console.log(movieRemoveTemp);
};

addMovieBtn.addEventListener("click", addMovieHandler);
addMovieDataBtn.addEventListener("click", getMovieInputData);
addCancelBtn.addEventListener("click", cancelHandler.bind(this, activeModal));
deleteCancelBtn.addEventListener(
  "click",
  cancelHandler.bind(this, activeModal)
);
backDrop.addEventListener("click", cancelHandler.bind(this, activeModal));

confirmationBtn.addEventListener("click", removeMovieConfirmation);
