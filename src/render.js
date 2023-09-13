/*
    Нам необходимо, чтобы при изменении state происходил повторный рендеринг дерева, 
    т.е. вызов должен происходить внутри state.js, именно в нем есть функции которые знают
    об изменении состояния state.
    Т.к. state.js экспортирует функции в index.js, мы не можем из index.js экспортировать
    функцию ререндеринга ReactDOM.createRoot, получим циклическую зависимость 
    (state.js и index.js будут импортировать друг в друга функции).
    Для этого создается отдельный файл render.js который будет экспортирвоать функцию в
    state.js и index.js, что позволит избежать циклической зависимости.
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost} from './redux/state'; //Импорт функции экспортируемой не по default
import {updatePostText} from './redux/state'; //Импорт функции экспортируемой не по default

export let rerenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updatePostText={updatePostText}/>
    </React.StrictMode>
  );
}