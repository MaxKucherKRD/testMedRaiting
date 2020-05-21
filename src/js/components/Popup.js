export default class Popup {
    constructor() {
        this.popup = document.querySelector('.popup');
        this.root = document.querySelector('.root');
        this.setListeners();
    }
    open() {
        this.popup.classList.add('popup__is-opened')
    }
    close() {
        this.popup.classList.remove('popup__is-opened')
        this.popup.innerHTML = '';
    }
    closeEsc(event) {
        console.log(event)
        if (event.key === `Escape`) {
            this.close(this.popup);
        }
    }
    closeMouse(event) {
        if (event.target === this.popup) {
            this.close(this.popup);
        }

    }
    addPhoto(event) {
        this.link = event.target.dataset.fullsizeurl;
        const markup =
            `        
        <img class="popup__picture" src="${this.link}">
        <img class="popup__close" src="./images/close.svg">  
        `
        this.container = document.createElement('div');
        this.container.classList.add('popup__picture-container');
        this.container.insertAdjacentHTML('afterbegin', markup);
        this.popup.append(this.container)
        this.open()

    }
    setListeners() {
        this.root.addEventListener('click', (event) => {
            if (event.target.classList.contains('content__photo')) {
                this.addPhoto(event);
            }    
   
        })
        this.popup.addEventListener('mousedown', event => {
            this.closeMouse(event);
        });
        window.addEventListener('keydown', event => {
            this.closeEsc(event);
        })
        this.popup.addEventListener('click',(event)=>{
            if (event.target.classList.contains('popup__close') ){                
                this.close(event);
            }
        })

    }
}