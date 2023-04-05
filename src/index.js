/*
 * - Пагінація
 *   - сторінка і кількість на сторінці
 * - Завантажуємо статті при сабміті на форму
 * - Завантажуємо статті при на натисканні на кнопку «Завантажити ще»
 * - Оновлюємо сторінку в параметрах запиту
 * - Малюємо статті
 * - Ресет значення під час нового пошуку  
 *
 * https://newsapi.org/
 * 4330ebfabc654a6992c2aa792f3173a3
 * http://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page=1
 */
import NewsApi from './news-api';


const formRef = document.querySelector('.js-search-form');
const articlesContainerRef = document.querySelector('.js-articles-container');
const loadMoreBtn = document.querySelector('[data-action="load-more"]');

formRef.addEventListener('submit', onSearchForm);
loadMoreBtn.addEventListener('click', onLoadMoreClick);

const newsApiService = new NewsApi();

function onSearchForm(event) {
  event.preventDefault();
  const form = event.currentTarget;

  newsApiService.searchQuery = form.elements.query.value;
  newsApiService.fetchArticles() 
}

function onLoadMoreClick() {
  newsApiService.increasePage();
  console.log(newsApiService);
  
  newsApiService.fetchArticles();

}



// function fetchArticles() {
//     const url = `https://newsapi.org/v2/everything?q=${searchQuery}`
//     const options = {
//         headers: {
//             'X-Api-Key': '3ce63eea477043d7a470d2b21dc5ab4b',
//         }        
//     }
//     return fetch(url, options)
//       .then(response => response.json())
//       .then(({ articles }) => {
//         return articles;
//       });
//   }
//   fetchArticles();

// import articlesTpl from './templates/articles.hbs';
// import './css/common.css';
// import NewsApiService from './js/news-service';
// import LoadMoreBtn from './js/components/load-more-btn';

// const refs = {
//   searchForm: document.querySelector('.js-search-form'),
//   articlesContainer: document.querySelector('.js-articles-container'),
// };
// const loadMoreBtn = new LoadMoreBtn({
//   selector: '[data-action="load-more"]',
//   hidden: true,
// });
// const newsApiService = new NewsApiService();

// refs.searchForm.addEventListener('submit', onSearch);
// loadMoreBtn.refs.button.addEventListener('click', fetchArticles);

// function onSearch(e) {
//   e.preventDefault();

//   newsApiService.query = e.currentTarget.elements.query.value;

//   if (newsApiService.query === '') {
//     return alert('Введи что-то нормальное');
//   }

//   loadMoreBtn.show();
//   newsApiService.resetPage();
//   clearArticlesContainer();
//   fetchArticles();
// }

// function fetchArticles() {
//   loadMoreBtn.disable();
//   newsApiService.fetchArticles().then(articles => {
//     appendArticlesMarkup(articles);
//     loadMoreBtn.enable();
//   });
// }

// function appendArticlesMarkup(articles) {
//   refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTpl(articles));
// }

// function clearArticlesContainer() {
//   refs.articlesContainer.innerHTML = '';
// }



 
 
 
 
 
 
 

 
 
 
 
 
 
 

 

