import React from "react";

const Props = (prop) =>{
    return(
        <div>
            <div className="props">
                <div className="card">
                    <img src={prop.img}></img>
                    <h1> Name: {prop.user}</h1>
                    <h3> Age:{prop.age} Years</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, assumenda.</p>
                    <button>Leran More</button>
                </div>
                
            </div>
        </div>
    )
}

export default Props