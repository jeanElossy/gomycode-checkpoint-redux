import React from 'react';
import { useState } from "react"
import { useDispatch } from 'react-redux';
import { addPost } from '../actions/postAction';

const Addtask = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isDone, setIsDone] = useState(false);
    const dispatch = useDispatch();
    const [error, setError] = useState(false);
    const [filtre, setFiltre] = useState(null, true, false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title && description) {

            const data = {
                id : new Date().getTime(),
                title,
                description,
                isDone
            };

            dispatch(addPost(data));
            setTitle("");
            setDescription("");
            setError(false)

        } else{
            setError(true);
            alert("Merci de renseigner un titre et une description")
        } 
    };


    const filterTask = (e) => {
        e.preventDefault();

        setFiltre(!filtre);
    };
    

    const condFiltre = () => {
        switch(filtre) {
            case null:
                return "All"
            case true:
                return "isDone"
            case false:
                return "unDone"
            default:
                return null
        }
    };



    return (
        <div className="container">
            <div className="row">

                <form 
                    className="form-group w-100"
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <input 
                        type="text" 
                        placeholder="Title" 
                        className="form-control my-3 bg-transparent text-white"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        style={{ 
                            border: error
                            ? "0.5px solid red" 
                            : "0.5px solid white" 
                        }}
                    />
                    
                    <textarea 
                        cols="30" 
                        rows="5"
                        className="form-control bg-transparent text-white"
                        style={{
                            resize:"none",
                            border: error
                                ? "0.5px solid red" 
                                : "0.5px solid white"
                        }}
                        placeholder="Description"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                    <div className="mt-3">
                        <input 
                            type="checkBox" 
                            id="isDone" 
                            className=""
                            onClick={(e) => setIsDone(!isDone)}
                            value={isDone}
                        />
                        
                        {" "}

                        <label 
                            htmlFor="isDone"
                        >
                            isDone ?
                        </label>
                    </div>
                    
                    <input 
                        type="submit" 
                        value="Ajouter une tache" 
                        className="btn btn-success form-control mt-4 fw-bold"
                    />
                </form>

                <div className="mt-5 d-flex gap-3 justify-content-center">

                    <button 
                        className={filtre ? "btn btn-warning fw-bold" : "btn btn-primary fw-bold"}

                        onClick={(e) => filterTask(e)}
                    >
                        {condFiltre(filtre)}

                    </button>

                </div>
            </div>
        </div>
    )
}

export default Addtask
