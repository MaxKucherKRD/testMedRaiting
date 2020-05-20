export default class Users {
    constructor(name, id) {
        this.userElement = this.createElement(name, id)

    }
    createElement(name, id) {
        const markup =
        `       
      <img src="./images/next.svg"  alt="" class="content__arrow"><p class="content__author" data-userId ='${id}'>${name}</p>
        `
        this.element = document.createElement('div');
        this.element.classList.add('content__item')
        this.element.setAttribute('data-userId', id )
        this.element.insertAdjacentHTML('afterbegin', markup);
        return this.element
    }
}