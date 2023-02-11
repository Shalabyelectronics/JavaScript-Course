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
  const movieTitleValue = movieTitle.value.trim();
  const extrInfoKey = extraInfo.value.trim();
  const extrInfoValue = extraInfoValue.value.trim();
  if (!movieTitleValue) {
    alert("Please add a movie!!");
    return;
  }
  moviesCardList.classList.remove("visible");
  const movieObj = {};

  if (movieTitleValue && extrInfoKey && extrInfoValue) {
    movieObj.title = movieTitleValue;
    movieObj[extrInfoKey] = extrInfoValue;
  } else {
    movieObj.title = movieTitleValue;
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
  const filteredMovie = new Map();
  const moviesData = getMovieData();
  for (const movie of moviesData) {
    filteredMovie.set("doHaveMovie", false);
    filteredMovie.set("doHaveExtra", false);
    filteredMovie.set("movieTitle", null);
    filteredMovie.set("extraKey", null);
    filteredMovie.set("extraValue", null);
    if (movie.title === movieQuery) {
      filteredMovie.set("movieTitle", movieQuery);
      filteredMovie.set("doHaveMovie", true);
      for (const objKey in movie) {
        if (objKey !== "title") {
          filteredMovie.set("doHaveExtra", true);
          filteredMovie.set("extraKey", objKey);
          filteredMovie.set("extraValue", movie[objKey]);
        }
      }
    }
    let copyFilteredMovie = new Map(
      JSON.parse(JSON.stringify(Array.from(filteredMovie)))
    );
    if (copyFilteredMovie.get("movieTitle")) {
      creatMovieCard(
        copyFilteredMovie.get("movieTitle"),
        copyFilteredMovie.get("extraKey"),
        copyFilteredMovie.get("extraValue"),
        copyFilteredMovie.get("doHaveExtra"),
        copyFilteredMovie.get("doHaveMovie")
      );
    }

    filteredMovie.clear();
  }
  creatMovieCard(movieQuery);
};

addMovieBtn.addEventListener("click", creatMovieObj);
searchMovieBtn.addEventListener("click", filterByTitle);
