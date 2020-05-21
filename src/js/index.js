import  '../pages/index.css';
import Api from './modules/Api.js';
import Users from './components/Users.js';
import List from './components/List';
import Albums from './components/Albums';
import Photo from './components/Photo';
import FavoriteList from './components/FavoriteList';
import Popup from './components/Popup';
import clearElement from './utilits/clearElement'
import '../images/close.svg';
import '../images/next.svg';



const popup = new Popup;
const root = document.querySelector('.root')
const content = document.querySelector('.main')

root.addEventListener('click',(e)=>{
    if (event.target.id === 'catalog'){
        clearElement(content)
        const list = new List(Api,Users,Albums,Photo);          
        list.addUsers();
    }
    if (event.target.id === 'favorite'){
        clearElement(content)
        const favoriteList = new FavoriteList(Photo)          
        favoriteList.addPhoto()
    }
})