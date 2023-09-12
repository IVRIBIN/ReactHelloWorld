import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
    /*
    let posts = [
      {id: 1, message: 'it,s post 1', likesCount: 5},
      {id: 2, message: 'it,s post 2', likesCount: 12},
    ];
    */

    let postsElements = props.posts.map( p => <Post message={p.message}></Post>);

    {/*
    В React работаем не с DOM элементами а с VirtualDom, забудь про обращения через document и т.д. 
    Ниже создаем ссылку на объект через createRef, и эту ссылку присваиваем элементу через ref
    */}
    
    let newPostElement = React.createRef();

    let addPost = () => {
      let text = newPostElement.current.value;//обращаемся к элементы через из ссылке через .curent
      props.addPost(text);//Здесь происходит вызов addPost которая проброшена через props из state.js
      newPostElement.current.value = "";
    }

    return (
      <div className={s.postBlock}>
        <h3>My post</h3>
        <div>
          <div>
            <textarea ref = {newPostElement}></textarea>{/* присваиваем элементу textarea ссылку newPostElement*/}
          </div>
          <div>
            {/* ВАЖНО: на событие вешаем не вызов функции, а объект функции, поэтому без скобок */}
            <button onClick={addPost}>Add post</button>
          </div>
          <button>Delete post</button>
        </div>
        <div className={s.post}>
          {postsElements}
        </div>
      </div>
    );
}

export default MyPosts;