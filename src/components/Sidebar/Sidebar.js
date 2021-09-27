import React from 'react';
import './Sidebar.css';

const Sidebar = (props) => {
    const total = props.charge.reduce((pre, cur)=> pre+cur,0)
    
    return (
        <div className="sidebar">
            <h2>Total Cost <br /> <span style={{marginLeft:"20px",color:"gray"}}>$ <span style={{color:"blue"}}>
           {total}    
            </span></span></h2>
            <hr className="line"/>
            {
                props.name?.map((elm, indx) => <pre>{elm}  ==>  ${props.charge[indx]}</pre>)
            }
        </div>
    );
};

export default Sidebar;