import React from 'react';
import ReactDOM from 'react-dom/client';
//import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost,updatePostText,subscrib} from './redux/state'; //Импорт функции экспортируемой не по default

import { BrowserRouter } from 'react-router-dom';
import state from './redux/state';
import store from './redux/store';

//Вызывается единожды и отрисовывает все вложеннве компоненты


let rerenderEntireTree = (state,store) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updatePostText={updatePostText} store={store}/>
    </React.StrictMode>
  );
}


/*
let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} updatePostText={updatePostText}/>
    </BrowserRouter>, document.getElementById('root'))
}
*/

/*
Остальное закоменчено, т.к. теперь отрисовка всего дерева вынесена в отдельную функцию,
которую дерагает в том числе и state при изменении состояния.
Вызываем кастомную функцию ререндеринга всего дерева
*/
rerenderEntireTree(state);
subscrib(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
