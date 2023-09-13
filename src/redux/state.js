/*
Это бизнес уровень, здесь живут данные и логика.
ВАЖНО: На уровне ui для нас первостепенная задача передать актуальные данные в бизнес уровень,
и уже бизнес уровень озаботится запуском перерисовки всего дерева.
Еще раз, ui передает данные в state и уже state инициализирует перерисовку дерева ui.

Согласно концепции FLUX которую реализует redux, ui уровень меняется, только из state,
поэтому мы не будем брать значение из пропа vakue у input (чтобы исключить кейс, 
что ui объект хранит в себе текст, которого еще нет в state).
На событие onCange вешаем отправку значения в state, и уже state инициирует перерисовку ui.
Т.е. с виду мы воодим значение в инпут и нажимаем addPost, а пофакту уже при вводе первого символа
в state меняется атрибут newPostText, и сразу после изменения атрибута уже ИЗ state вызвается перерисовка ui.
*/

import {rerenderEntireTree} from '../render';

let state = {
    profilePage:{
        posts : [
            {id: 1, message: 'it,s post 1', likesCount: 5},
            {id: 2, message: 'it,s post 2', likesCount: 12},
        ],
        newPostText: "def postValue",
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
    }
    
    
}


//Экспорт НЕ default, импортируется через {имя}
export let addPost = (postMessage) => {
    //debugger;
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);//После добавления post вызываем ререндеринг всего дерева
}

export let updatePostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;