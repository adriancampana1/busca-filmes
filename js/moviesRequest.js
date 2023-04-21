const API_KEY = 'api_key=8b49eb665d7d73d5946a628b2fa62b17';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_POPULARITY_URL =
    BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const API_POPULAR_KIDS_URL =
    BASE_URL +
    '/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&' +
    API_KEY;
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
const galleryWrapper = document.querySelector(
    '.featured-movie .gallery-wrapper'
);

getMovies(API_POPULAR_KIDS_URL);
showMovies();

export function getMovies(url) {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            showMovies(data.results);
        });
}

export function showMovies(data) {
    galleryWrapper.innerHTML = '';

    data.forEach((movie) => {
        const { title, poster_path, vote_average, overview, release_date } =
            movie;
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie-wrapper');
        movieElement.innerHTML = `
            <img
            src="${IMAGE_URL + poster_path}"
            alt="${title}"
            class="item"
            />
            <div class="short-description">
                <span class="legend-movie"
                    >${release_date}</span>
                <h3>${title}</h3>
                <div class="avaliation">
                    <img
                        src="./assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png"
                        alt="avaliações TMDb"
                    />
                    <p>
                        <span class="avaliacao">${vote_average}</span> /
                        100
                    </p>
                </div>
                <span class="legend-movie"
                    >${overview}</span>
            </div>

        `;

        galleryWrapper.appendChild(movieElement);
    });
}
