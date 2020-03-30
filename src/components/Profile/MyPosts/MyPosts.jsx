import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {

    let posts =   [
        {id :1, message: 'Hi, how are you?', likeCount: 5 },
        {id :2, message: 'Hi, 2 ?',          likeCount: 15}
    ]

    let post = posts 
    .map(p_ =>  <Post message = {p_.message} likeCount= {p_.likeCount} />)


    return (
        <div>
            <div>
                My page
          </div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>

            <div className={s.posts}> 
            {
                post
            } 
            </div>

        </div>
    )
}

export default MyPosts;