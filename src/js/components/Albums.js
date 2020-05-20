export default class Albums {
    constructor(name,id) {
        this.albumElement = this.createElement(name,id)

    }
    createElement(name,id) {
        const markup =
        `       
        <img src="./images/next.svg" alt="" class="content__arrow">
        <p class="content__album-name">${name}</p>
        `
        this.element = document.createElement('div');
        this.element.classList.add('content__album')
        this.element.setAttribute('data-albumId', id )
        this.element.insertAdjacentHTML('afterbegin', markup);
        return this.element
    }
}