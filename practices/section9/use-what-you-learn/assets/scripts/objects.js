const movieTitle = document.getElementById("title");
const extraInfo = document.getElementById("extra-name");
const extraInfoValue = document.getElementById("extra-value");
const addMovieBtn = document.getElementById("add-movie-btn");
const filterValue = document.getElementById("filter-title");
const searchMovieBtn = document.getElementById("search-btn");
const moviesCardList = document.getElementById("movie-list");
const addMovieInputs = document.querySelectorAll("#user-input input");

const getMovieData = () => JSON.parse(localStorage.getItem("movieArr"));

const moviesObjectsArr = !!getMovieData() ? getMovieData() : [];

const clearInputs = (inputSectionArr) => {
  for (const input of inputSectionArr) {
    input.value = "";
  }
};

const creatMovieObj = () => {
  if (!movieTitle.value) {
    alert("Please add a movie!!");
    return;
  }
  moviesCardList.classList.remove("visible");
  const movieObj = {};
  if (movieTitle.value && extraInfo.value && extraInfoValue.value) {
    movieObj.title = movieTitle.value;
    movieObj[extraInfo.value] = extraInfoValue.value;
  } else {
    movieObj.title = movieTitle.value;
  }
  moviesObjectsArr.push(movieObj);
  saveToLocalStorage();
  clearInputs(addMovieInputs);
};

const saveToLocalStorage = () => {
  if (!moviesObjectsArr.length) return;
  localStorage.setItem("movieArr", JSON.stringify(moviesObjectsArr));
};

const creatMovieCard = (
  title,
  extraInfo = "",
  extraValue = "",
  doHaveExtra = false,
  doHaveMovie = false
) => {
  const movieLi = document.createElement("li");
  movieLi.classList.add("card");
  if (doHaveMovie) {
    if (doHaveExtra) {
      movieLi.innerHTML = `
      <p>Favorite Movie Title : ${title} </p>
      <p>${extraInfo} : ${extraValue} </p>
      `;
    } else {
      console.log("here");
      movieLi.innerHTML = `
      <p>Favorite Movie Title : ${title} </p>
      `;
    }
  } else {
    if (title) {
      movieLi.innerHTML = `
      <p>Sorry We can't find ${title} !!!</p>
      `;
    } else {
      movieLi.innerHTML = `
    <p>Please add the movie name !!!</p>
    `;
    }
  }
  moviesCardList.classList.add("visible");
  moviesCardList.appendChild(movieLi);
};

const clearFilterList = () => {
  const movieListNodes = document.querySelectorAll("#movie-list li");
  if (!!movieListNodes && movieListNodes.length) {
    for (const liNode of movieListNodes) {
      liNode.remove();
    }
  }
};

const filterByTitle = () => {
  clearFilterList();
  const movieQuery = filterValue.value;
  let doHaveMovie = false;
  let doHaveExtra = false;
  let movieTitle = movieQuery;
  let extraKey = "";
  let extraValue = "";
  const moviesData = getMovieData();
  for (const movie of moviesData) {
    if (movie.title === movieQuery) {
      doHaveMovie = true;
      movieTitle = movie.title;
      extraKey = "";
      extraValue = "";
      for (const objKey in movie) {
        if (objKey !== "title" && objKey) {
          doHaveExtra = true;
          extraKey = objKey;
          extraValue = movie[objKey];
        }
      }
    }
  }

  console.log(
    movieTitle.length,
    extraKey.length,
    extraValue.length,
    doHaveExtra,
    doHaveMovie
  );
  creatMovieCard(movieTitle, extraKey, extraValue, doHaveExtra, doHaveMovie);
};

addMovieBtn.addEventListener("click", creatMovieObj);
searchMovieBtn.addEventListener("click", filterByTitle);
