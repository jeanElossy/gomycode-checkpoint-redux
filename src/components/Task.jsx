import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeLine, deletePost, postEdit } from '../actions/postAction';

const Task = ({ post }) => {

    const [isEdit, setIsEdit] = useState(false);
    const [description, setDescription] = useState(post.description);
    const dispatch = useDispatch();
    const [isChange, setIsChange] = useState(false)

    const handleValided = (e) => {
        e.preventDefault();

        const edit = {
            id : post.id,
            title : post.title,
            description : description
        };

        dispatch(postEdit(edit));
        setIsEdit(false);
    }

    const change = (e) => {
        e.preventDefault();

        const line = {
            id: post.id,
            isDone: isChange
        }
        dispatch(changeLine(line));
        setIsChange(!isChange)
    }

    return (
        <div>
            
            <div className="card w-100 p-2 mt-3">
                {post.isDone ? 
                    
                    (<h1 
                        className="h4"
                        style={{textDecoration : "line-through"}}
                    >
                        {post.title}
                    </h1> )  :
                    
                    (<h1 
                        className="h4"
                    >
                        {post.title}
                    </h1>)
                }
                
                {isEdit ? (
                    <form className="form-group my-3">
                        <textarea 
                            cols="40" 
                            rows="3" 
                            defaultValue={post.description}
                            className="form-control"
                            style={{resize : "none"}}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <input 
                            type="submit" 
                            value="Valider"
                            className="btn btn-outline-info mt-3 float-end"
                            onClick={(e) => handleValided(e)}
                        />
                    </form>   
                ) : (
                    <p>{post.description}</p>
                )}

                <div className="button d-flex justify-content-between">
                    <div>
                        <button 
                            className="btn btn-success"
                            onClick={() => setIsEdit(!isEdit)}
                        >
                            Edit
                        </button>
                        <button 
                            className="btn btn-danger ms-4"
                            onClick={() => dispatch(deletePost(post.id))}
                        >
                            Delete
                        </button>
                    </div>

                    <div>
                        {post.isDone ? (
                            <button 
                                className="btn btn-outline-success"
                                onClick={(e) => change(e)}
                            >
                                isDone
                            </button>
                        ) : (
                            <button 
                                className="btn btn-outline-danger"
                                onClick={(e) => change(e)}
                            >
                                unDone
                            </button>
                        )}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Task
