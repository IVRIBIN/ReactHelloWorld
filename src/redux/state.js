/*
Это бизнес уровень, здесь живут данные и логика.
ВАЖНО: На уровне ui для нас первостепенная задача передать актуальные данные в бизнес уровень,
и уже бизнес уровень озаботится запуском перерисовки всего дерева.
Еще раз, ui передает данные в state и уже state инициализирует перерисовку дерева ui.
*/

import {rerenderEntireTree} from '../render';

let state = {
    profilePage:{
        posts : [
            {id: 1, message: 'it,s post 1', likesCount: 5},
            {id: 2, message: 'it,s post 2', likesCount: 12},
        ]
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

export default state;