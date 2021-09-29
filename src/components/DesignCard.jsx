import React from 'react'
import Addtask from "./Addtask";
import ListTask from "./ListTask";


const DesignCard = () => {

    
    return (
        <div className="container-fluid design--card">

            <div className="row">
                <div 
                    className="card--left col-12 col-md-3"
                >
                    <h1 className="h3 mb-5">TODO LIST</h1>
                    <Addtask />
                </div>
                <div 
                    className="card-right col-12 col-md-9"
                >   
                    <ListTask />  
                </div>
            </div>
            
        </div>
    )
}
export default DesignCard
