export default class Api {
    constructor(){

    }
    getUsers(){
     const usersUrl = 'https://json.medrating.org/users/'
     const request = new Request(usersUrl);
     return fetch(request)
     .then((res)=> {
         if (res.ok){
            return res.json()
         }
         else {
             alert('Error API')
         }
     })
    
    }
    getAlbums(userId){
        const usersUrl = `https://json.medrating.org/albums?userId=${userId}`
        const request = new Request(usersUrl);
        return fetch(request)
        .then((res)=> {
            if (res.ok){
               return res.json()
            }
            else {
                alert('Error API')
            }
        })
       
       }
    getPhotos(albumId){
       
        const usersUrl = `https://json.medrating.org/photos?albumId=${albumId}`
        const request = new Request(usersUrl);
        return fetch(request)
        .then((res)=> {
            if (res.ok){
               return res.json()
            }
            else {
                alert('Error API')
            }
        })

    }
}