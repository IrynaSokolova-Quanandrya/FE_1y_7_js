const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const refs = {
  galleryList: document.querySelector('.js-gallery'),
  modal: document.querySelector('.js-lightbox'),
  closeBtn: document.querySelector('[data-action="close-lightbox"'),
  largeImg: document.querySelector('.lightbox__image'),
  overlay: document.querySelector('.lightbox__overlay'),
}

refs.galleryList.addEventListener('click', onModalOpen);
refs.modal.addEventListener('click', onOverlayClose);
refs.closeBtn.addEventListener('click', onModalClose);
let value= 0;
const galleryItemEl = galleryItems.map(({preview, description, original})=>{
return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
    data-index="${value += 1}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      data-index="${value += 1}"
      alt="${description}"
    />
  </a>
</li>`
}).join('');

refs.galleryList.insertAdjacentHTML('beforeend', galleryItemEl)

function onModalOpen(e){
  window.addEventListener('keydown', onEscClose);
  window.addEventListener('keydown', onLeftRightChange)
  setNodeClass(e.target.nodeName, e.target.dataset.source);
}

function onLeftRightChange(e){
  console.log(e.code);
  if(e.code === 'ArrowRight'){
    console.log(Number(e.target.dataset.index));
    e.target.dataset.index = Number(e.target.dataset.index) += 1;
  }
}

function setNodeClass(nodeName, largeUrl){
  if(nodeName === 'IMG'){
    refs.modal.classList.add('is-open');
    refs.largeImg.src = largeUrl;
  }
}

function onModalClose(){  
  window.removeEventListener('keydown', onEscClose)
    refs.modal.classList.remove('is-open');
    refs.largeImg.src = '' ;
}

function onOverlayClose(e){
  if(e.target === refs.overlay){
    onModalClose();
    window.removeEventListener('keydown', onEscClose);
    refs.largeImg.src = '';
  }
}

function onEscClose(e){
  if(e.code === 'Escape'){
    onModalClose();
    refs.largeImg.src = '';
  }
}


                