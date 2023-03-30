export default class newsApi  {
    constructor (){
        this.searchQuery = ''
    }    

    fetchArticles(){
        fetch(`http://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=5&page=1&apiKey=3ce63eea477043d7a470d2b21dc5ab4b`)
        .then(response=>response.json())
        .then(data=>data.articles)
        .then(articles=>console.log(articles))
            }
}