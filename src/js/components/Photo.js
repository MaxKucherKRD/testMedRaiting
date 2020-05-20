export default class Photo {
    constructor(imageUrl, fullSizeURL, title, id) {        
        this.fullSizeURL = fullSizeURL
        this.photoId = id;
        this.imageUrl = imageUrl
        this.title = title;        
        this.photoElement = this.createElement(imageUrl, fullSizeURL, title, id)
        this.likeIcon = this.photoElement.querySelector('.content__photo-like');


    }
    createElement() {
       
        const markup =
            `       
        <button class='content__photo-like' data-photoId = "${this.photoId}" '></button>
        <img src="${this.imageUrl}" data-fullSizeUrl ="${this.fullSizeURL}" alt="" class="content__photo">
        <p class="content__photo-name">${this.title}</p>
        `

        this.element = document.createElement('div');
        this.element.classList.add('content__photo-container')
        this.element.setAttribute('data-photoId', this.photoId)
        this.element.insertAdjacentHTML('afterbegin', markup);
        return this.element
    }
    like() {          
        this.likeIcon.classList.toggle('content__photo-like_is-liked');     
        const photoInfo = {
            id: this.photoId,
            title: this.title,
            url: this.fullSizeURL,
            thumbnailUrl: this.imageUrl
        }
        if (localStorage.getItem(this.photoId) === null){
            localStorage.setItem(this.photoId,JSON.stringify(photoInfo));            
        }
        else {
            localStorage.removeItem(this.photoId)
        }
     
        
    }
}