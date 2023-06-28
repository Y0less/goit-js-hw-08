// Add imports above this line
import { galleryItems } from './gallery-items';
import { generateMarkup, importMarkupInGallery } from './01-modules';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

importMarkupInGallery(generateMarkup(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.85,
});
