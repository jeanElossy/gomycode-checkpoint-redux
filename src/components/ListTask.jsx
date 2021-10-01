import React from 'react';
import Task from './Task';


const ListTask = ({posts}) => {

    return (
        <>
            {posts.map((post) => 
                <Task post={post} key={post.id}/>
            )}
        </>
        
    )
}
export default ListTask;
