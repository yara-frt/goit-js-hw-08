import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const list = document.querySelector('.gallery');

const markup = galleryItems.reduce((acc, { preview, original, description }) => acc += `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`, '');
list.insertAdjacentHTML('beforeend', markup);

let originalGallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
