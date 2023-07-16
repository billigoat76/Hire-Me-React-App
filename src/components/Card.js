import { useState } from "react";


function Card({id, image,info,previousctc,name, removePerson})  {
    const[readmore,setReadmore] = useState(false);
    
    const description = readmore ? info :`${info?.substring(0,200)}....`;
    function readmoreHandler() {
        setReadmore(!readmore);
    }


    return (
        
        <div className="card">

            <img src={image} alt="Profile Picture" className="image"></img>

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">{previousctc}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `Show Less`: `Read More`}
                    </span>
                </div>
            </div>

            <button className="btn-red" onClick={() => removePerson(id)}>
                Not Interested
            </button>
        </div>
        
    );
}

export default Card;