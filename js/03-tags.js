/*
 * Делегування
 * - загальний слухач
 * - один із багатьох
 * - декілька із багатьох та new Set()
 */

 
const tagsContainer = document.querySelector('.js-tags');

tagsContainer.addEventListener('click', onTagsContainerClick)

function onTagsContainerClick(event) {
    console.log(event.target.nodeName);
    if(event.target.nodeName !== 'BUTTON'){
        return;
    }
    
    event.target.classList.toggle('tags__btn--active');
}




// const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;

// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(evt) {
//   if (evt.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const currentActiveBtn = document.querySelector('.tags__btn--active');

//   if (currentActiveBtn) {
//     currentActiveBtn.classList.remove('tags__btn--active');
//   }

//   const nextActiveBtn = evt.target;
//   nextActiveBtn.classList.add('tags__btn--active');
//   selectedTag = nextActiveBtn.dataset.value;

//   console.log(selectedTag);
// }

// const tagsContainer = document.querySelector('.js-tags');
// const selectedTags = new Set();

// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(evt) {
//   if (evt.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const btn = evt.target;
//   const tag = btn.dataset.value;
//   const isActive = btn.classList.contains('tags__btn--active');

//   if (isActive) {
//     selectedTags.delete(tag);
//   } else {
//     selectedTags.add(tag);
//   }

//   btn.classList.toggle('tags__btn--active');
//   console.log(selectedTags);
// }