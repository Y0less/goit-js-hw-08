export { generateMarkup, importMarkupInGallery };

const galleryGrid = document.querySelector('.gallery');

function generateMarkup(galleryObj) {
  return galleryObj
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    )
    .join('');
}

function importMarkupInGallery(markup) {
  galleryGrid.innerHTML = markup;
}
