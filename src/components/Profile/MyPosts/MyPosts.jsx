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

    let onPostChange = () => {
      let text = newPostElement.current.value;//обращаемся к элементу через из ссылки через .curent
      props.updatePostText(text);
    }

    {/*
    В React работаем не с DOM элементами а с VirtualDom, забудь про обращения через document и т.д. 
    Ниже создаем ссылку на объект через createRef, и эту ссылку присваиваем элементу через ref
    */}
    
    let newPostElement = React.createRef();

    let addPost = () => {
      //в props.addPost мы отправляем не value элемента, а проп из state(прокинут сюда через props),
      //а он меняется через onPostChange вызовом функции
      props.addPost(props.newPostText);//Здесь происходит вызов addPost которая проброшена через props из state.js
      props.updatePostText("");
    }

    return (
      <div className={s.postBlock}>
        <h3>My post</h3>
        <div>
          <div>
            {/* присваиваем элементу textarea ссылку newPostElement*/}
            <textarea onChange={onPostChange} value={props.newPostText} ref = {newPostElement}></textarea>
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