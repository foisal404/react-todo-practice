import React from 'react';
import './List.css'

const List = (props) => {
    const {title ,completed}=props.todo;
    console.log(completed);
    return (
        <div className='item'>
            <h2>title {title}</h2>
            <p>Status {!completed?"undone":"done"}</p>
        </div>
    );
};

export default List;