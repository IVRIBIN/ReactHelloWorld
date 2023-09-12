import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
      <div className={s.item}>
        <img src="https://heaclub.ru/tim/9ead4b466d81ed663ff30ea0414a4426/kartinka-na-avu-dlya-parnei-prikolnaya.jpg"></img>
        {props.message}
      </div>
    );
}

export default Post;