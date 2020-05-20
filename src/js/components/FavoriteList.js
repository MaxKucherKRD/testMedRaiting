export default class FavoriteList {
    constructor(Photo){
        this.container = document.querySelector('.content')
        this.createPhoto = (imageUrl,fullSizeUrl, title, id) => new Photo(imageUrl,fullSizeUrl, title, id)
        this.photoArr = []
        this.container = document.createElement('div')
        this.container.classList.add('photo-gallery')
        document.querySelector('.main').append(this.container);
        this.setListeners();
       
    }
    addPhoto(){        
        while (this.container.firstChild){
            this.container.removeChild(this.container.firstChild)
        }
        for(let i=0; i<localStorage.length; i++) {              
            const key = localStorage.key(i); 
            if (isNaN(+key)){continue}
            const photoObj = JSON.parse(localStorage.getItem(key));            
            const photo = this.createPhoto(photoObj.thumbnailUrl,photoObj.url, photoObj.title,photoObj.id)                                     
            this.photoArr.push(photo);
            const {photoElement} = photo
            photoElement.querySelector('.content__photo-like').classList.add('content__photo-like_is-liked');
            photoElement.querySelector('.content__photo-name').classList.add('content__photo-name_visible');
            this.container.append(photoElement);                 
           
          }

    }
    setListeners(){
        this.container.addEventListener('click',()=>{
            if (event.target.classList.contains('content__photo-like')) {
                const photoId = event.target.dataset.photoid;
                this.photo = this.photoArr.find(function (item) {
                    return item.photoId === +photoId
                })
                this.photo.like()
                
            }
        })
    }

}