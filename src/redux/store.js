/*
 Апгреид объекта state.js Согласно кроку 36 создаем объект store на базе state, 
 обернув все геттерами и сеттерам и упаковав в один объект
*/

let rerenderEntireTree = () => {
    console.log("rerenderEntireTree");
}

let store = {
    profilePage:{
        posts : [
            {id: 1, message: 'it,s post 1', likesCount: 5},
            {id: 2, message: 'it,s post 2', likesCount: 12},
        ],
        newPostText: "",
    },
    dialogsPage:{
        dialogs : [
            {id: 1, name: 'Azvald'},
            {id: 2, name: 'Narzan'},
            {id: 3, name: 'Kakatan'},
            {id: 4, name: 'Pukatan'},
        ],
        messages : [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'Fuk you'},
            {id: 3, message: 'And you'},
            {id: 4, message: 'bich'},
        ] 
    },

    addPost(){
        let newPost = {
            id: 5,
            message: this.profilePage.newPostText,
            likesCount: 0
        };
        this.profilePage.posts.push(newPost);
        this.profilePage.newPostText = "";
        rerenderEntireTree(this);//После добавления post вызываем ререндеринг всего дерева
    },

    updatePostText(newText){
        this.profilePage.newPostText = newText;
        rerenderEntireTree(this);
    }
}

window.store = store;//прикольно отлаживать, теперь в отладчике браузера вводим store и получаем объект

//Экспорт НЕ default, импортируется через {имя}
/*
export const addPost = () => {
    //debugger;
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);//После добавления post вызываем ререндеринг всего дерева
}
*/

/*
export const updatePostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
*/

/* 
    Обертка функции, чтобы избежать циклической зависимости, 
    таким образом мы получаем функцию из index.js но не импортируем сюда сам index.js
*/
export const subscrib = (observer) => {
    /* 
        observer (наблюдатель) является паттерном
        index.js сюда закинул свой rerenderEntireTree в observer, после чего присваиваем здешнему
        rerenderEntireTree функцию из index.js
    */
    rerenderEntireTree = observer;
}

export default store;