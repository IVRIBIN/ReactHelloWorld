//import React from 'react';
//import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import state from './redux/state';
//import {addPost} from './redux/state'; //Импорт функции экспортируемой не по default

import {rerenderEntireTree} from './render';
import state from './redux/state';


//Вызывается единожды и отрисовывает все вложеннве компоненты

/*
export let rerenderEntireTree = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} />
    </React.StrictMode>
  );
}
*/

/*
Остальное закоменчено, т.к. теперь отрисовка всего дерева вынесена в отдельную функцию,
которую дерагает в том числе и state при изменении состояния.
Вызываем кастомную функцию ререндеринга всего дерева
*/
rerenderEntireTree(state);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
