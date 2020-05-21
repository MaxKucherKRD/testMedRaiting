export default class List {
    constructor(Api, Users, Albums, Photo) {
        this.Api = new Api;
        this.createAlbum = (name, id) => new Albums(name, id)
        this.createUser = (name, id) => new Users(name, id)
        this.createPhoto = (imageUrl, fullSizeUrl, title, id) => new Photo(imageUrl, fullSizeUrl, title, id)        
        this.photoArr = []
        this.container = document.createElement('div')
        this.container.classList.add('content')
        document.querySelector('.main').append(this.container);
        this.setListeners();
    }
    addUsers() {    
        this.Api.getUsers()
            .then(users => {
                console.log(users)
                users.forEach(element => {                   
                    if (Object.keys(element).length < 2){return 0}; // почему-то с API начали приходить пустые обьекты, фильтр для них.
                    const user = this.createUser(element.name, element.id)
                    const {
                        userElement
                    } = user;
                    this.container.append(userElement);
                });
            })
    }
    addAlbums(elementContainer, userId) {
        this.Api.getAlbums(userId, elementContainer)
            .then(albums => {
                albums.forEach(element => {
                    const album = this.createAlbum(element.title, element.id)
                    const {
                        albumElement
                    } = album
                    elementContainer.append(albumElement)
                    elementContainer.classList.toggle('content__albums_is-opened')
                })
            })

    }
    addPhotos(elementContainer, albumId) {
        this.Api.getPhotos(albumId)
            .then((photos) => {

                photos.forEach((element) => {

                    const photo = this.createPhoto(element.thumbnailUrl, element.url, element.title, element.id)
                    this.photoArr.push(photo);
                    const {
                        photoElement
                    } = photo
                    if (localStorage.getItem(element.id) !== null) {
                        photoElement.querySelector('.content__photo-like').classList.add('content__photo-like_is-liked')
                    }
                    elementContainer.append(photoElement);
                })
            })

    }
    setListeners() {
        this.container.addEventListener('click', (event) => {
            const container = event.target.parentElement
            const link = event.target
            if (link.classList.contains('content__author')) {
                if (container.children.length === 2) {
               
                    const albumsContainer = document.createElement('div')
                    albumsContainer.classList.add('content__albums')
                    container.append(albumsContainer)
                    this.addAlbums(albumsContainer, +container.dataset.userid)
                    albumsContainer.classList.toggle('content__albums_is-opened')
                } else {
                    const albumsContainer = container.querySelector('.content__albums')
                    albumsContainer.classList.toggle('content__albums_is-opened')
                }
                const arrowUserName = container.querySelector('.content__arrow')
                arrowUserName.classList.toggle('content__arrow_is-opened')
            }
            if (link.classList.contains('content__album-name')) {

                if (container.children.length === 2) {
                    const photoContainer = document.createElement('div')
                    photoContainer.classList.add('content__photos')
                    container.append(photoContainer);
                    this.addPhotos(photoContainer, +container.dataset.albumid)
                    photoContainer.classList.toggle('content__photos_is-opened')

                } else {
                    const photosContainer = container.querySelector('.content__photos')
                    photosContainer.classList.toggle('content__photos_is-opened')
                }
                const arrowUserName = container.querySelector('.content__arrow')
                arrowUserName.classList.toggle('content__arrow_is-opened')
            }
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

