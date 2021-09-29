import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';


const ListTask = () => {

    let posts = useSelector(state => state.postReducer);

    return (
        <>
            {posts.map((post) => 
                <Task post={post} key={post.id}/>
            )}
        </>
        
    )
}
export default ListTask;
