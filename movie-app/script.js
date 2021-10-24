const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=22ab907f7563e30e4085ff9ad00b42b9'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=22ab907f7563e30e4085ff9ad00b42b9&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

// Get initial movies
getMovies(API_URL)

async function getMovies(url) {
  const response = await fetch(url)
  const data = await response.json()

  showMovies(data.results)
}

function showMovies(movies) {
  /* clearing the main part */
  main.innerHTML = ''

  movies.forEach((movie) => {
    /* destructuring: getting the data from the object */
    const { title, poster_path, vote_average, overview } = movie

    /* creating a movie element */
    const movieEl = document.createElement('div')
    movieEl.classList.add('movie')

    movieEl.innerHTML = `
      <img src="${IMG_PATH + poster_path}" alt="${title}">
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
      `
      main.appendChild(movieEl)
  })
}

function getClassByRate(vote) {
  if (vote >= 8.5) {
    return 'green'
  } else if (vote >= 7.5) {
    return 'orange'
  } else if (vote >= 6) {
    return 'yellow'
  } else {
    return 'red'
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const searchTerm = search.value

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm)

    search.value = '' /* clearing the search */
  }
  else {
    window.location.reload /* reloading the page */
  }
})
