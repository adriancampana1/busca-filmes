import { getMovies } from './moviesRequest';

const featuredControls = document.querySelectorAll('.featured-movie .control');

let currentItemFeatured = 0;
let currentItemRecent = 0;

export async function sliderControl() {
    const itemsFeatured = document.querySelectorAll(
        '.featured-movie .gallery .movie-wrapper'
    );
    const maxItemsFeatured = itemsFeatured.length;

    featuredControls.forEach((control) => {
        control.addEventListener('click', () => {
            const isFeaturedLeft = control.classList.contains('arrow-left');

            if (isFeaturedLeft) {
                currentItemFeatured -= 1;
            } else {
                currentItemFeatured += 1;
            }

            if (currentItemFeatured >= maxItemsFeatured) {
                currentItemFeatured = 0;
            }

            if (currentItemFeatured < 0) {
                currentItemFeatured = maxItemsFeatured - 1;
            }
            console.log(itemsFeatured);
            itemsFeatured.forEach((item) =>
                item.classList.remove('current-item')
            );

            itemsFeatured[currentItemFeatured].scrollIntoView({
                behavior: 'auto',
            });

            itemsFeatured[currentItemFeatured].classList.add('current-item');
            console.log(itemsFeatured);
        });
    });
}

sliderControl();
