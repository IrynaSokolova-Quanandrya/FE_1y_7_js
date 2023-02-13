import galleryItemTpl from '../templates/gallery-item';
import countries from './countries.json';
import '../css/common.css';
import '../css/gallery.css';

const galleryRef = document.querySelector('.js-gallery');

const markup = galleryItemTpl(countries);

galleryRef.insertAdjacentHTML('beforeend', markup)

