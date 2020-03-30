import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

   debugger;
    return (
        <div className={s.item}>
            <img src='https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/1412243/910/607/m1/fpnw/wm0/lawyer-avatar-flat-icon-01-.jpg?1467280299&s=7f76fc556d9c3ce29567ee4f325dd1f3' />
              post1 
            <div>
                <span>like {props.likeCount } </span> 
                <span> {props.message}</span>
            </div>
        </div>

    )
}

export default Post;