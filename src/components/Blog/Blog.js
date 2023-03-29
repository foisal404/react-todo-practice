import React from 'react';

const Blog = (props) => {
    return (
        <div className='blog'>
            <h2>Hello this is another Blog</h2>
            <p>hi this is about reading</p>
            <p>hi i am going to mad</p>
            <p><small style={{fontSize:"15px"}}>author {props.name} copyright {props.right}</small></p>
        </div>
    );
};

export default Blog;