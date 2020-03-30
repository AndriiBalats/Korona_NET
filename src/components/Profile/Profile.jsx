import React from 'react';
import p from'./Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx'



const Profile = () => {
    return  <div> 
    <div>
    <img src='https://s3.amazonaws.com/images.seroundtable.com/google-css-images-1515761601.jpg'/>
    </div>

    <MyPosts/>


   </div>
}

export default  Profile;