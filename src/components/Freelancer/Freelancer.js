import React from 'react';
import Rating from 'react-rating';
import './Freelancer.css';



const Freelancer = (props) => {
    // console.log(props)
    const {img, name, status, rating, charge} = props.freelancer;
    return (
        <div className="freelancerProfile">
            <img src={img} alt="" />
            <p className="naming">
                <span style={{fontSize:"22px"}}>{name}</span> <br />
                <span style={{fontSize:"16px", fontWeight:"300"}}>{status}</span> <br />
                <span style={{fontSize:"22px"}}>  
                <Rating
                    initialRating={rating}
                    emptySymbol="fa fa-star-o fa-2x icon-color"
                    fullSymbol="fa fa-star fa-2x icon-color"
                    readonly
                />
                </span>
            </p>
            <button onClick={()=>props.handleClick(name, charge)} className="commonbtn">Hire Me</button>
            <h4 className="charge">${charge}/hr</h4>
        </div>
    );
};

export default Freelancer;