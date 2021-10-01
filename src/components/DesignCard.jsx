import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Addtask from "./Addtask";
import ListTask from "./ListTask";


const DesignCard = () => {

    const [filter, setfilter] = useState(false);
    const posts = useSelector((state) => state.postReducer);

    const handelFilter = () => {
        setfilter(!filter)
    };
    // console.log()

    return (
        <div className="container-fluid design--card">

            <div className="row">
                <div 
                    className="card--left col-12 col-md-3"
                >
                    <h1 className="h3 mb-5">TODO LIST</h1>
                    <Addtask handelFilter={handelFilter} filter={filter}/>
                </div>
                <div 
                    className="card-right col-12 col-md-9"
                >   
                    <ListTask posts={filter ? posts.filter((el) => el.isDone) : posts} />  
                </div>
            </div>
            
        </div>
    )
}
export default DesignCard
